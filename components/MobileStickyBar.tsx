"use client";

import { useState } from "react";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { clinicInfo } from "@/data/clinicData";
import AppointmentModal from "./AppointmentModal";

export default function MobileStickyBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappUrl = `https://wa.me/91${clinicInfo.phoneRaw.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello Kedia Dental Care, I would like to inquire about a dental appointment."
  )}`;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2.5 px-4">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          {/* Direct Phone Call */}
          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 px-3 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 active:scale-95 touch-manipulation min-h-[48px]"
            aria-label="Call Clinic"
          >
            <Phone className="w-4 h-4 text-brand-primary shrink-0" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Quick Chat */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-2.5 px-3 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-colors border border-emerald-200 active:scale-95 touch-manipulation min-h-[48px]"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>WhatsApp</span>
          </a>

          {/* Appointment Trigger */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-[1.4] bg-brand-primary hover:bg-brand-primaryDark text-white py-2.5 px-3 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-brand-primary/25 active:scale-95 touch-manipulation min-h-[48px]"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Book Visit</span>
          </button>
        </div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
