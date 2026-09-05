import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Stethoscope } from "lucide-react";
import { Doctor } from "@/data/clinicData";

interface DoctorTeamGridProps {
  doctors: Doctor[];
}

export default function DoctorTeamGrid({ doctors }: DoctorTeamGridProps) {
  return (
    <section id="specialists" className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 text-brand-primary border border-purple-100 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            In-House Clinical Specialists
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900">
            Meet Our Dental Specialists
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Our qualified in-house dental surgeons bring specialized expertise across pediatric care, orthodontics, endodontics, and restorative dentistry—delivering gentle, attentive care every single day.
          </p>
        </div>

        {/* 5-Doctor Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Doctor Portrait - 100% visible, zero text overlay over face */}
              <div className="relative h-60 sm:h-64 lg:h-64 w-full bg-slate-100 overflow-hidden shrink-0">
                <Image
                  src={doc.image}
                  alt={`${doc.name} - ${doc.title} at Kedia Dental Care`}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: doc.objectPosition || "top" }}
                />

                {/* Experience / Qualification Tag safely placed in corner */}
                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-brand-primary text-[10px] font-bold border border-purple-100 shadow-xs whitespace-nowrap">
                    {doc.experienceYears ? `${doc.experienceYears}+ Yrs Exp` : "BDS Clinician"}
                  </span>
                </div>
              </div>

              {/* Card Body with Name, Qualifications, Specialty & Condensed Bio */}
              <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 gap-2.5">
                <div className="space-y-1.5">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base font-heading text-slate-900 leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-[11px] text-brand-primary font-bold">
                      {doc.title} • {doc.qualifications}
                    </p>
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/60 line-clamp-1">
                    {doc.specialty}
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-4">
                    {doc.shortBio || doc.bio}
                  </p>
                </div>

                {/* Bottom Role & Consultation Indicator */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-500 group-hover:text-brand-primary transition-colors">
                  <span>Resident Faculty</span>
                  <span className="inline-flex items-center gap-0.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary">
                    <span>Care</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Multidisciplinary Team Callout Banner */}
        <div className="mt-8 sm:mt-10 bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-100 text-brand-primary flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base">
                Multidisciplinary Dental Board & Visiting Consultants
              </h4>
              <p className="text-slate-600 text-[11px] sm:text-xs">
                Our in-house faculty is supported by senior visiting specialists in Oral & Maxillofacial Surgery, Orthodontics, and Periodontics.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-xl text-xs font-bold transition shadow-xs"
            >
              <span>View Full Clinical Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
