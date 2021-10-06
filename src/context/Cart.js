/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export default function Cart({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...exist, qty: exist.qty + 1, frete: exist.frete + 10 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: +1, frete: +10 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...exist, qty: exist.qty - 1, frete: exist.frete - 10 }
            : x
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        products,
        setProducts,
        onAdd,
        onRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  const { cartItems, setCartItems, products, setProducts, onAdd, onRemove } =
    context;
  return { cartItems, setCartItems, products, setProducts, onAdd, onRemove };
}
