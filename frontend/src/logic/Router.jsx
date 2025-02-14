import React from "react";
import ProductListPage from "../pages/ProductListPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import AdminPage from "../pages/AdminPage";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import NavBar from "../components/NavBar";
import LoginPage from "../pages/LoginPage";
import CartItemsList from "../components/cartPageComponents/CartItemsList";
import Address from "../components/cartPageComponents/Address";
import Payment from "../components/cartPageComponents/Payment";
import fetchProducts from "../api/fetchProducts";
import fetchProductById from "../api/fetchProductById";
import OrdersPage from "../pages/OrdersPage";

export const routes = {
  ProductListPage: "/products",
  ProductDetailsPage: "/product",
  CartPage: "/cart/items",
  LoginPage: "/login",
  AdminPage: "/admin",
  orders: "/orders",
};

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route
        path="/products"
        element={<ProductListPage />}
        loader={fetchProducts}
      />
      <Route
        path="/product/:id"
        element={<ProductDetailsPage />}
        loader={({ params }) => fetchProductById(params.id)}
      />
      <Route path="cart" element={<CartPage />}>
        <Route path="items" element={<CartItemsList />} />
        <Route path="address" element={<Address />} />
        <Route path="payment" element={<Payment />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Route>
  )
);
