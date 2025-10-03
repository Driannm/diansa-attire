import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface CatalogCardProps {
  name: string;
  price: number;
  size: string;
  imageUrl?: string;
  available: boolean;
  category: string;
  badge?: string;
}

const CatalogCard: React.FC<CatalogCardProps> = ({
  name,
  price,
  size,
  imageUrl,
  available,
  category,
  badge,
}) => {
  return (
    <Card className="w-full rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Gambar */}
      <div className="relative w-full aspect-[3/4] -mt-6">
        <Image
          src={imageUrl || "/images/kebaya_lamaran.jpg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {!available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold text-base">
              Tidak Tersedia
            </span>
          </div>
        )}

        {/* Badge kategori */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          <Badge className="bg-pink-50 text-gray-600 text-xs px-2 py-0.5">
            {category}
          </Badge>
          {badge && (
            <Badge className="bg-yellow-500 text-white text-xs px-2 py-0.5">
              {badge}
            </Badge>
          )}
        </div>
      </div>

      {/* Konten */}
      <CardHeader className="p-4 pb-2 -mt-8">
        <h3 className="font-semibold text-base text-gray-800 dark:text-gray-200">
          {name}
        </h3>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Ukuran:{" "}
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {size}
            </span>
          </span>
          <span className="text-lg font-bold text-pink-600 dark:text-pink-400">
            Rp {price.toLocaleString("id-ID")}
          </span>
        </div>

        <Button
          className="w-full"
          variant={available ? "default" : "secondary"}
          disabled={!available}
          size="sm"
        >
          {available ? "Lihat Detail" : "Habis"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatalogCard;
