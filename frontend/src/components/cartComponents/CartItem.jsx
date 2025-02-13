import styles from "./CartItem.module.css";
export default function CartItem({ item }) {
  return (
    <div className={styles.cartItem}>
      <img src="/image.png" alt={item.name} />
      <div className={styles.itemInfo}>
        <h4>{item.name}</h4>
        <p>color: red green </p>
        <p>Qty: 1</p>
        <div className={styles.itemActions}>
          <div className={styles.quantity}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button>Remove</button>
        </div>
      </div>
      <p className={styles.price}>${item.price}</p>
    </div>
  );
}
