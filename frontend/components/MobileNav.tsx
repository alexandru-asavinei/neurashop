"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function MobileNav() {
  const { cart } = useCart();
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around py-3 z-50">

      <Link href="/">
        <button className="text-sm text-gray-600 cursor-pointer hover:text-black transition active:scale-95">
          Home
        </button>
      </Link>

      <Link href="/search">
        <button className="text-sm text-gray-600 cursor-pointer hover:text-black transition active:scale-95">
          Search
        </button>
      </Link>

      <Link href="/cart">
        <div className="relative cursor-pointer">
          <button className="text-sm text-gray-600 hover:text-black transition active:scale-95">
            Cart
          </button>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </Link>

      <Link href="/wishlist">
        <button className="text-sm text-gray-600 cursor-pointer hover:text-black transition active:scale-95">
          Wishlist
        </button>
      </Link>

      <Link href="/profile">
        <button className="text-sm text-gray-600 cursor-pointer hover:text-black transition active:scale-95">
          Profile
        </button>
      </Link>

    </div>
  );
}