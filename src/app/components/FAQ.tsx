import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Reservasi & Pembatalan",
      items: [
        {
          q: "Bagaimana cara melakukan reservasi kebaya?",
          a: "Anda bisa memilih kebaya dari katalog, kemudian isi form reservasi dengan detail acara, tanggal, dan ukuran. Deposit diperlukan untuk mengunci jadwal.",
        },
        {
          q: "Apakah bisa melakukan pembatalan reservasi?",
          a: "Ya, pembatalan dapat dilakukan. Namun, deposit yang sudah dibayarkan umumnya tidak dapat dikembalikan.",
        },
        {
          q: "Kapan waktu terbaik untuk melakukan reservasi?",
          a: "Sebaiknya lakukan reservasi minimal 1–2 bulan sebelum acara agar pilihan kebaya lebih banyak.",
        },
      ],
    },
    {
      category: "Fitting & Ukuran",
      items: [
        {
          q: "Apakah bisa melakukan fitting sebelum acara?",
          a: "Ya, Anda bisa menjadwalkan fitting di studio atau menggunakan panduan ukuran online agar kebaya lebih pas.",
        },
        {
          q: "Bagaimana jika ukuran kebaya tidak sesuai saat fitting?",
          a: "Kami akan membantu melakukan penyesuaian sederhana atau mengganti kebaya dengan model lain yang tersedia.",
        },
        {
          q: "Apakah semua kebaya tersedia dalam berbagai ukuran?",
          a: "Sebagian besar kebaya tersedia dalam beberapa ukuran standar. Untuk ukuran khusus, kami menyediakan jasa penyesuaian terbatas.",
        },
      ],
    },
    {
      category: "Pengiriman & Pengembalian",
      items: [
        {
          q: "Bagaimana proses pengiriman atau pengambilan?",
          a: "Anda bisa memilih kebaya diantar ke alamat acara atau mengambil langsung di studio sesuai kesepakatan.",
        },
        {
          q: "Bisakah kebaya dikirim ke luar kota?",
          a: "Ya, kami melayani pengiriman ke luar atau dalam kota (Tegal) menggunakan jasa ekspedisi, namun ongkos kirim ditanggung penyewa.",
        },
        {
          q: "Apa yang terjadi jika kebaya rusak atau terlambat dikembalikan?",
          a: "Tim kami akan melakukan inspeksi. Jika ada kerusakan atau keterlambatan, biaya tambahan dapat dikenakan sesuai syarat dan ketentuan.",
        },
      ],
    },
    {
      category: "Layanan & Pembayaran",
      items: [
        {
          q: "Metode pembayaran apa saja yang tersedia?",
          a: "Kami menerima pembayaran melalui transfer bank, e-wallet, dan payment gateway. Deposit atau pembayaran penuh diperlukan sebelum acara.",
        },
        {
          q: "Apakah kebaya sudah termasuk aksesori?",
          a: "Beberapa kebaya disewakan lengkap dengan selendang atau ikat pinggang. Untuk aksesori tambahan seperti perhiasan, bisa disewa terpisah.",
        },
        {
          q: "Apakah tersedia layanan custom kebaya?",
          a: "Untuk acara tertentu, kami juga melayani pembuatan kebaya custom sesuai desain yang Anda inginkan.",
        },
        {
          q: "Bagaimana jika saya membutuhkan bantuan memilih kebaya?",
          a: "Tim stylist kami siap memberikan rekomendasi kebaya yang sesuai dengan tema acara dan karakter Anda.",
        },
        {
          q: "Apakah kebaya selalu dalam kondisi bersih?",
          a: "Ya, setiap kebaya selalu dicuci, disetrika, dan dicek kualitasnya sebelum disewakan kembali.",
        },
      ],
    },
  ];

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        FAQ (Pertanyaan Umum)
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Untuk memudahkan Anda menemukan informasi, kami telah merangkum
        pertanyaan yang sering diajukan mengenai reservasi, fitting, pengiriman,
        hingga layanan tambahan.
      </p>

      {/* Grid 2 kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqCategories.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">{cat.category}</h3>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {cat.items.map((item, i) => (
                <AccordionItem key={i} value={`item-${idx}-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
