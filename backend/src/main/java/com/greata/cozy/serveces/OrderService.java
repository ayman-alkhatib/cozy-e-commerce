package com.greata.cozy.serveces;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.greata.cozy.dto.OrderItemDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greata.cozy.dao.OrderItemsDao;
import com.greata.cozy.dao.OrdersDao;
import com.greata.cozy.dao.ProductDao;
import com.greata.cozy.dto.OrderRequestDTO;
import com.greata.cozy.dto.OrderResponseDTO;
import com.greata.cozy.dto.OrderResponseItemDTO;
import com.greata.cozy.entities.OrderItems;
import com.greata.cozy.entities.Orders;
import com.greata.cozy.entities.Product;

@Service
public class OrderService {
    private final OrdersDao ordersDao;
    private final OrderItemsDao orderItemsDao;
    private final ProductDao productDao;
    private final PaymentService paymentService;

    public OrderService(OrdersDao ordersDao, OrderItemsDao orderItemsDao, ProductDao productDao, PaymentService paymentService) {
        this.ordersDao = ordersDao;
        this.orderItemsDao = orderItemsDao;
        this.productDao = productDao;
        this.paymentService = paymentService;
    }

    @Transactional
    public Map<String, String> createOrder(OrderRequestDTO orderRequest, long userId) throws Exception {

        // 1. Create the order
        Orders order = ordersDao.createOrder(new Orders(userId, orderRequest.getAddress(), "PENDING"));

        // 2. Process each order item
        for (OrderItemDTO item : orderRequest.getItems()) {
            processOrderItem(order.getId(), item);
        }

        // 3. Create Stripe Checkout Session and return the payment URL
        
        List<OrderResponseItemDTO> items = getOrderItemsByOrderId(order.getId());
        String checkoutUrl = paymentService.createCheckoutSession(order.getId(), items);

        return Map.of(
            "orderId", String.valueOf(order.getId()),
            "checkoutUrl", checkoutUrl
        );
    }

    @Transactional
    public ResponseEntity<List<OrderResponseDTO>> getAllOrdersByUserId(long userId) {
        List<Orders> orders = ordersDao.getAllOrdersByUserId(userId);

        List<OrderResponseDTO> orderResponseDTO = orders.stream().map(order ->{
            List<OrderResponseItemDTO> items = getOrderItemsByOrderId(order.getId());
            return new OrderResponseDTO(
                    order.getId(),
                    order.getUserId(),
                    order.getAddress(),
                    items,
                    getTotalPrice(items),
                    order.getStatus()
            );
        }).toList();
        return ResponseEntity.ok(orderResponseDTO);
    }

    private List<OrderResponseItemDTO> getOrderItemsByOrderId(long orderId) {
        List<OrderItems> orderItems = orderItemsDao.getOrderItemsByOrderId(orderId);
        List<OrderResponseItemDTO> orderResponseItemDTOList = new ArrayList<>();

        for (OrderItems item : orderItems) {
            Product product = productDao.getById(item.getProductId());
            orderResponseItemDTOList.add(
                new OrderResponseItemDTO(
                        item.getId(),
                        product.getName(),
                        product.getPrice(),
                        item.getQuantity(),
                product.getPrice() * item.getQuantity()));
        }

        return orderResponseItemDTOList;
    }

    private double getTotalPrice(List<OrderResponseItemDTO> items) {
        return items.stream().mapToDouble(OrderResponseItemDTO::getSubTotal).sum();
    }

    private void processOrderItem(long orderId, OrderItemDTO item) {
        // Verify product exists and get current Product
        Product product = productDao.getById(item.getProductId());

        // Check stock
        int currentStock = product.getQuantity();
        if (currentStock < item.getQuantity()) {
            throw new RuntimeException("Insufficient stock for product ID: " + item.getProductId());
        }

        // Update stock
        productDao.updateProductQuantity(item.getProductId(), currentStock - item.getQuantity());

        // Create order item
        orderItemsDao.createOrderItem(new OrderItems(
                orderId,
                item.getProductId(),
                item.getQuantity(),
                product.getPrice()));
    }

    // Mark order as PAID
    @Transactional
    public void markOrderPaid(long orderId) {
        Orders order = ordersDao.getOrderById(orderId);
        order.setStatus("PAID");
        ordersDao.updateOrder(order);
    }

    public ResponseEntity<String> markOrderAsDelivered(long orderId) {
        Orders order = ordersDao.getOrderById(orderId);

        if ("PENDING".equals(order.getStatus())) {
            return ResponseEntity.badRequest().body("Order must be paid before marking as delivered");
        }

        if("DELIVERED".equals(order.getStatus())) {
            return ResponseEntity.badRequest().body("Order is already marked as delivered");
        }

        order.setStatus("DELIVERED");
        ordersDao.updateOrder(order);

        return ResponseEntity.ok("Order marked as delivered successfully");
    }

    public ResponseEntity<String> cancelOrder(long orderId) {
        Orders order = ordersDao.getOrderById(orderId);
        if ("DELIVERED".equals(order.getStatus())) {
            return ResponseEntity.badRequest().body("Cannot cancel a delivered order");
        }
        if ("CANCELLED".equals(order.getStatus())) {
            return ResponseEntity.badRequest().body("Order is already cancelled");
        }
        order.setStatus("CANCELLED");
        ordersDao.updateOrder(order);
        return ResponseEntity.ok("Order cancelled successfully");
    }
}