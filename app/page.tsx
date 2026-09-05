import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Star, ShieldCheck, Phone, CheckCircle2,
  HeartPulse, Car, Accessibility, CreditCard, Coffee, Sparkles, UserCheck, FileText,
  Scan, Zap, Monitor, Armchair, ExternalLink, Award
} from "lucide-react";
import { clinicInfo, treatmentsData, testimonials, teamMembers } from "@/data/clinicData";
import JsonLd from "@/components/JsonLd";
import ClinicGallery from "@/components/ClinicGallery";
import HeroSlider from "@/components/HeroSlider";
import DoctorTeamGrid from "@/components/DoctorTeamGrid";

export const metadata: Metadata = {
  title: "Kedia Dental Care | Best Dental Clinic in Bhubaneswar",
  description: "22+ Years of Clinical Excellence in Forest Park, Bhubaneswar. Comprehensive dental treatments including Single-Visit RCT, Dental Implants, Braces, and Laser Dentistry.",
  alternates: {
    canonical: "https://kediadentalcare.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function GoogleGIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export default function Home() {
  const popularTreatments = treatmentsData.slice(0, 6);
  const founder = teamMembers[0];
  const otherDoctors = teamMembers.slice(1);

  return (
    <>
      <JsonLd />

      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Precision Dentistry & Technology Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Modern Technology
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Precision Dentistry for Comfortable Care
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
              World-class digital scanners, soft-tissue lasers, and ergonomic operatories designed for gentle, highly accurate treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {clinicInfo.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-primary hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-purple-100 text-brand-primary flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors shadow-xs">
                    {idx === 0 && <Armchair className="w-5 h-5" />}
                    {idx === 1 && <Scan className="w-5 h-5" />}
                    {idx === 2 && <Monitor className="w-5 h-5" />}
                    {idx === 3 && <Zap className="w-5 h-5" />}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1.5">{tech.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{tech.description}</p>
                </div>
                <div className="pt-2.5 border-t border-slate-200/60">
                  <p className="text-[11px] font-semibold text-brand-primary">{tech.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentic Clinic Gallery & Virtual Tour */}
      <ClinicGallery />

      {/* Dr. Shiv Dayal Kedia - Spotlight Feature */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Dr. Kedia Visual Portrait Card */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white group max-w-md mx-auto lg:max-w-none">
                {/* Photo Area - Clean & unblocked */}
                <div className="relative h-[340px] sm:h-[400px] md:h-[430px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={founder.image}
                    alt={`${founder.name} - ${founder.title}`}
                    fill
                    unoptimized
                    priority
                    className="object-cover group-hover:scale-102 transition-transform duration-700"
                    style={{ objectPosition: "center 42%" }}
                  />

                  {/* Floating Experience Badge in top corner */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-primary text-xs font-bold border border-purple-100 shadow-md">
                      ★ 22+ Years Clinical Mastery
                    </span>
                  </div>
                </div>

                {/* Clean Details Bar Below Photo - No text covering the doctor's face */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg font-heading text-slate-900">{founder.name}</h3>
                    <p className="text-xs text-brand-primary font-bold">{founder.title} • {founder.qualifications}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Specialist: {founder.specialty}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-brand-primary text-xs font-bold shrink-0">
                    Forest Park
                  </span>
                </div>
              </div>
            </div>

            {/* Concise Clinical Story & Philosophy */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> Founder & Chief Dental Surgeon
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-tight">
                Gentle, Ethical & Precision Dentistry
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Founded by Dr. Shiv Dayal Kedia in 2004, Kedia Dental Care is built on patient-first ethics, genuine empathy, and master-level dental expertise. With specialized focus in single-visit root canals, laser dentistry, and dental implants, Dr. Kedia believes treatment should always be gentle, transparent, and pain-free.
              </p>

              {/* 3 Crisp Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs space-y-1">
                  <p className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    Zero Guesswork
                  </p>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Crystal-clear 3D scans shown on chairside screens before starting.
                  </p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs space-y-1">
                  <p className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    Transparent Costs
                  </p>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Upfront written estimates with zero hidden fees or surprise upgrades.
                  </p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-purple-100 shadow-xs space-y-1">
                  <p className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    Painless Care
                  </p>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Modern soft-tissue diode lasers and gentle micro-rotary instruments.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="bg-brand-primary hover:bg-brand-primaryDark text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-brand-primary/20 inline-flex items-center gap-1.5"
                >
                  <span>Book Consultation with Dr. Kedia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#specialists"
                  className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-1.5"
                >
                  <span>Meet Our Specialists</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Meet All In-House Dental Specialists Section */}
      <DoctorTeamGrid doctors={otherDoctors} />

      {/* Grid of Popular Core Treatments */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Full Spectrum Care</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-1">Specialized Dental Treatments</h2>
              <p className="text-slate-600 text-xs sm:text-sm">Painless procedures executed with digital micro-precision.</p>
            </div>
            <Link href="/treatments" className="text-brand-primary font-bold hover:text-brand-primaryDark flex items-center gap-1.5 text-xs sm:text-sm">
              Explore All 10 Treatments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {popularTreatments.map((treatment) => (
              <Link
                key={treatment.id}
                href={`/treatments/${treatment.slug}`}
                className="group p-5 sm:p-6 rounded-3xl bg-slate-50 hover:bg-brand-primary transition-all duration-300 border border-slate-200/80 hover:border-transparent flex flex-col justify-between hover:shadow-xl hover:shadow-brand-primary/20"
              >
                <div>
                  <div className="w-10 h-10 bg-purple-100 text-brand-primary group-hover:text-brand-primary group-hover:bg-white rounded-xl flex items-center justify-center mb-4 font-bold text-base transition-colors shadow-xs">
                    {treatment.title.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-1.5 transition-colors">{treatment.title}</h3>
                  <p className="text-xs font-semibold text-brand-primary group-hover:text-purple-200 mb-2.5 transition-colors">{treatment.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-600 group-hover:text-purple-50 transition-colors leading-relaxed line-clamp-2 mb-4">
                    {treatment.shortDescription}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-primary group-hover:text-white transition-colors">
                  Learn procedure details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Comfort & Amenities */}
      <section className="py-10 sm:py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">Designed for Patient Comfort</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Modern amenities to ensure your visit is seamless and stress-free.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {clinicInfo.amenities.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-primary/40 transition-all hover:shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-primary flex items-center justify-center shrink-0">
                  {idx === 0 && <Accessibility className="w-5 h-5" />}
                  {idx === 1 && <Car className="w-5 h-5" />}
                  {idx === 2 && <CreditCard className="w-5 h-5" />}
                  {idx === 3 && <Coffee className="w-5 h-5" />}
                  {idx === 4 && <HeartPulse className="w-5 h-5" />}
                  {idx === 5 && <FileText className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">{item.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white" id="reviews">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
              <GoogleGIcon className="w-3.5 h-3.5" />
              <span>Google Verified Reviews</span>
              <span className="text-amber-500 font-bold ml-1">★ {clinicInfo.googleRating} / 5</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900">What Our Patients Say</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Real patient feedback from our Forest Park clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between relative hover:shadow-md transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 bg-purple-100 text-brand-primary rounded-full">
                      {t.treatment}
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                    "{t.review}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-slate-900 text-xs">{t.name}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified
                      </span>
                    </div>
                    <p className="text-slate-500 text-[10px] sm:text-[11px] mt-0.5">{t.location}</p>
                  </div>
                  <div className="flex flex-col items-end gap-0.5 text-right">
                    <span className="text-slate-400 text-[10px] sm:text-[11px]">{t.date}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-600 font-medium">
                      <GoogleGIcon className="w-3 h-3" /> Google Review
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Google Reviews Call To Action */}
          <div className="mt-8 sm:mt-10 bg-gradient-to-r from-purple-50 via-slate-50 to-purple-50 p-6 sm:p-7 rounded-3xl border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
                <GoogleGIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Rated {clinicInfo.googleRating} Stars on Google Maps</h3>
                <p className="text-slate-600 text-xs">Explore patient reviews or share your feedback.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
              <a
                href={clinicInfo.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-primary text-white rounded-full text-xs font-semibold hover:bg-brand-secondary transition shadow-xs"
              >
                <span>Read Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={clinicInfo.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-full text-xs font-semibold hover:bg-slate-50 transition"
              >
                <span>Write a Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50 text-slate-900 border-t border-purple-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4 sm:space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900">
            Ready for a Healthy, Confident Smile?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Visit our modern facility at Shuvam Towers, Forest Park, Bhubaneswar or call to schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="bg-brand-primary hover:bg-brand-primaryDark text-white px-7 py-3.5 rounded-xl font-bold transition-all text-sm sm:text-base shadow-lg shadow-brand-primary/20"
            >
              Contact Us Today
            </Link>
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="bg-white hover:bg-purple-50 text-brand-primary px-7 py-3.5 rounded-xl font-bold transition-all text-sm sm:text-base border border-purple-200 shadow-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              {clinicInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
