"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const SearchBar = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const sizes = ["S", "M", "L", "XL"];
  const categories = ["Modern", "Tradisional", "Simple", "Glamour"];
  const colors = ["Merah", "Putih", "Hitam", "Coklat", "Gold", "Pink"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      keyword,
      size: selectedSize,
      category: selectedCategory,
      colors: selectedColors,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search bar utama */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-full flex items-center px-4 py-2 space-x-3"
      >
        <Search className="text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Cari kebaya berdasarkan nama, warna, atau model..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-sm text-gray-700 dark:text-gray-200"
        />

        <button
          type="button"
          onClick={() => setShowFilters((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {showFilters ? <X size={18} /> : <Filter size={18} />}
        </button>

        <Button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4 py-1.5 text-sm font-medium"
        >
          Cari
        </Button>
      </form>

      {/* Filter tambahan */}
      {showFilters && (
        <div className="mt-4 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-6 animate-fadeIn">
          {/* Ukuran */}
          <div>
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
              Ukuran
            </Label>
            <div className="flex flex-wrap gap-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  className={`px-4 py-1.5 rounded-full border text-sm font-medium transition 
                    ${
                      selectedSize === s
                        ? "bg-pink-500 text-white border-pink-500"
                        : "border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Kategori */}
          <div>
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
              Kategori
            </Label>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(selectedCategory === cat ? null : cat)
                  }
                  className={`px-4 py-1.5 rounded-full border text-sm font-medium transition 
                    ${
                      selectedCategory === cat
                        ? "bg-pink-500 text-white border-pink-500"
                        : "border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Warna */}
          <div>
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
              Warna
            </Label>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox
                    id={color}
                    checked={selectedColors.includes(color)}
                    onCheckedChange={() => handleColorToggle(color)}
                  />
                  <Label htmlFor={color}>{color}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;