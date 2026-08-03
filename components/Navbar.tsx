"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, Mail, Megaphone, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { clinicInfo, treatmentsData } from "@/data/clinicData";
import AppointmentModal from "./AppointmentModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Global Move Alert Bar */}
      <div className="bg-gradient-to-r from-brand-primaryDark via-brand-primary to-purple-900 text-white text-sm md:text-base py-2 px-4 shadow-md font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-left min-w-0">
            <span className="bg-amber-400 text-slate-900 font-bold px-2 py-0.5 rounded text-xs uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Megaphone className="w-3.5 h-3.5" /> New
            </span>
            <span className="truncate md:whitespace-normal font-medium block">
              {clinicInfo.announcement}
            </span>
          </div>
          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-colors border border-white/20"
          >
            <Phone className="w-3.5 h-3.5" /> {clinicInfo.phone}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-2.5 border-b border-slate-100"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">

          {/* Logo Image */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-10 md:h-12 w-auto overflow-hidden rounded-lg bg-brand-primary p-1 flex items-center shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/images/logo.webp"
                alt="Kedia Dental Care Official Logo"
                width={220}
                height={50}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className={`text-base font-bold transition-colors hover:text-brand-primary ${pathname === "/" ? "text-brand-primary" : "text-slate-700"}`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className={`text-base font-bold transition-colors hover:text-brand-primary ${pathname === "/about" ? "text-brand-primary" : "text-slate-700"}`}
                >
                  About Us
                </Link>
              </li>

              {/* Treatments with Dropdown Sub-menu */}
              <li
                className="relative py-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link
                    href="/treatments"
                    className={`text-base font-bold transition-colors hover:text-brand-primary flex items-center gap-1 ${pathname.startsWith("/treatments") ? "text-brand-primary" : "text-slate-700"}`}
                  >
                    Treatments
                  </Link>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-label="Toggle Treatments Submenu"
                    className="p-0.5 text-slate-500 hover:text-brand-primary transition-transform"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-brand-primary" : ""}`} />
                  </button>
                </div>

                {/* Sub-menu Dropdown Container */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 top-[calc(100%+12px)] w-[640px] bg-white rounded-3xl border border-purple-100 shadow-2xl shadow-purple-900/15 p-6 z-50 overflow-hidden"
                    >
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-brand-primary" />
                          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Our 10 Specialized Treatments</span>
                        </div>
                        <Link
                          href="/treatments"
                          onClick={() => setDropdownOpen(false)}
                          className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                        >
                          View All Services <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {treatmentsData.map((t) => {
                          const isActive = pathname === `/treatments/${t.slug}`;
                          return (
                            <Link
                              key={t.id}
                              href={`/treatments/${t.slug}`}
                              onClick={() => setDropdownOpen(false)}
                              className={`p-3 rounded-2xl transition-all duration-200 flex flex-col group ${isActive ? "bg-purple-50 border border-purple-200" : "hover:bg-purple-50/70 border border-transparent"
                                }`}
                            >
                              <span className={`text-base font-bold transition-colors group-hover:text-brand-primary ${isActive ? "text-brand-primary" : "text-slate-800"}`}>
                                {t.title}
                              </span>
                              <span className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                {t.subtitle}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`text-base font-bold transition-colors hover:text-brand-primary ${pathname === "/contact" ? "text-brand-primary" : "text-slate-700"}`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-primary hover:bg-brand-primaryDark text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-brand-primary/25 flex items-center gap-2 hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              Make an Appointment
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-brand-primary min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg active:bg-slate-100 transition-colors touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 md:hidden flex flex-col gap-3 max-h-[85vh] overflow-y-auto"
          >
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold ${pathname === "/" ? "bg-purple-50 text-brand-primary" : "text-slate-800 hover:bg-slate-50"}`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold ${pathname === "/about" ? "bg-purple-50 text-brand-primary" : "text-slate-800 hover:bg-slate-50"}`}
                >
                  About Us
                </Link>
              </li>

              {/* Mobile Accordion Treatments Link */}
              <li>
                <div className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50">
                  <Link
                    href="/treatments"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-bold ${pathname.startsWith("/treatments") ? "text-brand-primary" : "text-slate-800"}`}
                  >
                    Treatments
                  </Link>
                  <button
                    onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                    className="p-1 text-slate-500 hover:text-brand-primary"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileTreatmentsOpen ? "rotate-180 text-brand-primary" : ""}`} />
                  </button>
                </div>

                {mobileTreatmentsOpen && (
                  <div className="ml-4 pl-3 border-l-2 border-purple-100 my-1 space-y-1">
                    <Link
                      href="/treatments"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-brand-primary bg-purple-50/80"
                    >
                      • All 10 Treatments Overview
                    </Link>
                    {treatmentsData.map((t) => (
                      <Link
                        key={t.id}
                        href={`/treatments/${t.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-xs font-semibold ${pathname === `/treatments/${t.slug}` ? "text-brand-primary font-bold bg-purple-50" : "text-slate-700 hover:bg-slate-50"
                          }`}
                      >
                        {t.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold ${pathname === "/contact" ? "bg-purple-50 text-brand-primary" : "text-slate-800 hover:bg-slate-50"}`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="h-px bg-slate-100 my-1" />

            <div className="flex flex-col gap-2 px-2 pb-2">
              <a href={`tel:${clinicInfo.phoneRaw}`} className="flex items-center gap-2.5 text-slate-700 font-bold py-2 text-sm">
                <Phone className="w-4 h-4 text-brand-primary" />
                {clinicInfo.phone}
              </a>
              <a href={`mailto:${clinicInfo.email}`} className="flex items-center gap-2.5 text-slate-600 font-medium text-xs truncate pb-2">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                {clinicInfo.email}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="bg-brand-primary text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Make an Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
