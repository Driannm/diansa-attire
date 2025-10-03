"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AvailibilityCheck = () => {
  const [size, setSize] = useState("");
  const [eventType, setEventType] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const handleCheckboxChange = (value: string) => {
    setEventType((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Date */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Tanggal Acara (Mulai & Selesai)
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Mulai */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  {startDate ? format(startDate, "MMMM d, yyyy") : "Mulai"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(date) => {
                    setStartDate(date);
                    if (endDate && date && endDate < date) {
                      setEndDate(date);
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* Selesai */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  {endDate ? format(endDate, "MMMM d, yyyy") : "Selesai"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={(date) => {
                    if (startDate && date && date < startDate) {
                      setEndDate(startDate);
                    } else {
                      setEndDate(date);
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Ukuran
          </label>
          <Select value={size} onValueChange={(val) => setSize(val)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="-- Pilih Ukuran --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="S">S (Small)</SelectItem>
              <SelectItem value="M">M (Medium)</SelectItem>
              <SelectItem value="L">L (Large)</SelectItem>
              <SelectItem value="XL">XL (Extra Large)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Jenis Acara
          </label>
          <div className="flex flex-wrap gap-4">
            {["Nikahan", "Lamaran", "Wisuda", "Kondangan"].map((event) => (
              <div key={event} className="flex items-center space-x-2">
                <Checkbox
                  id={event}
                  checked={eventType.includes(event.toLowerCase())}
                  onCheckedChange={() =>
                    handleCheckboxChange(event.toLowerCase())
                  }
                />
                <Label htmlFor={event}>{event}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-2 bg-pink-400 text-white rounded-lg font-semibold hover:bg-pink-500 transition"
        >
          Cek Sekarang
        </button>
      </form>

      {/* Result */}
      {submitted && startDate && endDate && (
        <div className="mt-8 w-full rounded-lg p-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
          <div className="flex items-center mb-4">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
            <h3 className="text-lg font-semibold">Kebaya yang tersedia</h3>
          </div>

          <div className="space-y-2">
            <p>
              <span className="font-medium">Tanggal :</span>{" "}
              {format(startDate, "d MMMM")} - {format(endDate, "d MMMM yyyy")}
            </p>
            <p>
              <span className="font-medium">Ukuran :</span> {size}
            </p>
            <p>
              <span className="font-medium">Jenis Acara :</span>{" "}
              {eventType.join(", ")}
            </p>
          </div>

          <p className="text-center mt-4">
            Menampilkan : <span className="font-semibold">23 Kebaya</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AvailibilityCheck;