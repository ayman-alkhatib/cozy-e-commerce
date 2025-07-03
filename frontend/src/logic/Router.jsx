import ProductListPage from "../pages/ProductListPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router";
import NavBar from "../components/NavBar";
import LoginPage from "../pages/LoginPage";
import CartItemsList from "../components/cartPageComponents/CartItemsList";
import Address from "../components/cartPageComponents/Address";
import fetchProducts from "../api/fetchProducts";
import fetchProductById from "../api/fetchProductById";
import OrdersPage from "../pages/OrdersPage";
import RegisterPage from "../pages/RegisterPage";

export const routes = {
  ProductListPage: "/products",
  ProductDetailsPage: "/product",
  CartPage: "/cart/items",
  LoginPage: "/login",
  RegisterPage: "/register",
  AdminPage: "/admin",
  orders: "/orders",
};

export function createAppRouter(isAuthenticated) {
  return createBrowserRouter(
    createRoutesFromElements(isAuthenticated ? privateRoutes : publicRoutes)
  );
}

const publicRoutes = (
  <Route path="/" element={<NavBar />}>
    <Route index element={<Navigate to="/login" />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="*" element={<Navigate to={"/login"} />} />
  </Route>
);

const privateRoutes = (
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
    <Route path="/cart" element={<CartPage />}>
      <Route path="items" element={<CartItemsList />} />
      <Route path="address" element={<Address />} />
    </Route>
    <Route path="/login" element={<Navigate to={"/products"} />} />
    <Route path="/register" element={<Navigate to={"/products"} />} />
    <Route path="/orders/:session_id?" element={<OrdersPage />} />
  </Route>
);
