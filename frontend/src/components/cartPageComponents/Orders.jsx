import { useLocation, useNavigate } from "react-router";
import OrderItem from "./OrderItem";
import OrderItemsDetails from "./OrderItemsDetails";
import styles from "./Orders.module.css";
import { useCart } from "../../logic/CartContext";
import orderService from "../../services/orderService";
function Orders() {
  const { cart } = useCart();

  const navigate = useNavigate();
  const path = useLocation().pathname;

  async function handleCheckout() {

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
     await orderService().orderPost(orderObj)
  }

  async function handleConfirm() {
    navigate("/cart/address");
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
      <button onClick={()=>{
        if (path === "/cart/address") {
          handleCheckout();
        } else {
          handleConfirm();
        }
      }}>checkout</button>
    </section>
  );
}

export default Orders;
