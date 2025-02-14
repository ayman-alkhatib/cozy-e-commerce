import fetchAllOrderByEmail from "../api/fetchAllOrdersByEmail";
import styles from "./OrdersPage.module.css";
import { useEffect, useState } from "react";

function OrdersPage() {
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);

  async function handleSearch() {
    const orderData = await fetchAllOrderByEmail(search);
    console.log(orderData);
    setOrders(orderData);
  }

  return (
    <div className="container">
      <div className={styles.ordersPage}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="searchBtn" onClick={handleSearch}>
            search
          </button>
        </div>
        <OrderList orders={orders} />
      </div>
    </div>
  );
}

export default OrdersPage;

function OrderList({ orders }) {
  return (
    <div className={styles.orderList}>
      {orders.map((order, index) => (
        <Order key={index} order={order} />
      ))}
    </div>
  );
}

function Order({ order }) {
  return (
    <div className={styles.order}>
      <p>OrderID: {order.id}</p>
      <p>Email: {order.email}</p>
      <p>Address: {order.address}</p>
      <div className={styles.items}>
        {order.items.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
      </div>

      <p>Total: {order.total}</p>
    </div>
  );
}

function OrderItem({ item }) {
  return (
    <div className={styles.item}>
      <p>- {item.name}</p>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>SubTotal: {item.price * item.quantity}</p>
    </div>
  );
}

const fakeOrderData = {
  id: 2,
  email: "email@example.com",
  address: "address@example.com",
  total: 100,
  items: [
    {
      productId: "1",
      name: "Product 1",
      quantity: 1,
      price: 5,
    },
    {
      productId: "2",
      name: "Product 2",
      quantity: 2,
      price: 5,
    },
  ],
};
const fakeOrderData1 = {
  id: 3,
  email: "new@example.com",
  address: "new@example.com",
  total: 100,
  items: [
    {
      productId: "1",
      name: "Product 1",
      quantity: 1,
      price: 5,
    },
    {
      productId: "2",
      name: "Product 2",
      quantity: 2,
      price: 5,
    },
  ],
};
const fakeOrders = [fakeOrderData, fakeOrderData1];
