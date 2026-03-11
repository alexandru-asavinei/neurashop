import ProductCard from "../components/ProductCard";
import HighlightCard from "../components/HighlightCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
     <main className="p-4 space-y-6 pb-24">
      <SearchBar />

      <h1 className="text-xl font-semibold">Discover</h1>

      <HighlightCard
        title="Premium Sneakers Collection"
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
      />

      <div className="grid grid-cols-2 gap-4">
        <ProductCard
          title="Minimal Watch"
          price="$199"
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
        />
        <ProductCard
          title="Modern Backpack"
          price="$129"
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800"
        />
        <ProductCard
          title="Wireless Headphones"
          price="$249"
          image="https://images.unsplash.com/photo-1518441902110-7f7f60b1b5f6?w=800"
        />
        <ProductCard
          title="Smart Lamp"
          price="$89"
          image="https://images.unsplash.com/photo-1505691723518-36a5ac3b2bde?w=800"
        />
      </div>
    </main>
  );
}