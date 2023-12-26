// import { useContext } from "react";

// const ShoppingCartContext = createContext({})

// export function useShoppingCart(){
//     return useContext(ShoppingCartContext)
// }

// export function ShoppingCartProvider({children}){

//     return (
//     <ShoppingCartContext.Provider value={{}}>
//         {children}
//     </ShoppingCartContext.Provider> 
//     )
// }

import React, { createContext, useContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const increaseQuantity = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.name === item.name);

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex] = { ...updatedCart[existingItemIndex], quantity: updatedCart[existingItemIndex].quantity + 1 };
      } else {
        updatedCart.push({ ...item, quantity: 1 });
      }

      return updatedCart;
    });
  };

  const decreaseQuantity = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.name === item.name);

      if (existingItemIndex !== -1 && updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex] = { ...updatedCart[existingItemIndex], quantity: updatedCart[existingItemIndex].quantity - 1 };
      } else if (existingItemIndex !== -1 && updatedCart[existingItemIndex].quantity === 1) {
        updatedCart.splice(existingItemIndex, 1);
      }

      return updatedCart;
    });
  };

  const removeQuantity = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => cartItem.name !== item.name);
      return updatedCart;
    });
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity, removeQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

