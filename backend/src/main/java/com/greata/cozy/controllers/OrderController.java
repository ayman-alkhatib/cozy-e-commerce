package com.greata.cozy.controllers;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import com.greata.cozy.dto.OrderResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.greata.cozy.dto.OrderRequestDTO;
import com.greata.cozy.serveces.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody OrderRequestDTO orderRequest) {
        try {
            orderService.createOrder(orderRequest);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of(
                    "error", e.getMessage(),
                    "timestamp", LocalDateTime.now()));
        }
    }

    @GetMapping("{email}")
    public ResponseEntity<?> getOrdersByEmail(@PathVariable String email) {
        return orderService.getOrderByEmail(email);
    }

    @GetMapping("/all/{email}")
    public ResponseEntity<List<OrderResponseDTO>> getAllOrdersByEmail(@PathVariable String email) {
        return orderService.getAllOrdersByEmail(email);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);

    }
}