package com.greata.cozy.entities;

public class Orders {
    private long id;
    private long userId;
    private String address;
    private String status;

    public Orders() {
    }

    public Orders(long userId, String address, String status) {
        this.userId = userId;
        this.address = address;
        this.status  = status;
    }

    public Orders(long id, long userId, String address, String status) {
        this.id = id;
        this.userId = userId;
        this.address = address;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
