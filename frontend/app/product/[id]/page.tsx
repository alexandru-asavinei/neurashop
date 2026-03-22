type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  return (
    <main className="p-4 pb-24 space-y-6">
      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
        alt="product"
        className="w-full h-80 object-cover rounded-2xl"
      />

      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">{id}</h1>

        <p className="text-lg font-semibold text-gray-800">$199</p>
      </div>

      <p className="text-gray-600">
        This is a premium product available on NeuraShop. High quality materials
        and modern design.
      </p>

      <button className="w-full py-4 rounded-xl bg-black text-white font-medium">
        Add to Cart
      </button>
    </main>
  );
}