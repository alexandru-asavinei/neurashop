"use client";

import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
};



const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // 🔥 QUI VA QUESTO
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

 const removeFromCart = (index: number) => {
  setCart((prev) => prev.filter((_, i) => i !== index));
};

const clearCart = () => {
  setCart([]);
};

return (
  <CartContext.Provider
    value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
    }}
  >
    {children}
  </CartContext.Provider>
);
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}