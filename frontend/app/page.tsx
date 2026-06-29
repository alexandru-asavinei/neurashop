"use client";

import ProductCard from "../components/ProductCard";
import HighlightCard from "../components/HighlightCard";
import SearchBar from "../components/SearchBar";
import CategoryChips from "../components/CategoryChips";

import { products } from "../data/products";
import { useSearch } from "../context/SearchContext";

export default function Home() {
  const { search } = useSearch();

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="p-4 space-y-6 pb-24">
      <SearchBar />

      <CategoryChips />

      <h1 className="text-2xl font-bold text-primary">
        Discover
      </h1>

      <HighlightCard
        title="Premium Sneakers Collection"
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
      />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-5xl mb-4">
            📦
          </p>

          <h2 className="text-xl font-semibold text-primary">
            No products found
          </h2>

          <p className="text-secondary mt-2">
            Try another search.
          </p>
        </div>
      )}
    </main>
  );
}