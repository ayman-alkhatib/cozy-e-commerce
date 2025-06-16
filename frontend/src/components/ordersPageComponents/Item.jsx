import styles from "./Item.module.css";

function Item({ item }) {
  return (
    <div className={styles.item}>
      <span className={styles.itemName}>{item.name}</span>
      <span className={styles.itemQty}>x{item.quantity}</span>
      <span className={styles.itemPrice}>{item.price.toFixed(2)} €</span>
      <span className={styles.itemSubTotal}>Subtotal: {item.subTotal.toFixed(2)} €</span>
    </div>
  );
}

export default Item;
