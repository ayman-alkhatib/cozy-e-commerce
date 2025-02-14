package com.greata.cozy.serveces;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greata.cozy.dao.OrderItemsDao;
import com.greata.cozy.dao.OrdersDao;
import com.greata.cozy.dao.ProductDao;
import com.greata.cozy.dto.OrderItemDTO;
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

    public OrderService(OrdersDao ordersDao, OrderItemsDao orderItemsDao, ProductDao productDao) {
        this.ordersDao = ordersDao;
        this.orderItemsDao = orderItemsDao;
        this.productDao = productDao;
    }

    @Transactional
    public void createOrder(OrderRequestDTO orderRequest) {
        // 1. Create the order
        Orders order = ordersDao.createOrder(new Orders(orderRequest.getEmail()));

        // 2. Process each order item
        for (OrderItemDTO item : orderRequest.getItems()) {
            processOrderItem(order.getId(), item);
        }
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

    @Transactional
    public ResponseEntity<OrderResponseDTO> getOrderByEmail(String email) {
        Orders orders = ordersDao.getOrderByEmail(email);
        List<OrderResponseItemDTO> items = getOrderItemsByOrderId(orders.getId());

        return ResponseEntity.ok(new OrderResponseDTO(
                orders.getEmail(),
                items,
                getTotalPrice(items)));
    }

    public ResponseEntity<List<OrderResponseDTO>> getAllOrdersByEmail(String email) {
        List<Orders> orders = ordersDao.getAllOrdersByEmail(email);

        List<OrderResponseDTO> orderResponseDTO = orders.stream().map(order ->{
            List<OrderResponseItemDTO> items = getOrderItemsByOrderId(order.getId());
           return new OrderResponseDTO(
                    order.getEmail(),
                    items,
                    getTotalPrice(items)
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


}
