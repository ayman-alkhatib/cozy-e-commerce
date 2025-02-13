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
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  function addToCart(product, quantity = 1) {
    const lsCart = localStorage.getItem("cart");
    if (lsCart) {
      const cart = JSON.parse(lsCart);
      updateCart([...cart, { product: product, quantity: quantity }]);
    } else {
      updateCart([{ product: product, quantity: quantity }]);
    }
  }

  function removeFromCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart"));
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
