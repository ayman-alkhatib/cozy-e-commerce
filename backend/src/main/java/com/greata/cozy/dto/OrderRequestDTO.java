package com.greata.cozy.dto;

import java.util.List;

public class OrderRequestDTO {
    private String email;
    private String address;
    private List<OrderItemDTO> items;

    public OrderRequestDTO(String email, String address, List<OrderItemDTO> items) {
        this.email = email;
        this.address = address;
        this.items = items;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public List<OrderItemDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderItemDTO> items) {
        this.items = items;
    }
}

