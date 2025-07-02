import { RouterProvider } from "react-router";
import { CartProvider } from "./logic/CartContext";
import { useEffect, useState } from "react";
import { createAppRouter } from "./logic/Router";
import useAuth from "./hooks/useAuth";

function App() {
  const { isAuthenticated } = useAuth();
  const [router, setRouter] = useState(createAppRouter(isAuthenticated));

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
