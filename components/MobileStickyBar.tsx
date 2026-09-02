"use client";

import { Phone, MessageCircle } from "lucide-react";
import { clinicInfo } from "@/data/clinicData";

export default function MobileStickyBar() {
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneRaw.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello Kedia Dental Care, I would like to inquire about dental care services."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2.5 px-4 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Direct Phone Call */}
        <a
          href={`tel:${clinicInfo.phoneRaw}`}
          className="flex-1 bg-brand-primary hover:bg-brand-primaryDark text-white py-2.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-md active:scale-95 touch-manipulation min-h-[48px]"
          aria-label="Call Clinic"
        >
          <Phone className="w-4 h-4 shrink-0 text-white" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Quick Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-md active:scale-95 touch-manipulation min-h-[48px]"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-4 h-4 shrink-0 text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

