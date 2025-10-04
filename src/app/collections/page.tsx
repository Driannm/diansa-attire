"use client";

import AvailibilityCheck from "../components/AvailibilityCheck";
import CatalogCard from "../components/CatalogCard";

const CollectionsPage = () => {
  const kebayaDummy = [
    {
      name: "Dewi Danu Kebaya in Cerulean Blue",
      price: 400000,
      size: "M",
      available: true,
      category: "Wisuda",
      badge: "Rekomendasi Admin",
      imageUrl: "/images/wisuda-dewi-danu-kebaya-in-cerulean-blue.webp",
    },
    {
      name: "Nyai Balau Kebaya in Terracotta",
      price: 390000,
      size: "M",
      available: false,
      category: "Wisuda",
      imageUrl: "/images/wisuda-nyai-balau-kebaya-in-terracotta.webp",
    },
    {
      name: "Roro Jonggrang Kebaya in Burgundy",
      price: 410000,
      size: "L",
      available: true,
      category: "Wisuda",
      badge: "Rekomendasi Admin",
      imageUrl: "/images/wisuda-roro-jonggrang-kebaya-in-burgundy.webp",
    },
    {
      name: "Raja Gagak & Putri Napal Melintang Kebaya in Cerulean Blue",
      price: 420000,
      size: "XL",
      available: true,
      category: "Wisuda",
      badge: "Best Seller",
      imageUrl: "/images/wisuda-raja-gagak-putri-napal-melintang-kebaya-in-cerulean-blue.webp",
    },
    {
      name: "Calon Arang Kebaya in Burgundy",
      price: 370000,
      size: "S",
      available: true,
      category: "Wisuda",
      imageUrl: "/images/wisuda-calon-arang-kebaya-in-burgundy.webp",
    },
    {
      name: "Dua Putri & Raja Ular Kebaya in Powder Pink on Periwinkle",
      price: 430000,
      size: "M",
      available: false,
      category: "Wisuda",
      badge: "Top Bulan Ini",
      imageUrl: "/images/wisuda-dua-putri-raja-ular-kebaya-in-powder-pink-on-periwinkle.webp",
    },
    {
      name: "Pesut Mahakam Kebaya in Dusty Pink on Dust Blue",
      price: 360000,
      size: "L",
      available: true,
      category: "Wisuda",
      imageUrl: "/images/wisuda-pesut-mahakam-kebaya-in-dusty-pink-on-dust-blue.webp",
    },
    {
      name: "Putri Mandalika Kebaya in Ombre Dusty Pink",
      price: 390000,
      size: "M",
      available: true,
      category: "Wisuda",
      badge: "Rekomendasi Admin",
      imageUrl: "/images/wisuda-putri-mandalika-kebaya-in-ombre-dusty-pink.webp",
    },
    {
      name: "Natuna Mythic Rhythm Dress in Taupe",
      price: 950000,
      size: "M",
      available: true,
      category: "Nikah",
      badge: "Top Bulan Ini",
      imageUrl: "/images/nikah-natuna-mythic-rhythm-dress-in-taupe.webp",
    },
    {
      name: "Karuna Mulberry Kutubaru Kebaya",
      price: 880000,
      size: "L",
      available: false,
      category: "Nikah",
      imageUrl: "/images/nikah-karuna-mulberry-kutubaru-kebaya.webp",
    },
    {
      name: "Karuna Kebaya Kutubaru Marsala",
      price: 920000,
      size: "XL",
      available: true,
      category: "Nikah",
      badge: "Rekomendasi Admin",
      imageUrl: "/images/nikah-karuna-kebaya-kutubaru-marsala.webp",
    },
    {
      name: "Sadajiwa Kebaya in Navy",
      price: 970000,
      size: "M",
      available: true,
      category: "Nikah",
      imageUrl: "/images/nikah-sadajiwa-kebaya-in-navy.webp",
    },
    {
      name: "Sadajiwa Kebaya in Plum",
      price: 990000,
      size: "L",
      available: true,
      category: "Nikah",
      badge: "Best Seller",
      imageUrl: "/images/nikah-sadajiwa-kebaya-in-plum.webp",
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
