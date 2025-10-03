import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diansa Attire - Sewa Kebaya Acara",
  description:
    "Diansa Attire menyediakan layanan sewa kebaya elegan untuk berbagai acara spesial Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.className} ${bricolage.variable} ${inter.variable} antialiased`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Navbar */}
          <Navbar />

          {/* Konten utama */}
          <main className="mt-6">{children}</main>

          <section className="mt-16 mb-20">
            <FAQ />
          </section>

          <Footer />
        </div>
      </body>
    </html>
  );
}
