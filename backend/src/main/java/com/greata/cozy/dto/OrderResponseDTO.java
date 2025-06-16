package com.greata.cozy.dto;

import java.util.List;

public class OrderResponseDTO {
    private long orderId;
    private long userId;
    private String address;
    private List<OrderResponseItemDTO> items;
    private double total;
    private String status;

    public OrderResponseDTO(long orderId, long userId, String address, List<OrderResponseItemDTO> items, double total, String status) {
        this.orderId = orderId;
        this.userId = userId;
        this.address = address;
        this.items = items;
        this.total = total;
        this.status = status;
    }
    public long getOrderId() {
        return orderId;
    }
    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<OrderResponseItemDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderResponseItemDTO> items) {
        this.items = items;
    }
    public double getTotal() {
        return total;
    }
    public void setTotal(double total) {
        this.total = total;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
}
