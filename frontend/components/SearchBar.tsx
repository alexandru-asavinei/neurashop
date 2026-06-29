"use client";

import { useSearch } from "../context/SearchContext";

export default function SearchBar() {
  const { search, setSearch } = useSearch();

  return (
    <div className="sticky top-0 z-20 bg-background pb-3">
      <div className="relative">

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-3 rounded-xl border bg-surface text-primary placeholder:text-secondary border-border focus:outline-none focus:ring-2 focus:ring-primary/10"
        />

        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition"
          >
            ✕
          </button>
        )}

      </div>
    </div>
  );
}