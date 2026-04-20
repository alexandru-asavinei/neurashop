"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
    //const { cart } = useCart();
    const { cart, removeFromCart } = useCart();

    return (
        <main className="p-4 space-y-4 pb-24">
            <h1 className="text-xl font-semibold">Your Cart</h1>

            {cart.length === 0 && (
                <p className="text-gray-500">Cart is empty</p>
            )}

            {cart.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm"
                >
                    <div className="flex items-center gap-4">
                        <img src={item.image} className="w-16 h-16 rounded" />
                        <div>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 text-sm cursor-pointer hover:underline"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </main>
    );
}