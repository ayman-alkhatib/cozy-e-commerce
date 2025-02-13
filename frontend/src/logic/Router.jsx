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
import CartItemsList from "../components/cartComponents/CartItemsList";
import Address from "../components/cartComponents/Address";
import Payment from "../components/cartComponents/Payment";
import fetchProducts from "../api/fetchProducts";
import fetchProductById from "../api/fetchProductById";

export const routes = {
  ProductListPage: "/products",
  ProductDetailsPage: "/product",
  CartPage: "/cart/items",
  LoginPage: "/login",
  AdminPage: "/admin",
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
      ,
      <Route path="/cart" element={<CartPage />}>
        <Route path="items" element={<CartItemsList />} />
        <Route path="address" element={<Address />} />
        <Route path="payment" element={<Payment />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Route>
  )
);
