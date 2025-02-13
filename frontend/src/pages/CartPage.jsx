import orderPost from "../api/orderPost";
import { useCart } from "../logic/CartContext";
import styles from "./CartPage.module.css";
import { Outlet, useLocation, useNavigate } from "react-router";
function CartPage() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const path = useLocation().pathname;
  function handleCheckout() {
    if (path === "/cart/address") {
      navigate("/cart/payment");
    }
    if (path === "/cart/items") {
      navigate("/cart/address");
    }
    if (path === "/cart/payment") {
      const address = JSON.parse(localStorage.getItem("selectedAddress"));

      const orderObj = {
        email: address.email,
        items: cart.map((cartItem) => {
          return {
            productId: cartItem.product.id,
            quantity: cartItem.quantity,
          };
        }),
      };
      orderPost(orderObj);
      alert("Order placed successfully!");
      navigate("/products");
    }
  }
  return (
    <div className="container">
      <div className={styles.cartPage}>
        <Outlet />
        <section className={styles.order}>
          <h2>Order Summary</h2>
          {cart.map((cartItem) => (
            <OrderItemDetails key={cartItem.product.id} cartItem={cartItem} />
          ))}
          <div className={styles.total}>
            <OrderItem
              title={"Total"}
              value={cart
                .reduce((prev, curr) => {
                  return prev + curr.product.price * curr.quantity;
                }, 0)
                .toFixed(2)}
            />
            <OrderItem title={"Estimated Tax"} value={"$0.00"} />
            <OrderItem
              title={"Estimated Delivery by"}
              value={"Wed. 10th March"}
            />
          </div>
          <button onClick={handleCheckout}>checkout</button>
        </section>
      </div>
    </div>
  );
}

export default CartPage;

function OrderItemDetails({ cartItem }) {
  return (
    <div className={styles.orderItemDetails}>
      <OrderItem title="Name" value={cartItem.product.name} />
      <OrderItem title="Price" value={`$${cartItem.product.price}`} />
      <OrderItem title="Quantity" value={cartItem.quantity} />
      <OrderItem
        title="SubTotal"
        value={`$${cartItem.product.price * cartItem.quantity}`}
      />
    </div>
  );
}

function OrderItem({ title, value }) {
  return (
    <div className={styles.orderItem}>
      <span>{title + ":"} </span>
      <span>{value}</span>
    </div>
  );
}
