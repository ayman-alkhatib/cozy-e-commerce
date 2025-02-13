import styles from "./CartPage.module.css";
import CartItem from "../components/cartComponents/CartItem";
function CartPage() {
  return (
    <div className="container">
      <div className={styles.cartPage}>
        <section className={styles.items}>
          <h2>
            <strong>Cart</strong> 2 Items
          </h2>
          <CartItem item={fakeData} />
          <CartItem item={fakeData} />
          <CartItem item={fakeData} />
        </section>
        <section className={styles.order}>
          <h2>Order Summary</h2>
          <div className={styles.orderItem}>
            <span>Subtotal</span>
            <span>$129.99</span>
          </div>
          <div className={styles.orderItem}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={styles.total}>
            <div className={styles.orderItem}>
              <span>Total</span>
              <span>$129.99</span>
            </div>
            <div className={styles.orderItem}>
              <span>Estimated Tax</span>
              <span>$0.00</span>
            </div>
            <div className={styles.orderItem}>
              <span>Estimated Delivery by</span>
              <span>Wed. 10th March</span>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </section>
      </div>
    </div>
  );
}

export default CartPage;

const fakeData = {
  id: 99,
  name: "Ergonomic Office Chair",
  description:
    "A premium ergonomic office chair designed for long hours of work. Features include adjustable armrests, lumbar support, a breathable mesh back, and a 360-degree swivel base for maximum comfort.",
  category: "furniture",
  thumbnail: "image.png",
  price: 129.99,
  quantity: 50,
  images: [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
  ],
};
