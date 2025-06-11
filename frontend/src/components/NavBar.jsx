import { Link, Outlet, useNavigate } from "react-router";
import { routes } from "../logic/Router";
import styles from "./NavBar.module.css";
import useAuth from "../hooks/useAuth";
function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate(routes.LoginPage);
  };
  if(!isAuthenticated) {
    return (<>
       <div className={styles.navbar}>
        <span className={styles.logo}>Cozy®</span>
      </div>
    <Outlet/>
     </>
  ); // Don't render NavBar if not authenticated
  }
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
            <Link to={routes.orders}>My Orders</Link>
          </li>
        </ul>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
