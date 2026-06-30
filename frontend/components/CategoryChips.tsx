"use client";

import { useCategory } from "../context/CategoryContext";
import { useSearch } from "../context/SearchContext";

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
  const { category, setCategory } = useCategory();
  const { setSearch } = useSearch();

  const handleCategoryClick = (cat: string) => {
    setCategory(cat);
    setSearch("");
  };

  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-3 py-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition cursor-pointer ${
              category === cat
                ? "bg-primary text-white border-primary"
                : "bg-surface text-secondary border-border hover:bg-background"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}