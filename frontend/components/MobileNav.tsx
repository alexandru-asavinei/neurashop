"use client";

import Link from "next/link";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function MobileNav() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-surface border-t border-border flex justify-around py-3 z-50">

      <Link href="/">
        <button className="text-sm text-secondary cursor-pointer hover:text-primary transition active:scale-95">
          Home
        </button>
      </Link>

      <Link href="/search">
        <button className="text-sm text-secondary cursor-pointer hover:text-primary transition active:scale-95">
          Search
        </button>
      </Link>

      <Link href="/cart">
        <div className="relative cursor-pointer">
          <button className="text-sm text-secondary hover:text-primary transition active:scale-95">
            Cart
          </button>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </div>
      </Link>

      <Link href="/wishlist">
        <div className="relative cursor-pointer">
          <button className="text-sm text-secondary hover:text-primary transition active:scale-95">
            Wishlist
          </button>

          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-danger text-white text-xs px-2 py-0.5 rounded-full">
              {wishlist.length}
            </span>
          )}
        </div>
      </Link>

      <Link href="/profile">
        <button className="text-sm text-secondary cursor-pointer hover:text-primary transition active:scale-95">
          Profile
        </button>
      </Link>

    </div>
  );
}