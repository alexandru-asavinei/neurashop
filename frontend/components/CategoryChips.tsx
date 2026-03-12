const categories = [
  "All",
  "Sneakers",
  "Tech",
  "Bags",
  "Watches",
  "Home",
  "Accessories",
];

export default function CategoryChips() {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-3 py-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 whitespace-nowrap hover:bg-gray-100 transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}