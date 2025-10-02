import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      q: "Bagaimana cara melakukan reservasi kebaya?",
      a: "Anda bisa memilih kebaya dari katalog, kemudian isi form reservasi dengan detail acara, tanggal, dan ukuran. Deposit diperlukan untuk mengunci jadwal.",
    },
    {
      q: "Apakah bisa melakukan fitting sebelum acara?",
      a: "Ya, Anda bisa menjadwalkan fitting di studio atau menggunakan panduan ukuran online agar kebaya lebih pas.",
    },
    {
      q: "Metode pembayaran apa saja yang tersedia?",
      a: "Kami menerima pembayaran melalui transfer bank, e-wallet, dan payment gateway. Deposit atau pembayaran penuh diperlukan sebelum acara.",
    },
    {
      q: "Bagaimana proses pengiriman atau pengambilan?",
      a: "Anda bisa memilih kebaya diantar ke alamat acara atau mengambil langsung di studio sesuai kesepakatan.",
    },
    {
      q: "Apa yang terjadi jika kebaya rusak atau terlambat dikembalikan?",
      a: "Tim kami akan melakukan inspeksi. Jika ada kerusakan atau keterlambatan, biaya tambahan dapat dikenakan sesuai syarat dan ketentuan.",
    },
  ];

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">FAQ (Pertanyaan Umum)</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-left text-lg font-medium">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;