"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Phone } from "lucide-react";
import { clinicInfo } from "@/data/clinicData";

interface Slide {
  id: string;
  image: string;
  alt: string;
  tag: string;
  headline: string;
  subline?: string;
  objectPosition?: string;
  accentColor?: string;
}

const slides: Slide[] = [
  {
    id: "team",
    image: "/images/clinic_team_seated.jpg",
    alt: "Dr. Shiv Dayal Kedia and expert dental team specialists at Kedia Dental Care",
    tag: "Meet Our Specialists",
    headline: "Expert Team. Gentle Hands.",
    subline: "22+ years of trusted dental care under one roof.",
    objectPosition: "center 28%",
    accentColor: "from-violet-950/70",
  },
  {
    id: "reception",
    image: "/images/clinic_reception.jpg",
    alt: "Kedia Dental Care Modern Reception and Lounge at Shuvam Towers Forest Park",
    tag: "Shuvam Towers · Forest Park",
    headline: "A Warm Welcome, Every Visit",
    subline: "Spacious, anxiety-free lounge designed for your comfort.",
    objectPosition: "center 60%",
    accentColor: "from-slate-950/70",
  },
  {
    id: "treatment",
    image: "/images/clinic_treatment.jpg",
    alt: "Dr. Shiv Dayal Kedia performing painless micro-precision dental treatment",
    tag: "Micro-Precision Dentistry",
    headline: "Painless. Precise. Personal.",
    subline: "Advanced micro-laser technology for a fearless experience.",
    objectPosition: "center 45%",
    accentColor: "from-indigo-950/70",
  },
  {
    id: "corridor",
    image: "/images/clinic_corridor.jpg",
    alt: "Sterile glass dental operatories and modern chairs at Kedia Dental Care",
    tag: "Hospital-Grade Sterility",
    headline: "100% Sterile. Fully Transparent.",
    subline: "Glass-panel operatories with zero-compromise infection control.",
    objectPosition: "center 42%",
    accentColor: "from-slate-950/70",
  },
  {
    id: "building",
    image: "/images/clinic_building.jpg",
    alt: "Kedia Dental Care at Shuvam Towers, 1294 Forest Park, Bhubaneswar",
    tag: "Forest Park · Landmark Facility",
    headline: "Best Dental Clinic in Bhubaneswar",
    subline: "Plot 1294, Shuvam Towers, Forest Park — with dedicated parking.",
    objectPosition: "center 38%",
    accentColor: "from-slate-950/70",
  },
];

const AUTOPLAY_DELAY = 5500;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === current) return;
      setPrevIdx(current);
      setCurrent(index);
      setProgressKey((k) => k + 1);
      setTimeout(() => setPrevIdx(null), 900);
    },
    [current]
  );

  const goNext = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    slides.forEach((s) => {
      if (typeof window !== "undefined") {
        const img = new window.Image();
        img.src = s.image;
      }
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(goNext, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [goNext, isPaused, progressKey]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const d = touchStartX.current - touchEndX.current;
    if (d > 50) goNext();
    else if (d < -50) goPrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slide = slides[current];
  const prevSlide = prevIdx !== null ? slides[prevIdx] : null;

  return (
    <section
      className="hero-slider relative w-full overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Kedia Dental Care Hero Slideshow"
    >
      {/* OUTGOING SLIDE */}
      {prevSlide && (
        <div key={`out-${prevIdx}`} className="absolute inset-0 hero-slide-out">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={prevSlide.image}
            alt={prevSlide.alt}
            className="hero-img absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: prevSlide.objectPosition || "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-r ${prevSlide.accentColor ?? "from-slate-950/60"} via-transparent to-transparent`} />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-transparent to-transparent" />
        </div>
      )}

      {/* INCOMING SLIDE with Ken Burns */}
      <div key={`in-${current}`} className="absolute inset-0 hero-slide-in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.image}
          alt={slide.alt}
          className="hero-img hero-ken-burns absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: slide.objectPosition || "center center" }}
          fetchPriority={current === 0 ? "high" : "auto"}
        />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
        {/* Side accent tint */}
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.accentColor ?? "from-slate-950/60"} via-transparent to-transparent`} />
        {/* Top darkening */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-transparent to-transparent" />
        {/* Purple shimmer line */}
        <div className="hero-shimmer-line absolute bottom-0 left-0 right-0 h-[2px] z-10" />
      </div>

      {/* BOTTOM TEXT */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-14 sm:pb-16 md:pb-14">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3">
            <span
              key={`tag-${current}`}
              className="hero-anim-tag inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse shrink-0" />
              {slide.tag}
            </span>
            <h1
              key={`hl-${current}`}
              className="hero-anim-hl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight tracking-tight drop-shadow-xl"
            >
              {slide.headline}
            </h1>
            {slide.subline && (
              <p key={`sub-${current}`} className="hero-anim-sub text-white/65 text-sm sm:text-base leading-snug max-w-lg">
                {slide.subline}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 hero-anim-cta">
              <Link
                href="/contact"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-brand-primary/40 flex items-center gap-1.5 hover:scale-[1.03] active:scale-[0.97] touch-manipulation min-h-[42px]"
              >
                Book Appointment
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all border border-white/25 backdrop-blur-sm flex items-center gap-1.5 active:scale-[0.97] touch-manipulation min-h-[42px]"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                {clinicInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="absolute top-4 left-4 sm:left-6 md:left-8 lg:left-10 z-30 hidden md:flex items-center gap-0 px-1 py-2.5 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/10 text-white shadow-lg">
        {[
          { value: clinicInfo.stats.yearsExperience, label: "Years" },
          { value: clinicInfo.stats.happyPatients, label: "Patients" },
          { value: "4.9★", label: "Google" },
        ].map((s, idx) => (
          <div key={idx} className={`text-center px-3.5 ${idx < 2 ? "border-r border-white/10" : ""}`}>
            <p className="text-sm font-bold font-heading leading-none">{s.value}</p>
            <p className="text-[9px] text-slate-400 font-medium mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* SLIDE COUNTER */}
      <div className="absolute top-4 right-4 md:right-6 z-30 hidden md:flex items-center gap-1.5 text-white/50 text-xs font-mono font-bold">
        <span className="text-white text-sm">{String(current + 1).padStart(2, "0")}</span>
        <span className="text-white/30">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* ARROWS */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-brand-primary border border-white/15 text-white items-center justify-center transition-all duration-200 backdrop-blur-sm hover:scale-110 hover:shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-brand-primary border border-white/15 text-white items-center justify-center transition-all duration-200 backdrop-blur-sm hover:scale-110 hover:shadow-lg"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`relative rounded-full transition-all duration-300 overflow-hidden ${
              i === current ? "w-8 h-1.5 bg-white/25" : "w-1.5 h-1.5 bg-white/35 hover:bg-white/65"
            }`}
          >
            {i === current && !isPaused && (
              <span key={progressKey} className="absolute inset-0 origin-left bg-white rounded-full hero-progress-bar" />
            )}
          </button>
        ))}
      </div>

      <style>{`
        .hero-slider {
          aspect-ratio: 16 / 7;
          min-height: 380px;
          max-height: 620px;
        }
        @media (max-width: 639px) {
          .hero-slider { aspect-ratio: 4 / 3; min-height: 320px; max-height: 500px; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .hero-slider { aspect-ratio: 16 / 8; min-height: 360px; max-height: 540px; }
        }
        .hero-img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: auto;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        @keyframes kenBurns {
          from { transform: scale(1) translateZ(0); }
          to   { transform: scale(1.065) translateZ(0); }
        }
        .hero-ken-burns {
          animation: kenBurns 6300ms ease-out forwards;
          will-change: transform;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: scale(1.018); }
          to   { opacity: 1; transform: scale(1); }
        }
        .hero-slide-in {
          animation: slideIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: opacity, transform;
        }
        @keyframes slideOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        .hero-slide-out {
          animation: slideOut 0.65s ease forwards;
          will-change: opacity;
        }
        @keyframes shimmerLine {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .hero-shimmer-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(139,92,246,0.5) 35%,
            rgba(167,139,250,0.95) 50%,
            rgba(139,92,246,0.5) 65%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmerLine 3.5s linear infinite;
        }
        @keyframes heroAnimTag {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroAnimHl {
          from { opacity: 0; transform: translateX(-22px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroAnimSub {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 0.65; transform: translateY(0); }
        }
        @keyframes heroAnimCta {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroProgress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .hero-anim-tag { animation: heroAnimTag 0.5s cubic-bezier(0.22, 1, 0.36, 1) both 0.25s; }
        .hero-anim-hl  { animation: heroAnimHl  0.55s cubic-bezier(0.22, 1, 0.36, 1) both 0.38s; }
        .hero-anim-sub { animation: heroAnimSub 0.5s cubic-bezier(0.22, 1, 0.36, 1) both 0.50s; }
        .hero-anim-cta { animation: heroAnimCta 0.5s cubic-bezier(0.22, 1, 0.36, 1) both 0.60s; }
        .hero-progress-bar { animation: heroProgress 5500ms linear both; }
      `}</style>
    </section>
  );
}
