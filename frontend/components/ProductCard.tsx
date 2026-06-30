"use client";

import Link from "next/link";
import AddToWishlistButton from "./AddToWishlistButton";

type ProductCardProps = {
  id: string;
  title: string;
  price: string;
  image: string;
  category: string;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <div className="relative">
      <Link href={`/product/${id}`}>
        <div className="bg-surface rounded-2xl shadow-sm overflow-hidden transform transition duration-200 hover:scale-[1.02] hover:shadow-md cursor-pointer">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover"
          />

          <div className="p-3">
            <h3 className="text-sm font-medium text-primary">
              {title}
            </h3>

            <p className="text-sm font-semibold text-secondary mt-1">
              {price}
            </p>
          </div>
        </div>
      </Link>

      <div className="absolute top-3 right-3">
        <AddToWishlistButton
          product={{
            id,
            title,
            price,
            image,
            category,
          }}
        />
      </div>
    </div>
  );
}