import { useSearchParams } from "react-router";
import fetchAllOrders from "../api/fetchAllOrders";
import OrdersList from "../components/ordersPageComponents/OrdersList";
import FilterField from "../components/ordersPageComponents/FilterField";
import styles from "./OrdersPage.module.css";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import orderService from "../services/orderService";
import { useCart } from "../logic/CartContext";
import SearchBar from "../components/SearchBar";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState("no-session");
  const [showModal, setShowModal] = useState(false);
  const [filterFields, setFilterFields] = useState([]);
  const [searchParams] = useSearchParams();
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
          updateCart([]);
        }
      })
      .catch(() => {
        setOrderStatus("failed");
        setShowModal(true);
      })
      .finally(() => {
        // Reset the session_id in the URL after processing
        const url = new URL(window.location);
        url.searchParams.delete("session_id");
        window.history.replaceState({}, "", url);
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
    const ordersData = await fetchAllOrders();
    if (!searchTerm) {
      setOrders(ordersData);
      return;
    }
    const filteredOrders = ordersData.filter((order) => {
      return order.orderId == searchTerm;
    });
    setOrders(filteredOrders);
  }

  async function filterOrders(newStatusFilter) {
    const orderData = await fetchAllOrders();
    let filteredOrders = orderData;

    if (newStatusFilter && newStatusFilter.length > 0) {
      filteredOrders = filteredOrders.filter((order) =>
        newStatusFilter.includes(order.status)
      );
    }
    setOrders(filteredOrders);
  }

  function handleFilterChange(statusArr) {
    setFilterFields(statusArr);
    filterOrders(statusArr);
  }

  return (
    <div className="container">
      <div className={styles.ordersPage}>
        <SearchBar handleSearch={handleSearch} />
        <FilterField
          value={filterFields}
          onChange={handleFilterChange}
          options={[
            { value: "PAID", label: "Paid" },
            { value: "DELIVERED", label: "Delivered" },
            { value: "CANCELLED", label: "Cancelled" },
          ]}
        />
        {orders.length === 0 ? (
          <div className={styles.noOrders}>No orders found.</div>
        ) : (
          <OrdersList orders={orders} />
        )}
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
