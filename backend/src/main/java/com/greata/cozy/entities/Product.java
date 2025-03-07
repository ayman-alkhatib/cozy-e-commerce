package com.greata.cozy.entities;

public class Product {
    private long id;
    private String name;
    private String description;
    private String category;
    private String thumbnail;
    private double price;
    private int quantity;

    public Product() {
    }

    public Product(String name,String description,String category ,String thumbnail,double price, int quantity) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.thumbnail = thumbnail;
        this.price = price;
        this.quantity = quantity;
    }

    public Product(long id, String name,String description,String category,String thumbnail, double price, int quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.thumbnail = thumbnail;
        this.price = price;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
    public String getThumbnail() {
        return thumbnail;
    }
    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}
