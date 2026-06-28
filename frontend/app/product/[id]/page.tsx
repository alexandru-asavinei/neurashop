
import { useCart } from "../../../context/CartContext";
import AddToCartButton from "../../../components/AddToCartButton";
import { products } from "../../../data/products";


export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;


const product = products.find(
  (product) => product.id === id
);

  if (!product) {
    return (
      <div className="p-4 text-danger">
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
        <h1 className="text-2xl font-semibold text-primary">
          {product.title}
        </h1>

        <p className="text-lg font-semibold text-primary">
          {product.price}
        </p>
      </div>

      <p className="text-secondary">
        This is a premium product available on NeuraShop.
      </p>

  <AddToCartButton product={product} />
    </main>
  );
}