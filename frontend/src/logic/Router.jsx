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
import { CartProvider } from "./CartContext";

const fakeData = {
  id: 99,
  name: "Ergonomic Office Chair",
  description:
    "A premium ergonomic office chair designed for long hours of work. Features include adjustable armrests, lumbar support, a breathable mesh back, and a 360-degree swivel base for maximum comfort.",
  category: "furniture",
  thumbnail: "image.png",
  price: 129.99,
  quantity: 10,
  images: [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
  ],
};

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
      <Route path="/products" element={<ProductListPage />} />
      <Route
        path="/product/:id"
        element={<ProductDetailsPage product={fakeData} />}
      />
      ,
      <Route path="/cart" element={<CartPage />}>
        <Route path="items" element={<CartItemsList product={fakeData} />} />
        <Route path="address" element={<Address />} />
        <Route path="payment" element={<Payment />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Route>
  )
);
