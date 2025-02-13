import { useCart } from "../logic/CartContext";
import styles from "./CartPage.module.css";
import { Outlet, useLocation, useNavigate } from "react-router";
function CartPage() {
  const { cart } = useCart();
  console.log(`from component: `, cart);

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

// const fakeData = {
//   id: 99,
//   name: "Ergonomic Office Chair",
//   description:
//     "A premium ergonomic office chair designed for long hours of work. Features include adjustable armrests, lumbar support, a breathable mesh back, and a 360-degree swivel base for maximum comfort.",
//   category: "furniture",
//   thumbnail: "image.png",
//   price: 129.99,
//   quantity: 50,
//   images: [
//     "/image1.png",
//     "/image2.png",
//     "/image3.png",
//     "/image4.png",
//     "/image5.png",
//   ],
// };

// const cartItem = {
//   product: {
//     id: 100,
//     name: "Gaming Chair",
//     description: "High-back gaming chair with headrest and reclining function.",
//     category: "furniture",
//     thumbnail:
//       "https://i.pinimg.com/736x/39/b9/10/39b910f81acad40d1f9e59d7c0d4d2ad.jpg",
//     price: 199.99,
//     quantity: 0,
//   },
//   quantity: 2,
// };
