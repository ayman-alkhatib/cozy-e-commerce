import styles from "./ProductCard.module.css";
function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src="/image1.png" alt="product" />
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
