package com.greata.cozy.dto;

import java.util.List;

public class OrderResponseDTO {
    private long orderId;
    private String email;
    private List<OrderResponseItemDTO> items;
    private double total;

    public OrderResponseDTO(String email, List<OrderResponseItemDTO> items, double total) {
        this.email = email;
        this.items = items;
        this.total = total;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<OrderResponseItemDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderResponseItemDTO> items) {
        this.items = items;
    }

}
