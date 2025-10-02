"use client";

import { CircleAlert, Infinity } from "lucide-react";
import Link from "next/link";
import React from "react";

const steps = [
  {
    title: "1. Jelajahi Katalog",
    subtitle: "Pilih model & tema",
    time: "infinity",
    desc: "Lihat koleksi kebaya berdasarkan kategori (Nikah, Lamaran, Wisuda). Gunakan filter ukuran, warna, atau budget.",
    action: { href: "/kebaya", label: "Lihat Katalog" },
  },
  {
    title: "2. Cek Ketersediaan",
    subtitle: "Tanggal & ukuran",
    time: "5 menit",
    desc: "Masukkan tanggal acara dan ukuran. Sistem akan memberi tahu apakah kebaya tersedia pada tanggal yang dipilih.",
    action: { href: "/kebaya#cek-ketersediaan", label: "Cek Ketersediaan" },
  },
  {
    title: "3. Reservasi / Booking",
    subtitle: "Hold item",
    time: "10 menit",
    desc: "Isi form pemesanan: nama, nomor telepon, alamat acara, tanggal sewa. Deposit diperlukan untuk mengunci tanggal.",
    action: { href: "/booking", label: "Buat Reservasi" },
  },
  {
    title: "4. Pengukuran & Fitting",
    subtitle: "Optional (fitting)",
    time: "30–60 menit",
    desc: "Jika perlu, jadwalkan fitting agar kebaya menyesuaikan badan. Bisa dilakukan di studio atau via panduan pengukuran online.",
  },
  {
    title: "5. Pembayaran",
    subtitle: "Bayar deposit / sisa",
    time: "5–15 menit",
    desc: "Pembayaran deposit atau lunas melalui transfer, e-wallet, atau payment gateway. Konfirmasi pembayaran diperlukan.",
  },
  {
    title: "6. Kirim / Ambil",
    subtitle: "Delivery atau pickup",
    time: "1–7 hari sebelum acara",
    desc: "Pilih opsi antar (dikirim ke alamat acara) atau ambil di studio. Cek jadwal pengiriman agar tiba tepat waktu.",
    action: { href: "/help/delivery", label: "Opsi Pengiriman" },
  },
  {
    title: "7. Hari Acara",
    subtitle: "Pemakaian",
    time: "Hari acara",
    desc: "Gunakan kebaya selama acara. Pastikan mengikuti instruksi perawatan (hindari makanan/minuman berpotensi menodai).",
  },
  {
    title: "8. Pengembalian",
    subtitle: "Kondisi & deposit",
    time: "1–2 hari setelah acara",
    desc: "Kembalikan kebaya sesuai kesepakatan. Tim akan inspeksi; jika tidak ada kerusakan, deposit dikembalikan (waktu pengembalian sesuai kebijakan).",
  },
];

export default function RentFlow() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Alur Sewa Kebaya — Langkah demi Langkah
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            Panduan mudah dari pemilihan sampai pengembalian. Klik tombol aksi
            untuk langsung ke halaman terkait.
          </p>
        </header>

        {/* Grid Cards - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  {idx + 1}
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full flex items-center gap-1">
                  {step.time === "infinity" ? (
                    <Infinity className="w-4 h-4 ext-gray-500 dark:ext-gray-400" />
                  ) : (
                    step.time
                  )}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-pink-600 dark:text-pink-400 font-medium mb-3">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {step.desc}
              </p>

              {/* Action Button */}
              {step.action && (
                <Link
                  href={step.action.href}
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-pink-600 text-white text-sm font-medium rounded-lg hover:bg-pink-700 transition-colors duration-200"
                >
                  {step.action.label}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Tips & Kebijakan
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CircleAlert className="h-5 w-5 text-pink-600 dark:text-pink-400 flex-shrink-0" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">Tips:</strong>{" "}
                Upload foto ukuran atau detail yang jelas saat reservasi agar
                fitting lebih akurat.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CircleAlert className="h-5 w-5 text-pink-600 dark:text-pink-400 flex-shrink-0" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">
                  Kebijakan:
                </strong>{" "}
                Periksa syarat & ketentuan untuk deposit, pembatalan, dan biaya
                keterlambatan.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CircleAlert className="h-5 w-5 text-pink-600 dark:text-pink-400 flex-shrink-0" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">
                  Catatan:
                </strong>{" "}
                keterlambatan pengembalian atau kerusakan dapat dikenai biaya
                tambahan sesuai syarat & ketentuan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
