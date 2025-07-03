import Item from "./Item";
import styles from "./Order.module.css";


function Order({ order }) {

  return (
    <div className={styles.order}>
      <div className={styles.header}>
        <span className={styles.orderId}>Order #{order.orderId}</span>
        <span className={order.status === "PAID" ? styles.statusPaid : order.status === "DELIVERED" ? styles.statusDelivered : styles.statusCancelled}>
          {order.status === "PAID" ? "On the way!" :
          order.status === "DELIVERED" ? "Delivered" : "Cancelled"}
        </span>
      </div>
      <p className={styles.address}><strong>Address:</strong> {order.address}</p>
      <div className={styles.items}>
        {order.items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.total}>
        <strong>Total:</strong> {order.total.toFixed(2)} €
      </div>
    </div>
  );
}

export default Order;
