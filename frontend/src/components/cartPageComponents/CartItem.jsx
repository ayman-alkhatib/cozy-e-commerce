import { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { useCart } from "../../logic/CartContext";
export default function CartItem({ item, quantity, onRemove }) {
  const [qty, setQty] = useState(quantity);
  const { updateCart } = useCart();

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const updatedCart = JSON.parse(cart).map((cartItem) =>
        cartItem.product.id === item.id
          ? { ...cartItem, quantity: qty }
          : cartItem
      );
      updateCart(updatedCart);
    }
  }, [qty]);

  function handleIncrement() {
    if (qty >= item.quantity) return;
    setQty((prevState) => prevState + 1);
  }

  function handleDecrement() {
    if (qty === 1) return;
    setQty((prevState) => prevState - 1);
  }
  return (
    <div className={styles.cartItem}>
      <img loading="lazy" src={item.thumbnail} alt={item.name} />
      <div className={styles.itemInfo}>
        <h4>{item.name}</h4>
        <p>color: red green </p>
        <p>stock: {item.quantity}</p>
        <div className={styles.itemActions}>
          <div className={styles.quantity}>
            <button onClick={handleDecrement}>-</button>
            <span>{qty}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button
            onClick={() => {
              onRemove(item.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <p className={styles.price}>${item.price}</p>
    </div>
  );
}
