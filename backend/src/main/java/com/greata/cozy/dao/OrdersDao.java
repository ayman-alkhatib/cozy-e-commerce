package com.greata.cozy.dao;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

import com.greata.cozy.exceptions.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.greata.cozy.entities.Orders;

@Repository
public class OrdersDao {
    private final JdbcTemplate jdbcTemplate;

    public OrdersDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Orders> orderRowMapper = (rs, rowNum) -> new Orders(
            rs.getLong("id"),
            rs.getLong("user_id"),
            rs.getString("address"),
            rs.getString("status")
    );

    public ResponseEntity<List<Orders>> getallOrders() {
        String sql = "select * from orders";
        List<Orders> orders = jdbcTemplate.query(sql, orderRowMapper);
        return ResponseEntity.ok(orders);
    }

    public List<Orders> getAllOrdersByUserId(long userId) {
        String sql = "select * from orders where user_id = ? and status != 'PENDING'";
        return jdbcTemplate.query(sql, orderRowMapper, userId);
    }

    public Orders createOrder(Orders orders) {
        String sql = "INSERT INTO orders (user_id, address) VALUES (?,?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        int rowAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, orders.getUserId());
            ps.setString(2, orders.getAddress());
            return ps;
        }, keyHolder);
        if (rowAffected > 0 && keyHolder.getKey() != null) {
            orders.setId(keyHolder.getKey().longValue());
            return orders;
        } else {
            throw new RuntimeException("Failed to insert order, no ID obtained.");
        }
    }

  public Orders getOrderById(long id) {
      String sql = "select * from orders where id = ?";
      try {
          return jdbcTemplate.queryForObject(sql, orderRowMapper, id);
      } catch (org.springframework.dao.EmptyResultDataAccessException e) {
          throw new ResourceNotFoundException("Order not found");
      }
  }

public ResponseEntity<Orders> updateOrder(Orders order) {
    String sql = "UPDATE orders SET user_id = ?, address = ?, status = ? WHERE id = ?";
    jdbcTemplate.update(sql, order.getUserId(), order.getAddress(), order.getStatus(), order.getId());
    return ResponseEntity.ok(order);
}


}
