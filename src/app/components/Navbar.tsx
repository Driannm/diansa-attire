"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  CalendarSearch,
  Phone,
  BookImage,
  Sparkles,
  CircleQuestionMark,
} from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "/catalogs", label: "Koleksi", icon: <BookImage size={20} /> },
    {
      href: "/#alur-sewa",
      label: "Alur Sewa",
      icon: <CircleQuestionMark size={20} />,
    },
    { href: "#faq", label: "FAQ", icon: <CircleQuestionMark size={20} /> },
    { href: "#contact", label: "Contact", icon: <Phone size={20} /> },
  ];

  return (
    <>
      {/* Desktop Navbar - Premium & Minimalist */}
      <nav className="hidden md:block w-full bg-white/80 backdrop-blur-md border-b border-pink-100/50 shadow-sm sticky top-0 z-50 rounded-full">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            {/* === LOGO === */}
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-pink-500 group-hover:text-yellow-500 transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-pink-500/20 blur-lg group-hover:bg-yellow-500/30 transition-all duration-300 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent group-hover:from-yellow-500 group-hover:to-pink-600 transition-all duration-500">
                Diansa Attire
              </span>
            </Link>

            {/* === NAV LINKS + CTA BUTTON === */}
            <div className="flex items-center space-x-4">
              {/* Navigation Links */}
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group relative px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                        pathname === item.href
                          ? "text-pink-600"
                          : "text-gray-700 hover:text-pink-600"
                      }`}
                    >
                      <span
                        className={`absolute inset-0 rounded-full bg-gradient-to-r from-pink-100/50 to-yellow-100/50 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                          pathname === item.href ? "opacity-100" : ""
                        }`}
                      ></span>
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/availibility"
                className="relative group overflow-hidden bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-pink-500/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <CalendarSearch size={18} />
                  <span>Cek Ketersediaan</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar - Elegant & Functional */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50">
        <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 h-16 flex items-center justify-between px-5 shadow-2xl">
          {/* Logo Mobile */}
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Diansa
            </span>
          </Link>

          {/* CTA Button */}
          <Link
            href="/collections"
            className="relative group overflow-hidden bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center space-x-1">
              <span>Cek Kebaya</span>
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {/* Menu Icon */}
          <button className="text-white hover:text-pink-400 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Elegant Wave Divider */}
        <div className="relative h-8 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="url(#gradient)"
              d="M0,30 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,0 L0,0 Z"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#111827" />
                <stop offset="50%" stopColor="#000000" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Clean & Accessible */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-pink-100/50 shadow-2xl z-50">
        <div className="relative">
          {/* Decorative top line */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

          <ul className="flex justify-around items-center py-3 px-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="flex-1">
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center justify-center space-y-1 py-2 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "text-pink-600 scale-105"
                        : "text-gray-500 hover:text-pink-500"
                    }`}
                  >
                    <div
                      className={`relative p-2 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-pink-100 to-yellow-100 shadow-lg shadow-pink-200/50"
                          : ""
                      }`}
                    >
                      <div
                        className={`transition-transform duration-300 ${
                          isActive ? "scale-110" : "group-hover:scale-105"
                        }`}
                      >
                        {item.icon}
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 bg-pink-500/10 rounded-xl animate-pulse"></div>
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium transition-all duration-300 ${
                        isActive ? "font-semibold" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="w-1 h-1 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Spacer untuk mobile (agar konten tidak tertutup navbar) */}
      <div className="md:hidden h-24"></div>
      <div className="md:hidden h-20"></div>
    </>
  );
};

export default Navbar;
