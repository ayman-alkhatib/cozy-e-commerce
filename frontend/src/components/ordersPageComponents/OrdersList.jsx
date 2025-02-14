import Order from "./Order";
import styles from "./OrdersList.module.css";

function OrdersList({ orders }) {
  return (
    <div className={styles.orderList}>
      {orders.map((order, index) => (
        <Order key={index} order={order} />
      ))}
    </div>
  );
}

export default OrdersList;
