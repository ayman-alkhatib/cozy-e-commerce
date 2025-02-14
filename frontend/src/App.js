import { RouterProvider } from "react-router";
import { router } from "./logic/Router";
import { CartProvider } from "./logic/CartContext";

function App() {
    return (
        <div className="App">
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </div>
    );
}

export default App;
