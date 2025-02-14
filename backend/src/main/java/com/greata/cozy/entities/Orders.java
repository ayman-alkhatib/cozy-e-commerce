package com.greata.cozy.entities;

public class Orders {
    private long id;
    private String email;
    private String address;

    public Orders() {
    }

    public Orders(String email, String address) {
        this.email = email;
        this.address = address;
    }
    public Orders(long id, String email, String address) {
        this.id = id;
        this.email = email;
        this.address = address;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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
}
