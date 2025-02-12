package com.greata.cozy.entities;

public class Orders {
    private long id;
    private String email;

    public Orders() {
    }

    public Orders(String email) {
        this.email = email;
    }
    public Orders(long id, String email) {
        this.id = id;
        this.email = email;
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
}
