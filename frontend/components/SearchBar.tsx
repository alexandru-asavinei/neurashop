export default function SearchBar() {
  return (
    <div className="sticky top-0 z-20 bg-background pb-3">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-3 rounded-xl border bg-surface text-primary placeholder:text-secondary border-border focus:outline-none focus:ring-2 focus:ring-primary/10"
      />
    </div>
  );
}