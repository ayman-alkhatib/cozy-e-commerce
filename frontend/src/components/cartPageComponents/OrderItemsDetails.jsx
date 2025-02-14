import OrderItem from "./OrderItem";
import styles from "./OrderItemsDetails.module.css";

function OrderItemsDetails({ cartItem }) {
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

export default OrderItemsDetails;
