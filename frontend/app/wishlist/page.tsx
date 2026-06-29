"use client";

import { useWishlist } from "../../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <main className="p-4 pb-24 space-y-4">
      <h1 className="text-2xl font-bold text-primary">
        Wishlist
      </h1>

      {wishlist.length === 0 && (
        <p className="text-secondary">
          Your wishlist is empty.
        </p>
      )}

      {wishlist.map((item) => (
        <div
          key={item.id}
          className="bg-surface border border-border rounded-xl p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-lg"
            />

            <div>
              <p className="font-medium text-primary">
                {item.title}
              </p>

              <p className="text-secondary">
                {item.price}
              </p>
            </div>
          </div>

          <button
            onClick={() => removeFromWishlist(item.id)}
            className="text-danger hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
    </main>
  );
}