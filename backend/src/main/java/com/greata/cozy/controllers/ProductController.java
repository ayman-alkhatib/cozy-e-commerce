package com.greata.cozy.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.greata.cozy.dao.ProductDao;
import com.greata.cozy.entities.Product;

@RestController
@RequestMapping("product")
public class ProductController {
    private final ProductDao productDao;

    public ProductController(ProductDao productDao) {
        this.productDao = productDao;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getAll() {
        return productDao.getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable long id) {
        return ResponseEntity.ok(productDao.getById(id));
    }

    @GetMapping("/quantity/{id}")
    public ResponseEntity<Integer> getQuantity(@PathVariable long id) {
        return productDao.getProductQuantity(id);
    }

    @PostMapping("/quantity/{id}/{quantity}")
    public ResponseEntity<String> createProduct(@PathVariable long id, @PathVariable int quantity) {
        return productDao.updateProductQuantity(id, quantity);
    }

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        return productDao.saveProduct(product);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable long id) {
        return productDao.deleteProduct(id);
    }

}
