"use client";

import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        console.log("CLICK", product); // 👈 DEBUG
        addToCart(product);
      }}
      className="w-full py-4 rounded-xl bg-black text-white font-medium cursor-pointer hover:bg-gray-900 transition active:scale-95"
    >
      Add to Cart
    </button>
  );
}