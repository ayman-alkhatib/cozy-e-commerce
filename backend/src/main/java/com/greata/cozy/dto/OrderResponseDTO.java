package com.greata.cozy.dto;

import java.util.List;

public class OrderResponseDTO {
    private long orderId;
    private String email;
    private String address;
    private List<OrderResponseItemDTO> items;
    private double total;

    public OrderResponseDTO(long orderId,String email, String address,List<OrderResponseItemDTO> items, double total) {
       this.orderId= orderId;
        this.email = email;
        this.address = address;
        this.items = items;
        this.total = total;
    }

    public long getOrderId() {
        return orderId;
    }
    public void setOrderId(long orderId) {
        this.orderId = orderId;
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

}
