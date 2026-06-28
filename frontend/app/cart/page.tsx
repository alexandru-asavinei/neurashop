"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace("$", "")) * item.quantity;
  }, 0);

  return (
    <main className="p-4 space-y-4 pb-24">
      <h1 className="text-2xl font-bold text-primary">
        Your Cart
      </h1>

      {cart.length === 0 && (
        <p className="text-secondary">
          Cart is empty
        </p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-surface p-3 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-lg"
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

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="w-9 h-9 rounded-full border border-border bg-surface text-primary hover:bg-background transition"
            >
              −
            </button>

            <span className="w-8 text-center font-semibold text-primary">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="w-9 h-9 rounded-full border border-border bg-surface text-primary hover:bg-background transition"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <div className="bg-surface rounded-2xl border border-border p-4 space-y-3">
            <h2 className="text-lg font-semibold text-primary">
              Cart Summary
            </h2>

            <div className="flex justify-between">
              <span className="text-secondary">
                Items
              </span>

              <span className="font-medium text-primary">
                {cart.reduce(
                  (sum, item) => sum + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-secondary">
                Subtotal
              </span>

              <span className="font-bold text-primary">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={clearCart}
            className="w-full bg-danger text-white rounded-xl py-3 font-medium cursor-pointer hover:opacity-90 transition"
          >
            Clear Cart
          </button>

          <button
            className="w-full bg-primary text-white rounded-xl py-3 font-medium cursor-pointer hover:opacity-90 transition"
          >
            Checkout
          </button>
        </>
      )}
    </main>
  );
}