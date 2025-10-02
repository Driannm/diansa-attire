"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Siti",
    username: "@siti",
    body: "Kebayanya cantik banget, pas di badan, dan nyaman dipakai seharian. Recommended!",
    img: "https://avatar.vercel.sh/siti",
  },
  {
    name: "Dewi",
    username: "@dewi",
    body: "Pelayanan sangat ramah, kebaya sesuai foto. Bakal sewa lagi kalau ada acara.",
    img: "https://avatar.vercel.sh/dewi",
  },
  {
    name: "Anisa",
    username: "@anisa",
    body: "Aku pakai kebaya untuk wisuda, hasilnya cantik banget. Teman-teman banyak yang nanya sewa di mana.",
    img: "https://avatar.vercel.sh/anisa",
  },
  {
    name: "Putri",
    username: "@putri",
    body: "Pilihan kebaya sangat banyak, dari nikah, lamaran sampai wisuda. Semua rapi dan wangi.",
    img: "https://avatar.vercel.sh/putri",
  },
  {
    name: "Mega",
    username: "@mega",
    body: "Harga terjangkau tapi kualitas premium. Aku puas banget dengan pelayanannya.",
    img: "https://avatar.vercel.sh/mega",
  },
  {
    name: "Rina",
    username: "@rina",
    body: "Proses booking gampang, kebaya datang sesuai jadwal. Terima kasih Diansa Attire!",
    img: "https://avatar.vercel.sh/rina",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-56 sm:w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-200 bg-white hover:bg-gray-100",
        "dark:border-gray-50/[.1] dark:bg-gray-800 dark:hover:bg-gray-700"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-gray-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs text-gray-500 dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-200">
        {body}
      </blockquote>
    </figure>
  );
};

export default function ReviewPage() {
  return (
    <section className="relative w-full py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-3xl font-bold mb-8 sm:mb-10 text-gray-900 dark:text-white">
          Apa Kata Mereka?
        </h2>

        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:18s] gap-4 sm:gap-6">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:18s] gap-4 sm:gap-6">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Gradient Fade Responsif */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-gray-50 dark:from-gray-900" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-gray-50 dark:from-gray-900" />
        </div>
      </div>
    </section>
  );
}