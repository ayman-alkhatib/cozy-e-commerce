package com.greata.orderly.dao;

import com.greata.orderly.entities.Orders;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import java.util.Optional;

@Repository
public class OrdersDao {
    private final JdbcTemplate jdbcTemplate;

    public OrdersDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Orders> orderRowMapper = (rs, rowNum) -> new Orders(
            rs.getLong("id"),
            rs.getString("email")
    );

    public ResponseEntity<List<Orders>> getallOrders() {
        String sql = "select * from orders";
        List<Orders> orders = jdbcTemplate.query(sql,orderRowMapper);
        return ResponseEntity.ok(orders);
    }

    public ResponseEntity<Orders> getOrderById(long id) {
        String sql = "select * from orders where id = ?";
        Orders orders = jdbcTemplate.queryForObject(sql,orderRowMapper,id);
        return ResponseEntity.ok(orders);
    }

    public Orders getOrderByEmail(String email) {
        String sql = "select * from orders where email = ?";
        return jdbcTemplate.query(sql, orderRowMapper, email).stream().findFirst().orElseThrow(() -> new RuntimeException("No orders found"));
    }

    public Orders createOrder(Orders orders) {
        String sql = "INSERT INTO orders (email) VALUES (?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

       int rowAffected= jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, orders.getEmail());
            return ps;
        }, keyHolder);
        if(rowAffected>0 && keyHolder.getKey() != null) {
           orders.setId(keyHolder.getKey().longValue());
           return orders;
        }else{
           throw new RuntimeException("Failed to insert order, no ID obtained.");
        }
    }

    public ResponseEntity<Orders> updateOrder(Orders order) {
        String sql = "update orders set email = ? where id = ?";
        jdbcTemplate.update(sql,order.getEmail(),order.getId());
        return ResponseEntity.ok(order);
    }
    public ResponseEntity<Orders> deleteOrder(long id) {
        String sql = "delete from orders where id = ?";
        jdbcTemplate.update(sql,id);
        return ResponseEntity.ok(null);
    }


}
