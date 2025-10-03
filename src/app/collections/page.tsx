"use client";

import AvailibilityCheck from "../components/AvailibilityCheck";
import CatalogCard from "../components/CatalogCard";

const CollectionsPage = () => {
  const kebayaDummy = [
    {
      name: "Kebaya Lamaran Elegan",
      price: 450000,
      size: "M",
      available: true,
      category: "Lamaran",
      badge: "Rekomendasi Admin",
      imageUrl: "/images/kebaya_lamaran.jpg",
    },
    {
      name: "Kebaya Nikahan Premium",
      price: 950000,
      size: "L",
      available: false,
      category: "Nikahan",
      badge: "Top Bulan Ini",
      imageUrl: "/images/kebaya_nikah.jpg",
    },
    {
      name: "Kebaya Wisuda Anggun",
      price: 350000,
      size: "S",
      available: true,
      category: "Wisuda",
      imageUrl: "/images/kebaya_wisuda.jpg",
    },
    {
      name: "Kebaya Kondangan Simple",
      price: 300000,
      size: "M",
      available: true,
      category: "Kondangan",
      imageUrl: "/images/kebaya_wisuda.jpg",
    },
    {
      name: "Kebaya Modern",
      price: 500000,
      size: "XL",
      available: true,
      category: "Nikahan",
      badge: "Rekomendasi Admin",
    },
    {
      name: "Kebaya Adat Tradisional",
      price: 700000,
      size: "L",
      available: true,
      category: "Lamaran",
      badge: "Top Bulan Ini",
    },
  ];

  return (
    <div className="min-h-screen px-6 md:px-12 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Koleksi Kebaya
      </h1>

      {/* Cek Ketersediaan */}
      <div className="flex justify-center">
        <AvailibilityCheck />
      </div>

      {/* Katalog */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-6 mt-8">
        {kebayaDummy.map((item, index) => (
          <CatalogCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
