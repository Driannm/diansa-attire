const GroupingCatalog = () => {
  const categories = [
    {
      title: "Kebaya Nikah",
      desc: "Koleksi kebaya elegan untuk momen sakral pernikahan Anda.",
      image: "/images/kebaya_nikah.jpg", // ganti sesuai gambar
      href: "/catalog/nikah",
    },
    {
      title: "Kebaya Lamaran",
      desc: "Tampil menawan di hari lamaran dengan pilihan kebaya terbaik.",
      image: "/images/kebaya_lamaran.jpg",
      href: "/catalog/lamaran",
    },
    {
      title: "Kebaya Wisuda",
      desc: "Rayakan kelulusan dengan kebaya yang anggun dan stylish.",
      image: "/images/kebaya_wisuda.jpg",
      href: "/catalog/wisuda",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Judul */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Pilih Kategori Kebaya
      </h2>

      {/* Grid Katalog */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Gambar */}
            <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-top transform hover:scale-105 transition duration-300"
              />
            </div>

            {/* Konten */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {cat.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex-1">
                {cat.desc}
              </p>
              <a
                href={cat.href}
                className="mt-auto inline-block px-4 py-2 bg-pink-600 text-white text-sm sm:text-base rounded-lg hover:bg-pink-700 transition"
              >
                Lihat Koleksi
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupingCatalog;
