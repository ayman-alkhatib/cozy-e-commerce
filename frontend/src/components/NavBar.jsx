import { Link, Outlet } from "react-router";
import { routes } from "../logic/Router";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to={routes.ProductListPage}>Products</Link>
        </li>
        <li>
          <Link to={routes.CartPage}>Cart</Link>
        </li>
        <li>
          <Link to={routes.AdminPage}>Admin</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default NavBar;
