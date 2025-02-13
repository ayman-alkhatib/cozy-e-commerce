import { useCart } from "../../logic/CartContext";
import CartItem from "./CartItem";
import styles from "./CartItemsList.module.css";

function CartItemsList() {
  const { cart, updateCart } = useCart();

  function handleRemoveFromCart(id) {
    const updatedCart = cart.filter((el) => el.product.id !== id);
    updateCart(updatedCart);
  }

  function handleRemoveAll() {
    updateCart([]);
  }
  return (
    <section className={styles.items}>
      <h2>
        <strong>Cart</strong> {cart.length} Items
      </h2>
      {cart.length > 0 && (
        <button onClick={handleRemoveAll} className={styles.removeAllBtn}>
          remove all
        </button>
      )}
      {cart.map((cartItem) => (
        <CartItem
          key={cartItem.product.id}
          item={cartItem.product}
          quantity={cartItem.quantity}
          onRemove={handleRemoveFromCart}
        />
      ))}
      {!cart.length && <p>Your cart is empty.</p>}
    </section>
  );
}

export default CartItemsList;
