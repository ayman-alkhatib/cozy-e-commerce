import { Link, Outlet } from "react-router";
import { routes } from "../logic/Router";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <>
      <div className={styles.navbar}>
        <span className={styles.logo}>Cozy®</span>
        <ul className={styles.navbarList}>
          <li className={styles.active}>
            <Link to={routes.ProductListPage}>Products</Link>
          </li>
          <li>
            <Link to={routes.CartPage}>Cart</Link>
          </li>
          <li>
            <Link to={routes.AdminPage}>Admin</Link>
          </li>
        </ul>

        <div className={styles.login}>
          <Link to={routes.LoginPage}>Login</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
