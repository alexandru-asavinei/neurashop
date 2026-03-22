import ProductCard from "../components/ProductCard";
import HighlightCard from "../components/HighlightCard";
import SearchBar from "../components/SearchBar";
import CategoryChips from "../components/CategoryChips";

export default function Home() {
  return (
    <main className="p-4 space-y-6 pb-24">
      <SearchBar />
      <CategoryChips />
      <h1 className="text-xl font-semibold text-gray-900">Discover</h1>

      <HighlightCard
        title="Premium Sneakers Collection"
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
      />

      <div className="grid grid-cols-2 gap-4">
        <ProductCard
          id="minimal-watch"
          title="Minimal Watch"
          price="$199"
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
        />
        <ProductCard
          id="modern-backpack"
          title="Modern Backpack"
          price="$129"
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800"
        />
        <ProductCard
          id="wireless-headphones"
          title="Wireless Headphones"
          price="$249"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
        />
        <ProductCard
          id="smart-lamp"
          title="Smart Lamp"
          price="$89"
          image="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800"
        />
      </div>
    </main>
  );
}