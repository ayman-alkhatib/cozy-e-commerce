import { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router";
import { useCart } from "../logic/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const [inCart, setInCart] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const { addToCart, removeFromCart } = useCart();

  useEffect(() => {
    if (product.quantity <= 0) {
      setOutOfStock(true);
    }
  }, [product]);

  function handleClick() {
    console.log(product.id);
    navigate(`/product/${product.id}`);
  }

  function handleAddToCart() {
    addToCart(product);
    setInCart(true);
  }
  function handleRemoveFromCart() {
    removeFromCart(product);
    setInCart(false);
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage} onClick={handleClick}>
        <img src={product.thumbnail} alt="product" />
      </div>
      <div className={styles.productInfo} onClick={handleClick}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
      <div className={styles.cart}>
        {!inCart && !outOfStock && (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
        {inCart && !outOfStock && (
          <button
            onClick={handleRemoveFromCart}
            style={{ backgroundColor: "transparent", color: "red" }}
          >
            remove from cart
          </button>
        )}

        {outOfStock && <p style={{ color: "red" }}>out of stock </p>}
      </div>
    </div>
  );
}

export default ProductCard;
