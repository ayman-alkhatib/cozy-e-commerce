import { RouterProvider } from "react-router";
import { CartProvider } from "./logic/CartContext";
import { useEffect, useState } from "react";
import { createAppRouter } from "./logic/Router";
import useAuth from "./hooks/useAuth";
import { AuthProvider } from "./logic/authContext";

function App() {
  const { isAuthenticated } = useAuth();
  const [router, setRouter] = useState(createAppRouter(false));

  useEffect(() => {
    const router = createAppRouter(isAuthenticated);
    setRouter(router);
  }, [isAuthenticated]);

  return (
    <div className="App">
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
    </div>
  );
}

export default App;
