package com.greata.orderly.entities;

public class ProductImage {
    private long id;
    private long productId;
    private long imageId;

    public ProductImage() {
    }
    public ProductImage(long productId, long imageId) {
        this.productId = productId;
        this.imageId = imageId;
    }
    public ProductImage(long id, long productId, long imageId) {
        this.id = id;
        this.productId = productId;
        this.imageId = imageId;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public long getImageId() {
        return imageId;
    }

    public void setImageId(long imageId) {
        this.imageId = imageId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
