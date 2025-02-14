import { useLocation, useNavigate } from "react-router";
import OrderItem from "./OrderItem";
import OrderItemsDetails from "./OrderItemsDetails";
import styles from "./Orders.module.css";
import { useCart } from "../../logic/CartContext";
import orderPost from "../../api/orderPost";
function Orders() {
  const { cart, updateCart } = useCart();

  const navigate = useNavigate();
  const path = useLocation().pathname;

  async function handleCheckout() {
    if (path === "/cart/address") navigate("/cart/payment");

    if (path === "/cart/items") navigate("/cart/address");

    if (path === "/cart/payment") {
      const address = JSON.parse(localStorage.getItem("selectedAddress"));

      const orderObj = {
        email: address.email,
        address: address.addressInput,
        items: cart.map((cartItem) => {
          return {
            productId: cartItem.product.id,
            quantity: cartItem.quantity,
          };
        }),
      };
      const res = await orderPost(orderObj);
      if (res.ok) {
        updateCart([]);
        alert("Order placed successfully!");
        navigate("/products");
      } else {
        alert("something went wrong");
      }
    }
  }

  return (
    <section className={styles.order}>
      <h2>Order Summary</h2>
      {cart.map((cartItem) => (
        <OrderItemsDetails key={cartItem.product.id} cartItem={cartItem} />
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
        <OrderItem title={"Estimated Delivery by"} value={"Wed. 10th March"} />
      </div>
      <button onClick={handleCheckout}>checkout</button>
    </section>
  );
}

export default Orders;
