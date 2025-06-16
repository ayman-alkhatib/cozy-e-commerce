import { useSearchParams } from "react-router";
import fetchAllOrders from "../api/fetchAllOrders";
import OrdersList from "../components/ordersPageComponents/OrdersList";
import SearchBar from "../components/SearchBar";
import styles from "./OrdersPage.module.css";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import orderService from "../services/orderService";
import { useCart } from "../logic/CartContext";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [searchParams] = useSearchParams();
  const [orderStatus, setOrderStatus] = useState("no-session");
  const [showModal, setShowModal] = useState(false);
  const { confirmPayment } = orderService();
  const { updateCart } = useCart();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      setOrderStatus("no-session");
      return;
    }
    confirmPayment(sessionId)
      .then((data) => {
        if (data.status === "PAID") {
          setOrderStatus("PAID");
          setShowModal(true);
          // remove the session_id from the URL
          searchParams.delete("session_id");
          // update the cart in the CartContext
          updateCart([]);
        }
      })
      .catch(() => {
        setOrderStatus("failed");
        setShowModal(true);
      });
  }, [searchParams]);

  // Fetch all orders when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      const orderData = await fetchAllOrders();
      setOrders(orderData);
    };
    fetchOrders();
  }, []);

  async function handleSearch(searchTerm) {
    if (!searchTerm) {
      const orderData = await fetchAllOrders();

      setOrders(orderData);
      return;
    }
    const filteredOrders = orders.filter((order) =>
      order.id.includes(searchTerm)
    );
    setOrders(filteredOrders);
  }

  return (
    <div className="container">
      <div className={styles.ordersPage}>
        <SearchBar handleSearch={handleSearch} />
        <OrdersList orders={orders} />
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          {orderStatus === "PAID" && (
            <div>
              <p>🎉 Payment successful!</p>
              <p>📦 Your order is on the way...</p>
            </div>
          )}
          {orderStatus === "failed" && (
            <div>
              <p>❌ Payment failed or canceled.</p>
              <p>💳 Please try again</p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default OrdersPage;
