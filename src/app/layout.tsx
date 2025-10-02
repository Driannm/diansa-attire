import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import GroupingCatalog from "./components/GroupingCatalog";
import RentFlow from "./components/RentFlow";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

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

          {/* Catalog */}
          <section className="mt-12">
            <GroupingCatalog />
          </section>
          
          <section className="mt-12">
            <RentFlow />
          </section>
          
          <section className="mt-12">
            <FAQ />
          </section>

          <Footer />
        </div>
      </body>
    </html>
  );
}