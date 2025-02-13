import { useState } from "react";
import styles from "./ProductDetailsPage.module.css";
import { useCart } from "../logic/CartContext";
import { useLoaderData, useNavigation } from "react-router";
import Loading from "../components/Loading";
function ProductDetailsPage() {
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, removeFromCart } = useCart();
  const product = useLoaderData();
  const navigation = useNavigation();
  function handleAddToCart() {
    addToCart(product, quantity);
    setInCart(true);
  }
  function handleRemoveFromCart() {
    removeFromCart(product.id);
    setInCart(false);
  }

  function handleIncrement() {
    setQuantity((s) => s + 1);
  }
  function handleDecrement() {
    setQuantity((s) => s - 1);
  }

  if (navigation.state === "loading") return <Loading />;

  return (
    <div className="container">
      <div className={styles.productDetailsPage}>
        <section className={styles.productInfos}>
          <div className={styles.path}>
            <span>Home</span> / <span>{product.name}</span> /
          </div>
          <h1>{product.name}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <ul className={styles.colors}>
            <li>
              <span
                className="red"
                style={{ backgroundColor: "#C1BDB3" }}
              ></span>
            </li>
            <li>
              <span
                className="blue"
                style={{ backgroundColor: "#58737D" }}
              ></span>
            </li>
            <li>
              <span
                className="green"
                style={{ backgroundColor: "#545454" }}
              ></span>
            </li>
            <li>
              <span
                className="yellow"
                style={{ backgroundColor: "#CBA5A5" }}
              ></span>
            </li>
          </ul>
          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>

            {!inCart ? (
              <button className={styles.addToCart} onClick={handleAddToCart}>
                Add to Cart
              </button>
            ) : (
              <button
                onClick={handleRemoveFromCart}
                className={styles.removeBtn}
              >
                remove from cart
              </button>
            )}
          </div>
        </section>
        <section className={styles.productImages}>
          <div className={styles.mainImage}>
            <img src={product.thumbnail} alt={product.name} />
          </div>
          <div className={styles.moreImages}>
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={product.name} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
