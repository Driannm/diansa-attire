import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 mt-12"> 
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Diansa Attire</h2>
          <p className="text-sm">
            Sewa kebaya elegan untuk setiap momen spesial Anda. Nikah, lamaran,
            hingga wisuda dengan koleksi terbaik.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-500 transition">Beranda</Link>
            </li>
            <li>
              <a href="/catalog" className="hover:text-pink-500 transition">
                Katalog
              </a>
            </li>
            <li>
              <a href="/rent-flow" className="hover:text-pink-500 transition">
                Alur Sewa
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-pink-500 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-500 transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Kontak</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Jl. Mawar No. 123, Tegal</li>
            <li>📞 +62 812-3456-7890</li>
            <li>✉️ support@Diansa Attire.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Diansa Attire. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
