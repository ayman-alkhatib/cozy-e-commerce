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

export const routes = {
  ProductListPage: "/products",
  ProductDetailsPage: "/product",
  CartPage: "/cart",
  AdminPage: "/admin",
};

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />,
      <Route path="/cart" element={<CartPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Route>
  )
);
