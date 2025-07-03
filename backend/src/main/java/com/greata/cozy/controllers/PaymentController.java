package com.greata.cozy.controllers;

import com.greata.cozy.serveces.OrderService;
import com.greata.cozy.serveces.PaymentService;
import com.stripe.model.PaymentIntent;
import com.stripe.model.checkout.Session;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    private final PaymentService paymentService;
    private final OrderService orderService;

    public PaymentController(PaymentService paymentService, OrderService orderService) {
        this.paymentService = paymentService;
        this.orderService = orderService;
    }

    @PostMapping("/confirm-payment")
    public ResponseEntity<?> confirmPayment(@RequestBody Map<String, Object> data) {
        try {
            long orderId;
            Object orderIdObj = data.get("orderId");
            if (orderIdObj instanceof Number) {
                orderId = ((Number) orderIdObj).longValue();
            } else if (orderIdObj instanceof String) {
                orderId = Long.parseLong((String) orderIdObj);
            } else {
                return ResponseEntity.badRequest().body(Map.of("error", "Invalid orderId type"));
            }

            String sessionId = (String) data.get("sessionId");
            Session paymantSession = paymentService.retrieveSession(sessionId);

            if (!"paid".equals(paymantSession.getPaymentStatus())) {
                return ResponseEntity.badRequest().body(Map.of("error", "Payment not successful."));
            }
            orderService.markOrderPaid(orderId);
            return ResponseEntity.ok(Map.of("status", "PAID"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
}