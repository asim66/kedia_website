import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { teamMembers, visitingConsultants, clinicInfo } from "@/data/clinicData";
import { Award, CheckCircle2, HeartPulse, ShieldCheck, Sparkles, UserCheck, Phone, Stethoscope } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ClinicGallery from "@/components/ClinicGallery";

export const metadata: Metadata = {
  title: "About Us | Dr. Shiv Dayal Kedia & Team",
  description: "Learn about Kedia Dental Care's 22+ years of clinical excellence, Founder Dr. Shiv Dayal Kedia, in-house specialists, and visiting consultants in Bhubaneswar.",
  alternates: {
    canonical: "https://kediadentalcare.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const founder = teamMembers[0];

  return (
    <>
      <JsonLd />
      
      {/* Page Header */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-purple-50/60 via-white to-white text-slate-900 border-b border-purple-100/60 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 md:px-6 relative z-10 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-brand-primary border border-purple-200 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Established 2004 • Forest Park, Bhubaneswar
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900">About Kedia Dental Care</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
            For over two decades, our clinic has been dedicated to preserving natural smiles through gentle micro-dentistry, modern technology, and genuine patient empathy.
          </p>
        </div>
      </section>

      {/* Brand Message Banner */}
      <section className="py-8 sm:py-12 bg-purple-50/80 border-b border-purple-100 text-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-2">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-primary">Our Core Promise</span>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold italic text-slate-900 px-2">
            "{clinicInfo.brandMessage}"
          </blockquote>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 relative bg-slate-900">
                <Image 
                  src="/images/dr_kedia_office.webp"
                  alt={founder.name}
                  width={1024}
                  height={678}
                  unoptimized
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-heading">{founder.name}</h3>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-brand-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Chief Dental Surgeon & Founder
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900">{founder.name}</h2>
              <p className="text-xs sm:text-sm font-bold text-brand-primary uppercase tracking-wider">{founder.title} • {founder.qualifications}</p>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed pt-1">
                {founder.bio}
              </p>
              
              <div className="p-4 sm:p-6 rounded-2xl bg-purple-50/60 border border-purple-100">
                <h4 className="font-bold text-brand-primary mb-1.5 flex items-center gap-2 text-sm sm:text-base">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  Painless Micro-Dentistry Focus
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  Dr. Kedia believes that fear of pain should never keep anyone from seeking timely dental treatment. By combining digital 3D intraoral scanners with diode lasers and micro-rotary instruments, procedures are made painless and highly conservative.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Meet Our Experts Section (Multidisciplinary Clinical Department Showcase) */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-10 sm:space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-purple-100/70 px-3.5 py-1 rounded-full border border-purple-200">
              Multidisciplinary Dental Board
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight">
              Meet Our Dental Specialists & Clinical Wings
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              At Kedia Dental Care, all treatments are executed under the leadership of Founder & Chief Dental Surgeon Dr. Shiv Dayal Kedia, supported by a multidisciplinary team of specialized dental surgeons and senior visiting consultants.
            </p>
          </div>

          {/* Master 4K Clinical Team Showcase Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              <div className="lg:col-span-7 relative h-[220px] sm:h-[340px] lg:h-[480px] w-full bg-slate-950 overflow-hidden">
                <Image
                  src="/images/clinic_team_seated.webp"
                  alt="Kedia Dental Care Full Clinical Team & Specialists at Shuvam Towers"
                  fill
                  unoptimized
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold border border-white/20">
                    ★ In-House Clinical Faculty
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-5 sm:p-8 lg:p-12 space-y-5 sm:space-y-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-primary">
                    Since 2004 · Forest Park, Bhubaneswar
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-slate-900 leading-snug">
                    Comprehensive Family & Micro-Precision Dental Care
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                    Every diagnosis and treatment plan is reviewed collaboratively. Whether you require a single conservative filling or a complex full-mouth implant restoration, you receive focused, gentle, and ethical care.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-2 border-t border-slate-100">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <p className="text-lg sm:text-xl font-bold font-heading text-brand-primary">22+ Years</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Clinical Track Record</p>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <p className="text-lg sm:text-xl font-bold font-heading text-brand-primary">18,000+</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Patients Treated</p>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <p className="text-lg sm:text-xl font-bold font-heading text-brand-primary">100%</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Sterile Operatories</p>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                    <p className="text-lg sm:text-xl font-bold font-heading text-brand-primary">4.9★</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Google Rating</p>
                  </div>
                </div>

                <div className="pt-1 sm:pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-brand-primary/25 hover:scale-[1.02]"
                  >
                    Schedule a Consultation <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* In-House Dental Surgeons */}
          <div className="space-y-6 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/80 text-brand-primary text-xs font-bold uppercase tracking-wider border border-purple-200">
                <Sparkles className="w-3.5 h-3.5" /> A New Chapter of Excellence
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900">
                In-House Dental Surgeons
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Meet our resident clinical team and new generation BDS clinicians — present daily to deliver comfortable, thoughtful, and patient-centred dental care with a shared focus on clinical excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
              {teamMembers.slice(1).map((doc, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-brand-primary/40 transition-all duration-300 overflow-hidden flex flex-col last:col-span-2 sm:last:col-span-1 max-w-[280px] mx-auto w-full sm:max-w-none"
                >
                  {/* Portrait */}
                  <div className="relative h-40 sm:h-48 lg:h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      style={{ objectPosition: doc.objectPosition ?? "top" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    {/* Experience / Clinician badge */}
                    <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5">
                      <span className="px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-brand-primary text-[9px] sm:text-[10px] font-bold border border-purple-100 shadow-xs whitespace-nowrap">
                        {doc.experienceYears ? `${doc.experienceYears} Yrs Exp` : "BDS Clinician"}
                      </span>
                    </div>
                    {/* Name overlay */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3.5 sm:right-3.5 text-white">
                      <h4 className="font-bold text-xs sm:text-base font-heading leading-tight line-clamp-1">{doc.name}</h4>
                      <p className="text-purple-300 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{doc.qualifications}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3 sm:p-4 flex flex-col gap-1.5 sm:gap-2.5 flex-1">
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-bold text-brand-primary uppercase tracking-wider line-clamp-1">{doc.title}</p>
                      <p className="text-[11px] sm:text-xs font-semibold text-slate-700 mt-0.5 line-clamp-1">{doc.specialty}</p>
                    </div>
                    <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed flex-1 line-clamp-3 sm:line-clamp-none">{doc.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Clinical Department Wings */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
                Specialized Clinical Departments
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Advanced dental subspecialties operating under strict hospital-grade sterilization protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {[
                {
                  title: "Endodontics & Restorative Wing",
                  subtitle: "Root Canal & Natural Tooth Preservation",
                  doctorScope: "Micro-Endodontic Specialist Team",
                  desc: "Preserving natural teeth using surgical magnification loupes, electronic apex locators, and painless single-sitting root canal protocols.",
                  services: ["Single-Sitting RCT", "Laser Canal Disinfection", "Composite Tooth Restorations", "Re-RCT"],
                  badge: "Tooth Preservation",
                },
                {
                  title: "Implantology & Full-Mouth Rehab",
                  subtitle: "Permanent Tooth Replacement",
                  doctorScope: "Chief Surgeon & Implant Panel",
                  desc: "Permanent tooth replacement using globally certified titanium implants (Osstem, Nobel Biocare) and custom CAD/CAM zirconia prosthetics.",
                  services: ["Single & Multiple Implants", "All-on-4 / All-on-6", "Bone Grafting & Sinus Lift", "Zirconia Bridges"],
                  badge: "Permanent Teeth",
                },
                {
                  title: "Orthodontics & Clear Aligners",
                  subtitle: "Bite Correction & Smile Alignment",
                  doctorScope: "Visiting Consultant Orthodontist",
                  desc: "Correcting misaligned teeth and bite discrepancies for teens and adults with digital clear aligners and ceramic/metal braces.",
                  services: ["Invisible Clear Aligners", "Ceramic & Metal Braces", "Retainers & Habit Correction", "Bite Balancing"],
                  badge: "Straight Teeth",
                },
                {
                  title: "Laser Dentistry & Periodontics",
                  subtitle: "Bloodless Gum Care & Contouring",
                  doctorScope: "Periodontal & Laser Surgery Faculty",
                  desc: "Painless diode laser gum therapy for deep pocket sterilization, gum depigmentation, and smile makeover contouring without scalpels.",
                  services: ["Laser Gum Depigmentation", "Flapless Pocket Sterilization", "Gingival Contouring", "Deep Ultrasonic Scaling"],
                  badge: "Painless & Bloodless",
                },
                {
                  title: "Pediatric & Preventive Dentistry",
                  subtitle: "Child-Friendly Dental Care",
                  doctorScope: "Pediatric Dental Care Team",
                  desc: "Compassionate, gentle dental care designed to keep children comfortable while safeguarding teeth with fluoride and sealants.",
                  services: ["Fluoride Application", "Pit & Fissure Sealants", "Painless Milk Tooth Care", "Space Maintainers"],
                  badge: "Anxiety-Free Kids",
                },
                {
                  title: "Oral & Maxillofacial Surgery",
                  subtitle: "Wisdom Tooth & Surgical Care",
                  doctorScope: "Senior Oral & Maxillofacial Panel",
                  desc: "Atraumatic surgical extraction of impacted wisdom teeth, cyst enucleation, and pre-prosthetic bone contouring with rapid recovery.",
                  services: ["Impacted Wisdom Tooth Surgery", "Atraumatic Extractions", "Alveoloplasty", "Surgical Frenectomy"],
                  badge: "Surgical Precision",
                },
              ].map((dept, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-brand-primary/40 transition-all duration-300 flex flex-col justify-between space-y-4 sm:space-y-6"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-purple-100 text-brand-primary text-[11px] sm:text-xs font-bold">
                        {dept.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono font-semibold whitespace-nowrap shrink-0">0{idx + 1}</span>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-heading font-bold text-slate-900 leading-snug">
                        {dept.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs font-bold text-brand-primary mt-0.5">
                        {dept.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dept.desc}
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-slate-100">
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Key Procedures:
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {dept.services.map((svc, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-[10px] sm:text-[11px] font-medium"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visiting Senior Consultant Faculty */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-brand-primary" /> Visiting Senior Consultant Faculty
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {visitingConsultants.map((consultant, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2 sm:space-y-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 text-purple-300 flex items-center justify-center font-bold text-xs sm:text-sm">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">{consultant.specialty}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{consultant.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Authentic Clinic Gallery & Premises Tour */}
      <ClinicGallery />

      {/* Sterilization & Infection Control */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand-primary" /> Hospital-Grade Hygiene
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">Cutting-Edge Sterilization Standards</h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                We strictly adhere to hospital-grade sterilization protocols to guarantee 100% spore-free infection control for every single patient visit.
              </p>
              
              <div className="p-4 sm:p-6 rounded-2xl bg-slate-950 text-white space-y-2 sm:space-y-3">
                <h4 className="font-bold text-base sm:text-lg text-purple-300">Sterilization Assurance</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every instrument set is sealed in medical-grade pouches and opened directly in front of you prior to treatment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-3 sm:space-y-4">
                {clinicInfo.sterilizationProtocol.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center shrink-0 text-xs">
                      {idx + 1}
                    </div>
                    <p className="text-slate-800 font-medium text-xs md:text-sm pt-0.5 sm:pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading">Have Questions for Our Specialists?</h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Call our reception at{" "}
              <a
                href={clinicInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-white underline transition-colors"
              >
                Shuvam Towers, Forest Park, Bhubaneswar
              </a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a 
              href={`tel:${clinicInfo.phoneRaw}`}
              className="bg-brand-primary hover:bg-brand-primaryLight text-white px-6 py-3 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md"
            >
              <Phone className="w-4 h-4" /> {clinicInfo.phone}
            </a>
            <Link 
              href="/contact"
              className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-xl font-bold transition-colors text-xs sm:text-sm inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
