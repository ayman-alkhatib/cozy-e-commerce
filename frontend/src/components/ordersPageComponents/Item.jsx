import styles from "./Item.module.css";
function Item({ item }) {
  return (
    <div className={styles.item}>
      <p>- {item.name}</p>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>SubTotal: {item.price * item.quantity}</p>
    </div>
  );
}

export default Item;
