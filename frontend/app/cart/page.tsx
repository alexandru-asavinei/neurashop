"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <main className="p-4 space-y-4 pb-24">
      <h1 className="text-xl font-semibold">Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-500">Cart is empty</p>
      )}

      {cart.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm"
        >
          <img
            src={item.image}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">
              {item.title}
            </p>
            <p className="text-sm text-gray-600">{item.price}</p>
          </div>
        </div>
      ))}
    </main>
  );
}