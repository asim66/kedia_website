import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock, Heart, ShieldCheck } from "lucide-react";
import { clinicInfo, treatmentsData } from "@/data/clinicData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-700 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Brand & Value Proposition Banner */}
        <div className="mb-12 pb-6 sm:pb-10 border-b border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-purple-50/60 p-5 sm:p-8 rounded-3xl border border-purple-100">
          <div className="lg:col-span-8 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Our Core Philosophy</span>
            <blockquote className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-slate-900 italic">
              "{clinicInfo.brandMessage}"
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600">
              Founder Dr. Shiv Dayal Kedia & Team • Est. {clinicInfo.establishedYear} • Forest Park, Bhubaneswar
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link 
              href="?booking=true"
              className="w-full sm:w-auto justify-center bg-brand-primary hover:bg-brand-primaryDark text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-primary/20 inline-flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-amber-300 fill-amber-300" /> Make an Appointment
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="h-11 w-auto overflow-hidden rounded-lg bg-brand-primary p-1 flex items-center shadow-md">
                <Image 
                  src="/images/logo.webp"
                  alt="Kedia Dental Care Official Logo"
                  width={220}
                  height={50}
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              {clinicInfo.tagline}
            </p>
            <div className="pt-2 text-xs sm:text-sm text-slate-600 space-y-1">
              <p><strong className="text-slate-900">Founder:</strong> Dr. Shiv Dayal Kedia</p>
              <p><strong className="text-slate-900">Clinical Experience:</strong> 22+ Years</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-heading font-bold text-base md:text-lg mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link href="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Dr. Kedia & Team</Link></li>
              <li><Link href="/treatments" className="hover:text-brand-primary transition-colors">All 10 Core Services</Link></li>
              <li><Link href="/best-dental-clinic-in-bhubaneswar" className="hover:text-brand-primary transition-colors">Best Dental Clinic in Bhubaneswar</Link></li>
              <li><Link href="/best-rootcanal-treatment-in-bhubaneswar" className="hover:text-brand-primary transition-colors">Root Canal Treatment in Bhubaneswar</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Core Services (10 Key Treatments) */}
          <div>
            <h3 className="text-slate-900 font-heading font-bold text-base md:text-lg mb-4">Key Treatments</h3>
            <ul className="grid grid-cols-1 gap-2 text-sm font-medium">
              {treatmentsData.map(treatment => (
                <li key={treatment.id}>
                  <Link href={`/treatments/${treatment.slug}`} className="hover:text-brand-primary transition-colors">
                    {treatment.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-slate-900 font-heading font-bold text-base md:text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-slate-700">{clinicInfo.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <a href={`tel:${clinicInfo.phoneRaw}`} className="hover:text-brand-primary transition-colors font-bold text-slate-900">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="hover:text-brand-primary transition-colors truncate text-slate-700">
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm text-slate-600">
                  <p>{clinicInfo.hours.weekdays}</p>
                  <p>{clinicInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-500">
          <p>
            &copy; {currentYear} {clinicInfo.name}. All rights reserved. Shuvam Towers, Forest Park, Bhubaneswar.
          </p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1 text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-brand-primary" /> Hospital-Grade Sterilization
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
