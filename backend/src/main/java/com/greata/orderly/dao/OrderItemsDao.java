package com.greata.orderly.dao;
import com.greata.orderly.entities.OrderItems;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class OrderItemsDao {
    private final JdbcTemplate jdbcTemplate;

    public OrderItemsDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<OrderItems> ordersItemRowMapper =(rs, _)->new OrderItems(
            rs.getLong("id"),
            rs.getLong("order_id"),
            rs.getLong("product_id"),
            rs.getInt("quantity"),
            rs.getDouble("price")
    );

    public ResponseEntity<List<OrderItems>> getAllOrderItems() {
        String sql = "select * from order_items order by id desc";
        return ResponseEntity.ok(jdbcTemplate.query(sql, ordersItemRowMapper));
    }

    public List<OrderItems> getOrderItemsByOrderId(long orderId) {
        String sql = "select * from order_items where order_id = ?";
        return jdbcTemplate.query(sql, ordersItemRowMapper, orderId);
    }

    public ResponseEntity<String> createOrderItem(OrderItems orderItems) {
        String sql = "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)";
        int rowAffected = jdbcTemplate.update(sql, orderItems.getOrderId(), orderItems.getProductId(), orderItems.getQuantity(), orderItems.getPrice());

        return rowAffected>0?ResponseEntity.ok("Order item added"):ResponseEntity.internalServerError().body("Order item did not have been added");
    }
}
