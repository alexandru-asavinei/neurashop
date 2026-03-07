import ProductCard from "../components/ProductCard";
import HighlightCard from "../components/HighlightCard";

export default function Home() {
  return (
    <main className="p-4 space-y-6 pb-24">
      <h1 className="text-xl font-semibold">Discover</h1>

      <HighlightCard
        title="Premium Sneakers Collection"
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      />

      <div className="grid grid-cols-2 gap-4">
        <ProductCard
          title="Minimal Watch"
          price="$199"
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        />
        <ProductCard
          title="Modern Backpack"
          price="$129"
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        />
        <ProductCard
          title="Wireless Headphones"
          price="$249"
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
        />
        <ProductCard
          title="Smart Lamp"
          price="$89"
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
        />
      </div>
    </main>
  );
}