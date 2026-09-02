"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Phone,
  Columns2,
  SlidersHorizontal
} from "lucide-react";
import { clinicalCases, clinicInfo } from "@/data/clinicData";

export default function BeforeAfterShowcase() {
  const selectedCase = clinicalCases[0];
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"slider" | "side-by-side">("slider");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-slate-50/80 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
        
        {/* Compact Section Header */}
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-100 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Clinical Transformation
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
            {selectedCase.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Actual patient result: Restoring missing teeth with a biocompatible, metal-free zirconia bridge.
          </p>

          {/* Compact View Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200 text-xs font-semibold shadow-xs mt-1">
            <button
              onClick={() => setViewMode("slider")}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all ${
                viewMode === "slider"
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <SlidersHorizontal className="w-3 h-3" />
              Slider
            </button>
            <button
              onClick={() => setViewMode("side-by-side")}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all ${
                viewMode === "side-by-side"
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Columns2 className="w-3 h-3" />
              Side-by-Side
            </button>
          </div>
        </div>

        {/* Compact Visual Showcase */}
        <div className="max-w-2xl mx-auto">
          {viewMode === "slider" ? (
            /* Compact Interactive Slider */
            <div className="space-y-3">
              <div 
                ref={containerRef}
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-950 select-none cursor-ew-resize touch-none"
                onPointerDown={(e) => {
                  setIsDragging(true);
                  handleMove(e.clientX);
                }}
                onPointerMove={handleMouseMove}
                onPointerUp={() => setIsDragging(false)}
                onPointerLeave={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER IMAGE (Base) */}
                <Image
                  src={selectedCase.afterImage}
                  alt={selectedCase.altAfter}
                  fill
                  unoptimized
                  priority
                  className="object-cover pointer-events-none"
                />

                {/* BEFORE IMAGE (Clipped) */}
                <div 
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{
                    clipPath: `inset(0 calc(100% - ${sliderPosition}%) 0 0)`,
                  }}
                >
                  <Image
                    src={selectedCase.beforeImage}
                    alt={selectedCase.altBefore}
                    fill
                    unoptimized
                    priority
                    className="object-cover pointer-events-none"
                  />
                </div>

                {/* Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.8)] pointer-events-none z-10"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-brand-primary font-bold shadow-lg border border-brand-primary flex items-center justify-center text-[10px] pointer-events-auto cursor-ew-resize">
                    ◀▶
                  </div>
                </div>

                {/* Badges */}
                <span className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm text-amber-300 text-[11px] font-bold border border-amber-500/30">
                  BEFORE
                </span>
                <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
                  AFTER
                </span>
              </div>

              {/* Slider Helper / Slider Range */}
              <div className="flex items-center justify-between text-[11px] text-slate-600 px-1">
                <span>← Missing Tooth Gap</span>
                <span className="font-semibold text-brand-primary">⇄ Drag slider to compare</span>
                <span>Restored Bridge →</span>
              </div>
            </div>
          ) : (
            /* Compact Side-by-Side Dual View */
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 relative shadow-xs">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={selectedCase.beforeImage}
                    alt={selectedCase.altBefore}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/85 text-amber-300 text-[10px] font-bold">
                    BEFORE
                  </span>
                </div>
                <div className="p-2.5 bg-white text-center">
                  <p className="text-[11px] font-semibold text-slate-700">Missing Tooth Space</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-brand-primary/40 bg-slate-950 relative shadow-xs">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={selectedCase.afterImage}
                    alt={selectedCase.altAfter}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-950/85 text-emerald-300 text-[10px] font-bold">
                    AFTER
                  </span>
                </div>
                <div className="p-2.5 bg-white text-center">
                  <p className="text-[11px] font-semibold text-brand-primary">Metal-Free Bridge Restored</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Concise Key Highlights & CTA Bar */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              100% Metal-Free
            </span>
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              2 Visits
            </span>
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              Natural Shade Match
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="flex-1 sm:flex-none bg-brand-primary hover:bg-brand-primaryDark text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Book Consult</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary" />
              <span>Call</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
