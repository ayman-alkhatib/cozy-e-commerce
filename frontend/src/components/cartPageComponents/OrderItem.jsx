import styles from "./OrderItem.module.css";
function OrderItem({ title, value }) {
  return (
    <div className={styles.orderItem}>
      <span>{title + ":"} </span>
      <span>{value}</span>
    </div>
  );
}

export default OrderItem;
