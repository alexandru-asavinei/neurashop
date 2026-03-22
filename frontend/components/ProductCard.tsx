import Link from "next/link";
type ProductCardProps = {
  id: string;
  title: string;
  price: string;
  image: string;
};

export default function ProductCard({id, title, price, image }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden transform transition duration-200 hover:scale-[1.02] hover:shadow-md cursor-pointer">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <p className="text-sm font-semibold text-gray-700 mt-1">{price}</p>
      </div>
    </div>
    </Link>
  );
}