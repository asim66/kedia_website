"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, MapPin, ShieldCheck, Stethoscope, ChevronRight, Eye } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "reception" | "operatory" | "lounge" | "consultation";
  description: string;
  image: string;
  badge: string;
  location: string;
}

export const clinicGalleryData: GalleryItem[] = [
  {
    id: "reception",
    title: "Front Reception & Welcome Counter",
    category: "reception",
    description: "Modern reception counter with illuminated 'Kedia Dental Care Since 2004' sign at Forest Park, Bhubaneswar.",
    image: "/images/clinic_reception.webp",
    badge: "Since 2004",
    location: "2nd Floor, Shuvam Towers",
  },
  {
    id: "treatment",
    title: "Live Micro-Treatment Operatory",
    category: "operatory",
    description: "Dr. Shiv Dayal Kedia performing painless treatment using magnification loupes and sterile equipment.",
    image: "/images/clinic_treatment.webp",
    badge: "Painless Micro-Dentistry",
    location: "Operatory Suite #1",
  },
  {
    id: "corridor",
    title: "Glass Operatories & Dental Chairs",
    category: "operatory",
    description: "Fully automated ergonomic dental units housed in glass partitions for maximum transparency and infection control.",
    image: "/images/clinic_corridor.webp",
    badge: "100% Sterile",
    location: "Clinical Corridor",
  },
  {
    id: "lounge",
    title: "Patient Lounge & Waiting Hall",
    category: "lounge",
    description: "Quiet, soothing waiting lounge equipped with entertainment screens, indoor plants, and comfortable seating.",
    image: "/images/clinic_lounge.webp",
    badge: "Anxiety-Free Zone",
    location: "Patient Lounge",
  },
  {
    id: "office",
    title: "Founder's Consultation Office",
    category: "consultation",
    description: "Private consultation desk where Dr. Shiv Dayal Kedia provides transparent treatment planning and digital examination.",
    image: "/images/dr_kedia_office.jpg",
    badge: "Expert Consultation",
    location: "Doctor Office",
  },
];

export default function ClinicGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems = activeFilter === "all"
    ? clinicGalleryData
    : clinicGalleryData.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50/40 to-white border-t border-b border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-brand-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Authentic Clinic Ambience
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight">
            Explore Kedia Dental Care
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Take a virtual tour of our modern, spacious, and hospital-grade sterile facility located at Forest Park, Bhubaneswar.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: "all", label: "All Premises" },
            { id: "reception", label: "Reception & Lounge" },
            { id: "operatory", label: "Treatment Operatories" },
            { id: "consultation", label: "Doctor Suite" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeFilter === filter.id
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/25 scale-105"
                  : "bg-white text-slate-700 hover:bg-purple-50 border border-slate-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-brand-primary/40 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-primary text-xs font-bold shadow-md border border-white/40">
                    {item.badge}
                  </span>
                </div>

                {/* Zoom Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-12 h-12 rounded-full bg-brand-primary/90 text-white flex items-center justify-center shadow-xl backdrop-blur-sm transform group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6" />
                  </span>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-purple-300 font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {item.location}
                  </p>
                  <h3 className="text-lg font-bold font-heading text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 bg-white flex items-center justify-between border-t border-slate-100">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <span className="text-brand-primary shrink-0 ml-3 group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-slate-900/80 hover:bg-slate-950 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors shadow-md"
                aria-label="Close Preview"
              >
                ✕
              </button>

              <div className="relative h-[320px] sm:h-[450px] md:h-[520px] w-full bg-slate-950">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 md:p-8 bg-slate-900 text-white space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="px-3 py-1 bg-brand-primary text-white rounded-full text-xs font-bold">
                    {selectedImage.badge}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" /> {selectedImage.location}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
