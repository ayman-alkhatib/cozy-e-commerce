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
    // return if the product is in the cart
    for (let cartItem of cart) {
      if (cartItem.product.id === product.id) {
        if (cartItem.quantity !== quantity) {
          updateCart(
            cart.map((item) =>
              item.product.id === product.id ? { product, quantity } : item
            )
          );
        }
        return;
      }
    }

    updateCart([...cart, { product, quantity }]);
  }

  function removeFromCart(id) {
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
