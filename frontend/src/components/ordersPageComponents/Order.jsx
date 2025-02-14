import Item from "./Item";
import styles from "./Order.module.css";
function Order({ order }) {
  return (
    <div className={styles.order}>
      <p>OrderID: {order.orderId}</p>
      <p>Email: {order.email}</p>
      <p>Address: {order.address}</p>
      <div className={styles.items}>
        {order.items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>

      <p>Total: {order.total}</p>
    </div>
  );
}

export default Order;
