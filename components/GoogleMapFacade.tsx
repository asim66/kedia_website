"use client";

import { useState } from "react";
import { MapPin, Navigation, ExternalLink, Loader2 } from "lucide-react";
import { clinicInfo } from "@/data/clinicData";

interface GoogleMapFacadeProps {
  embedUrl: string;
  title?: string;
  className?: string;
}

export default function GoogleMapFacade({
  embedUrl,
  title = "Kedia Dental Care Location Map",
  className = "rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[240px] relative",
}: GoogleMapFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={className}>
      {isLoaded ? (
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="w-full h-full"
        />
      ) : (
        <div className="relative w-full h-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
          {/* Subtle stylized map grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#3c2a98_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/80" />

          {/* Map Content Facade */}
          <div className="relative z-10 space-y-3 max-w-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/70 border border-purple-600/50 text-purple-200 text-xs font-semibold shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Shuvam Towers · Forest Park</span>
            </div>

            <p className="text-white font-bold text-sm leading-tight drop-shadow-xs">
              Plot 1294, 2nd Floor, Forest Park, Bhubaneswar
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsLoaded(true)}
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-brand-primary/30 flex items-center gap-1.5 active:scale-95 touch-manipulation min-h-[38px]"
                aria-label="Load interactive Google Map"
              >
                <Navigation className="w-3.5 h-3.5" />
                Load Interactive Map
              </button>

              <a
                href={clinicInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/20 px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 active:scale-95 touch-manipulation min-h-[38px]"
              >
                Open in Maps <ExternalLink className="w-3 h-3 text-purple-300" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
