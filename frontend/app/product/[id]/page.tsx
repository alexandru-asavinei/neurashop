
import { useCart } from "../../../context/CartContext";
import AddToCartButton from "../../../components/AddToCartButton";

const products = {
  "minimal-watch": {
    title: "Minimal Watch",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  "modern-backpack": {
    title: "Modern Backpack",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
  },
  "wireless-headphones": {
    title: "Wireless Headphones",
    price: "$249",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  "smart-lamp": {
    title: "Smart Lamp",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800",
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;


  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="p-4 text-red-500">
        Product not found: {id}
      </div>
    );
  }

  return (
    <main className="p-4 pb-24 space-y-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover rounded-2xl"
      />

      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">
          {product.title}
        </h1>

        <p className="text-lg font-semibold text-gray-800">
          {product.price}
        </p>
      </div>

      <p className="text-gray-600">
        This is a premium product available on NeuraShop.
      </p>

  <AddToCartButton product={{ id, ...product }} />
    </main>
  );
}