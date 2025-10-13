import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Diansa Attire
          </h2>
          <p className="text-sm">
            Sewa kebaya elegan untuk setiap momen spesial Anda. Nikah, lamaran,
            hingga wisuda dengan koleksi terbaik.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Navigasi
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-500 transition">
                Beranda
              </Link>
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
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Kontak
          </h3>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            {/* Alamat */}
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
              <a
                href="https://www.google.com/maps?q=Jl.+Mawar+No.+123,+Tegal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Jl. Mawar No. 123, Tegal
              </a>
            </li>

            {/* Telepon */}
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-pink-400 flex-shrink-0" />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +62 812-3456-7890
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-pink-400 flex-shrink-0" />
              <a
                href="mailto:support@diansaattire.com"
                className="hover:underline"
              >
                support@diansaattire.com
              </a>
            </li>

            {/* Instagram */}
            <li className="flex items-center gap-2">
              <Instagram className="h-5 w-5 text-pink-400 flex-shrink-0" />
              <a
                href="https://www.instagram.com/diansaattire"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @diansaattire
              </a>
            </li>

            {/* WhatsApp */}
            <li className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-pink-400 flex-shrink-0" />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat via WhatsApp
              </a>
            </li>
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
