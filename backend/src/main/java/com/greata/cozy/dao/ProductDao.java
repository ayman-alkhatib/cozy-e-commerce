package com.greata.cozy.dao;

import com.greata.cozy.entities.Product;
import com.greata.cozy.exceptions.ResourceNotFoundException;
import java.util.List;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDao {
    private final JdbcTemplate jdbcTemplate;

    public ProductDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Product> productRowMapper = (rs, _)-> new Product(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("description"),
            rs.getString("category"),
            rs.getString("thumbnail"),
            rs.getDouble("price"),
            rs.getInt("stock_quantity")
    );

    public ResponseEntity<List<Product>> getAllProducts() {
        String sql = "select * from products";
        List<Product> products = jdbcTemplate.query(sql, productRowMapper);
        return ResponseEntity.ok().cacheControl(CacheControl.maxAge(1, java.util.concurrent.TimeUnit.MINUTES).cachePublic()).body(products);
    }

    public Product getById(long id) {
        String sql = "select * from products where id = ?";
        Product product = jdbcTemplate.query(sql, productRowMapper, id).stream().findFirst().orElseThrow(()->new ResourceNotFoundException("Product with id " + id + " not found"));
        if (product == null) {
            throw new ResourceNotFoundException("Product with id " + id + " not found");
        }
        return product;

    }

    public ResponseEntity<Product> saveProduct(Product product) {
        String sql = "INSERT INTO products (name, description, category,thumbnail, price, stock_quantity) VALUES (?, ?, ?, ?, ?, ?)";
        int rowAffected= jdbcTemplate.update(sql, product.getName(), product.getDescription(),product.getCategory(),product.getThumbnail(), product.getPrice(), product.getQuantity());
        return rowAffected>0? ResponseEntity.ok(product) : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    public ResponseEntity<Integer> getProductQuantity(long id) {
        String sql = "select stock_quantity from products where id = ?";
         int ProductQuantity = jdbcTemplate.queryForObject(sql, Integer.class, id);
         if(ProductQuantity<=0) {
            throw new ResourceNotFoundException("Product with id " + id + " not found");
         }
             return ResponseEntity.ok(ProductQuantity);
    }

    public ResponseEntity<String> updateProductQuantity(long id, int quantity) {
        if(!isProductExist(id)) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("product not found");
        }
        if(quantity < 0) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("quantity less than 0");
        }
        String sql = "update products set stock_quantity = ? where id = ?";
        int rowAffected =  jdbcTemplate.update(sql, quantity, id);
        return rowAffected>0 ? ResponseEntity.ok( "the new quantity: " + quantity):ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

    }

    public ResponseEntity<String> deleteProduct(long id) {
        String sql = "delete from products where id = ?";
        int rowAffected = jdbcTemplate.update(sql, id);
        return rowAffected>0? ResponseEntity.status(HttpStatus.GONE).body("product deleted"):ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("something went wrong");
    }

    private boolean isProductExist(long id) {
         String sql = "select * from products where id = ?";
        return jdbcTemplate.query(sql, productRowMapper, id).stream().findFirst().orElse(null) != null;
    }
}
