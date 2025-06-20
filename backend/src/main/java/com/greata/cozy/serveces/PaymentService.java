package com.greata.cozy.serveces;

import com.greata.cozy.dto.OrderResponseItemDTO;
import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import jakarta.annotation.PostConstruct;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Value("${stripe.secret.key}")
    private String stripeSecretKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeSecretKey;
    }

    public String createCheckoutSession(long orderId, List<OrderResponseItemDTO> items) {

        // create line items for the Stripe Checkout Session
        List<SessionCreateParams.LineItem> lineItems = items.stream()
                .map(item -> SessionCreateParams.LineItem.builder()
                        .setQuantity((long) item.getQuantity())
                        .setPriceData(
                                SessionCreateParams.LineItem.PriceData.builder()
                                        .setCurrency("eur")
                                        .setUnitAmount((long) (item.getPrice() * 100)) // Stripe requires amount in cents
                                        .setProductData(
                                                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                        .setName(item.getName())
                                                        .build()
                                        )
                                        .build()
                        )
                        .build())
                .toList();


        // Create the Stripe Checkout Session parameters
        SessionCreateParams params = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/orders?session_id={CHECKOUT_SESSION_ID}")
                .setCancelUrl("http://localhost:3000/orders?cancel")
                .addAllLineItem(lineItems)
                .putMetadata("order_id", String.valueOf(orderId))
                .build();

        // Create the Stripe Checkout Session
        try{
           Session session = Session.create(params);
           return session.getUrl();
        } catch (Exception e) {
            throw new RuntimeException("Failed to create Stripe Checkout Session: " + e.getMessage());
        }
    }

    public Session retrieveSession(String sessionId) throws Exception {
        return Session.retrieve(sessionId);
    }
}
