"use client";

import type { Product } from "../data/products";
import { useWishlist } from "../context/WishlistContext";

type Props = {
  product: Product;
};

export default function AddToWishlistButton({
  product,
}: Props) {
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const saved = isInWishlist(product.id);

  const toggleWishlist = () => {
    if (saved) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center hover:bg-background transition"
    >
      {saved ? "❤️" : "🤍"}
    </button>
  );
}