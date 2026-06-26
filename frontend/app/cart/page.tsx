"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
    //const { cart } = useCart();
    const { cart, removeFromCart, clearCart } = useCart();
    const total = cart.reduce((sum, item) => {
        return sum + Number(item.price.replace("$", ""));
    }, 0);

   return (
  <main className="p-4 space-y-4 pb-24">
    <h1 className="text-2xl font-bold text-primary">Your Cart</h1>

    {cart.length === 0 && (
      <p className="text-secondary">Cart is empty</p>
    )}

    {cart.map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-between bg-surface p-3 rounded-xl shadow-sm"
      >
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            className="w-16 h-16 object-cover rounded-lg"
            alt={item.title}
          />

          <div>
            <p className="text-sm font-medium text-primary">
              {item.title}
            </p>

            <p className="text-sm text-secondary">
              {item.price}
            </p>
          </div>
        </div>

        <button
          onClick={() => removeFromCart(index)}
          className="text-danger text-sm cursor-pointer hover:underline"
        >
          Remove
        </button>
      </div>
    ))}

    {cart.length > 0 && (
      <div className="border-t pt-4 space-y-2">
        <p className="font-medium text-secondary">
          Items: {cart.length}
        </p>

        <p className="text-xl font-bold text-primary">
          Total: ${total}
        </p>

        <button
          onClick={clearCart}
          className="w-full bg-danger  text-white rounded-xl py-3 cursor-pointer hover:opacity-90 transition"
        >
          Clear Cart
        </button>

        <button
          className="w-full bg-primary text-white rounded-xl py-3 cursor-pointer hover:opacity-90 transition"
        >
          Checkout
        </button>
      </div>
    )}
  </main>
);
}
