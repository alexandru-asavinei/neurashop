export default function SearchBar() {
  return (
    <div className="sticky top-0 z-20 bg-[#FAFAFB] pb-3">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
      />
    </div>
  );
}