import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Star, ShieldCheck, Clock, Award, Phone, CheckCircle2,
  HeartPulse, Car, Accessibility, CreditCard, Coffee, Sparkles, UserCheck, AlertCircle, FileText,
  Scan, Zap, Monitor, Armchair, Heart, Layers, Smile, Sun, Stethoscope, ExternalLink
} from "lucide-react";
import { clinicInfo, treatmentsData, testimonials, teamMembers } from "@/data/clinicData";
import JsonLd from "@/components/JsonLd";
import ClinicGallery from "@/components/ClinicGallery";

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
  const inHouseDoctors = teamMembers.slice(1); // Dr. Priyanka (Left), Dr. Swetali (Middle), Dr. Ayushi (Right)

  return (
    <>
      <JsonLd />

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-white text-slate-900 border-b border-purple-100/60">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-8">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-brand-primary border border-purple-200 text-sm md:text-base font-bold">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Est. 2004 • 22+ Years of Clinical Excellence in Bhubaneswar</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.15] sm:leading-[1.12] text-slate-900">
              Best Dental Clinic in Bhubaneswar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-700 to-brand-primaryLight">
                Serving Patients of All Ages
              </span>
            </h1>

            {/* Brand Quote & Core Messaging */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed italic border-l-4 border-brand-primary pl-4 py-1 font-medium">
              "{clinicInfo.brandMessage}"
            </p>

            <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Founded by <strong className="text-slate-900">Dr. Shiv Dayal Kedia</strong>, Kedia Dental Care combines gentle micro-dentistry, fully automated chairs, 3D intraoral scanners, and modern laser technology for completely stress-free and painless visits.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold transition-all shadow-xl shadow-brand-primary/25 flex items-center justify-center gap-2 text-base md:text-lg hover:scale-[1.02] touch-manipulation min-h-[48px]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="bg-purple-50 hover:bg-purple-100 text-brand-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold transition-all border border-purple-200 flex items-center justify-center gap-2 text-base md:text-lg touch-manipulation min-h-[48px]"
              >
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Call {clinicInfo.phone}</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-200/80">
              <div className="bg-white/60 p-3 sm:p-0 rounded-xl sm:bg-transparent">
                <p className="text-2xl sm:text-3xl font-bold text-brand-primary font-heading">{clinicInfo.stats.yearsExperience}</p>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-0.5">Clinical Experience</p>
              </div>
              <div className="bg-white/60 p-3 sm:p-0 rounded-xl sm:bg-transparent">
                <p className="text-2xl sm:text-3xl font-bold text-brand-primary font-heading">{clinicInfo.stats.happyPatients}</p>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-0.5">Happy Smiles Restored</p>
              </div>
              <div className="bg-white/60 p-3 sm:p-0 rounded-xl sm:bg-transparent">
                <p className="text-2xl sm:text-3xl font-bold text-brand-primary font-heading">{clinicInfo.stats.successfulImplants}</p>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-0.5">Implants Completed</p>
              </div>
              <div className="bg-white/60 p-3 sm:p-0 rounded-xl sm:bg-transparent">
                <p className="text-2xl sm:text-3xl font-bold text-brand-primary font-heading">100%</p>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-0.5">Sterilized & Hygienic</p>
              </div>
            </div>
          </div>

          {/* Hero Image Container */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-purple-900/10 group">
              <Image
                src="/images/clinic_hero.webp"
                alt="Kedia Dental Care Modern Clinic Interior in Bhubaneswar"
                width={600}
                height={600}
                className="w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-lg text-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">Forest Park, Bhubaneswar</h4>
                    <p className="text-[11px] sm:text-xs text-slate-600">2nd Floor, Shuvam Towers (Near Sishu Bhawan Road)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Precision Dentistry & Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Minimally Invasive Care
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-3 mb-4">
              Precision Dentistry Powered by Modern Infrastructure
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              We invest in world-class equipment to ensure your treatments are faster, highly precise, transparent, and completely comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicInfo.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-primary flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors shadow-sm">
                    {idx === 0 && <Armchair className="w-6 h-6" />}
                    {idx === 1 && <Scan className="w-6 h-6" />}
                    {idx === 2 && <Monitor className="w-6 h-6" />}
                    {idx === 3 && <Zap className="w-6 h-6" />}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{tech.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{tech.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-200/60">
                  <p className="text-xs font-semibold text-brand-primary">{tech.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentic Clinic Gallery & Virtual Tour */}
      <ClinicGallery />

      {/* Meet Founder & Specialists Feature */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <Image
                  src="/images/clinic_team.webp"
                  alt="Dr. Shiv Dayal Kedia & In-House Dental Specialists at Kedia Dental Care Bhubaneswar"
                  width={1024}
                  height={688}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-800 text-white">
                  <h3 className="font-bold text-lg font-heading">{founder.name} & Clinical Team</h3>
                  <p className="text-xs text-purple-200 mt-0.5">Specialists in Endodontics, Implants, Orthodontics & Restorative Care</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" /> Compassionate Dental Team
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-tight">
                The Heart Behind the Clinic: An expert Who Actually Listens
              </h2>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {founder.bio}
              </p>

              <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-4">
                <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm md:text-base">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  Our Commitment to Every Patient:
                </h4>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block sm:inline font-semibold">Zero Guesswork — You See Exactly What We See:</strong>{" "}
                      <span>We don’t expect you to just take our word for it. Before picking up an instrument, we pull up your crystal-clear X-rays and scans on a large screen, explaining everything so you stay fully in control of your health.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block sm:inline font-semibold">The End of Financial Surprises (Transparent Costs):</strong>{" "}
                      <span>You receive a clear, written, easy-to-understand estimate before any treatment begins. No sudden upgrades, no hidden fees—just honest and upfront pricing.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block sm:inline font-semibold">Redefining Comfort (Our Painless Guarantee):</strong>{" "}
                      <span>Fear of pain shouldn’t stand between you and a healthy life. Combining advanced techniques with modern micro-laser technology, we ensure your visit is remarkably gentle and comfortable from start to finish.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* In-House Doctors Showcase (Only name on photo) */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-heading text-slate-900">In-House Dental Specialists</h3>
              <p className="text-slate-600 text-sm mt-1">Dedicated specialists providing compassionate, gentle care.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {inHouseDoctors.map((doc, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <h4 className="font-bold text-xl font-heading">{doc.name}</h4>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-wider">{doc.title}</p>
                    <p className="text-xs font-semibold text-slate-700">{doc.specialty} • {doc.qualifications}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-md"
              >
                Meet All Doctors & Consultants <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Grid of Popular Core Treatments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Full Spectrum Care</span>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mt-1 mb-2">Our Specialized Dental Treatments</h2>
              <p className="text-slate-600 text-sm">Painless procedures executed with micro-precision in Bhubaneswar.</p>
            </div>
            <Link href="/treatments" className="text-brand-primary font-bold hover:text-brand-primaryDark flex items-center gap-1.5 text-sm">
              Explore All 10 Treatments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTreatments.map((treatment) => (
              <Link
                key={treatment.id}
                href={`/treatments/${treatment.slug}`}
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-brand-primary transition-all duration-300 border border-slate-200/80 hover:border-transparent flex flex-col justify-between hover:shadow-2xl hover:shadow-brand-primary/20"
              >
                <div>
                  <div className="w-12 h-12 bg-purple-100 text-brand-primary group-hover:text-brand-primary group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 font-bold text-lg transition-colors shadow-sm">
                    {treatment.title.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">{treatment.title}</h3>
                  <p className="text-xs font-semibold text-brand-primary group-hover:text-purple-200 mb-3 transition-colors">{treatment.subtitle}</p>
                  <p className="text-sm text-slate-600 group-hover:text-purple-50 transition-colors leading-relaxed mb-6">
                    {treatment.shortDescription}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-primary group-hover:text-white transition-colors">
                  Learn procedure details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Comfort & Amenities */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-3">Designed for Your Comfort & Convenience</h2>
            <p className="text-slate-600">We take care of every small detail so your visit is hassle-free from start to finish.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicInfo.amenities.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-primary/50 transition-all hover:shadow-md flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-brand-primary flex items-center justify-center shrink-0">
                  {idx === 0 && <Accessibility className="w-6 h-6" />}
                  {idx === 1 && <Car className="w-6 h-6" />}
                  {idx === 2 && <CreditCard className="w-6 h-6" />}
                  {idx === 3 && <Coffee className="w-6 h-6" />}
                  {idx === 4 && <HeartPulse className="w-6 h-6" />}
                  {idx === 5 && <FileText className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="py-20 bg-white" id="reviews">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
              <GoogleGIcon className="w-4 h-4" />
              <span>Google Business Verified Reviews</span>
              <span className="text-amber-500 font-bold ml-1">★ {clinicInfo.googleRating} / 5</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">What Our Patients Say</h2>
            <p className="text-slate-600 text-sm md:text-base">
              Real experiences from patients treated at Shuvam Towers, Forest Park.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between relative hover:shadow-md transition">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-purple-100 text-brand-primary rounded-full">
                      {t.treatment}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm md:text-base italic leading-relaxed">
                    "{t.review}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified
                      </span>
                    </div>
                    <p className="text-slate-500 text-[11px] mt-0.5">{t.location}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <span className="text-slate-400 text-[11px]">{t.date}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-600 font-medium">
                      <GoogleGIcon className="w-3 h-3" /> Google Review
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Google Reviews Call To Action */}
          <div className="mt-14 bg-gradient-to-r from-purple-50 via-slate-50 to-purple-50 p-8 rounded-3xl border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                <GoogleGIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Rated {clinicInfo.googleRating} Stars on Google Maps</h3>
                <p className="text-slate-600 text-xs sm:text-sm">Explore all verified reviews or share your experience with Dr. Shiv Dayal Kedia & Team.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={clinicInfo.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-primary text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-brand-secondary transition shadow-sm"
              >
                <span>Read All Google Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={clinicInfo.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 border border-slate-300 rounded-full text-xs sm:text-sm font-semibold hover:bg-slate-50 transition"
              >
                <span>Write a Review</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50 text-slate-900 border-t border-purple-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">
            Ready for a Healthy, Confident Smile?
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Call us directly or send a message. Visit our new location at 2nd Floor, Shuvam Towers, Forest Park, Bhubaneswar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 py-4 rounded-xl font-bold transition-all text-base md:text-lg shadow-xl shadow-brand-primary/25"
            >
              Contact Us Today
            </Link>
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="bg-white hover:bg-purple-50 text-brand-primary px-8 py-4 rounded-xl font-bold transition-all text-base md:text-lg border border-purple-200 shadow-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-brand-primary" />
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
