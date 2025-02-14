import fetchAllOrderByEmail from "../api/fetchAllOrdersByEmail";
import OrdersList from "../components/ordersPageComponents/OrdersList";
import SearchBar from "../components/SearchBar";
import styles from "./OrdersPage.module.css";
import { useState } from "react";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  async function handleSearch(search) {
    const orderData = await fetchAllOrderByEmail(search);
    setOrders(orderData);
  }

  return (
    <div className="container">
      <div className={styles.ordersPage}>
        <SearchBar handleSearch={handleSearch} />
        <OrdersList orders={orders} />
      </div>
    </div>
  );
}

export default OrdersPage;
