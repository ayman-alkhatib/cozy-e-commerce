import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const lSCart = localStorage.getItem("cart");
    if (lSCart) {
      setCart(JSON.parse(lSCart));
    }
  }, []);

  function updateCart(updatedCart) {
    if (updatedCart) {
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  function addToCart(product, quantity = 1) {
    updateCart([...cart, { product, quantity }]);
  }

  function removeFromCart(id) {
    console.log(id);
    console.log(
      "from remove functio ",
      cart.filter((el) => el.product.id !== id)
    );
    updateCart(cart.filter((el) => el.product.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ cart, updateCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
