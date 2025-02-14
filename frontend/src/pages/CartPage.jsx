import Orders from "../components/cartPageComponents/Orders";
import styles from "./CartPage.module.css";
import { Outlet } from "react-router";
function CartPage() {
  return (
    <div className="container">
      <div className={styles.cartPage}>
        <Outlet />
        <Orders />
      </div>
    </div>
  );
}

export default CartPage;
