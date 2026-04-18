"use client";

import Link from "next/link";

export default function MobileNav() {
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
   <button className="text-sm text-gray-600 cursor-pointer hover:text-black transition active:scale-95">
  Cart
</button>
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