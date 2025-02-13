import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router";

function ProductCard({ product }) {
  // usenavigate hook
  const navigate = useNavigate();
  function handleClick() {
    console.log(product.id);
    navigate(`/product/${product.id}`);
  }
  return (
    <div className={styles.productCard} onClick={handleClick}>
      <div className={styles.productImage}>
        <img src={product.thumbnail} alt="product" />
      </div>
      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
      <div className={styles.cart}>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
