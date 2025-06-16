package com.greata.cozy.controllers;

import java.util.List;
import java.util.Map;

import com.greata.cozy.dto.OrderResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import com.greata.cozy.dto.OrderRequestDTO;
import com.greata.cozy.serveces.OrderService;
import com.greata.cozy.dao.UserDao;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;
    private final UserDao userDao;

    public OrderController(OrderService orderService, UserDao userDao) {
        this.orderService = orderService;
        this.userDao = userDao;
    }

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody OrderRequestDTO orderRequestDTO, Authentication authentication) {
        try {
            long userId = userDao.getUserIdFromAuth(authentication);
            Map<String, String> paymentSession = orderService.createOrder(
                    orderRequestDTO,
                    userId
            );

            // Return  response with a message
            return ResponseEntity.ok(paymentSession);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    // endpoint for admin to mark the order as delivered
    @PutMapping("/delivered/{orderId}")
    public ResponseEntity<String> markOrderAsDelivered(@PathVariable long orderId) {
        return  orderService.markOrderAsDelivered(orderId);
    }

    @PutMapping("/cancel/{orderId}")
    public ResponseEntity<String> cancelOrder(@PathVariable long orderId) {
        return orderService.cancelOrder(orderId);
    }

    @GetMapping("/all")
    public ResponseEntity<List<OrderResponseDTO>> getAllOrdersByUserId(Authentication authentication) {
        long userId = userDao.getUserIdFromAuth(authentication);
        return orderService.getAllOrdersByUserId(userId);
    }

}