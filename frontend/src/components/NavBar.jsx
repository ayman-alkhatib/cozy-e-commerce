import { Link, Outlet, useNavigate, useLocation } from "react-router";
import { routes } from "../logic/Router";
import styles from "./NavBar.module.css";
import useAuth from "../hooks/useAuth";
function NavBar() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate(routes.LoginPage);
  };
 
  return (
    <>
      <div className={styles.navbar}>
        <span className={styles.logo}>Cozy®</span>
        {isAuthenticated && (
          <>
            <ul className={styles.navbarList}>
              <li className={location.pathname === routes.ProductListPage ? styles.active : ''}>
                <Link to={routes.ProductListPage}>Products</Link>
              </li>
              <li className={location.pathname === routes.CartPage ? styles.active : ''}>
                <Link to={routes.CartPage}>Cart</Link>
              </li>
              <li className={location.pathname === routes.orders ? styles.active : ''}>
                <Link to={routes.orders}>My Orders</Link>
              </li>
            </ul>
            <button className={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
