package com.greata.orderly.dto;

import java.util.List;

public class OrderRequestDTO {
    private String email;
    private List<OrderItemDTO> items;

    public OrderRequestDTO(String email, List<OrderItemDTO> items) {
        this.email = email;
        this.items = items;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<OrderItemDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderItemDTO> items) {
        this.items = items;
    }
}

