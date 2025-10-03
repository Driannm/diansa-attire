import { CalendarSearch } from "lucide-react";
import ReviewPage from "./components/ReviewPage";
import GroupingCatalog from "./components/GroupingCatalog";
import RentFlow from "./components/RentFlow";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10">
      {/* Judul */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white text-center leading-tight">
        Sewa Kebaya Elegan untuk Acara Spesial Anda
      </h1>

      {/* Deskripsi */}
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mb-8 text-base sm:text-lg">
        Temukan koleksi kebaya terbaik dengan berbagai pilihan model dan ukuran.
        Cocok untuk pernikahan, wisuda, hingga acara formal lainnya.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <a
          href="/collections"
          className="flex items-center justify-center px-6 py-3 rounded-lg bg-pink-400 text-white text-base font-semibold hover:bg-pink-500 transition"
        >
          <CalendarSearch className="mr-2 w-5 h-5" />
          Cek Ketersediaan
        </a>
        <a
          href="/about"
          className="flex items-center justify-center px-6 py-3 rounded-lg border border-gray-400 dark:border-gray-600 text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Kontak Kami
        </a>
      </div>

      {/* Review */}
      <div className="mt-22 w-full">
        <ReviewPage />
      </div>

      {/* Catalog */}
      <section className="mt-12">
        <GroupingCatalog />
      </section>

      <section className="mt-12">
        <RentFlow />
      </section>
    </div>
  );
}
