import ProductCard from "../components/ProductCard";
import HighlightCard from "../components/HighlightCard";
import SearchBar from "../components/SearchBar";
import CategoryChips from "../components/CategoryChips";
import { products } from "../data/products";

export default function Home() {
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

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}