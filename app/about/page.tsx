import Image from "next/image";
import Link from "next/link";
import { teamMembers, visitingConsultants, clinicInfo } from "@/data/clinicData";
import { Award, CheckCircle2, HeartPulse, ShieldCheck, Sparkles, UserCheck, Phone, Stethoscope } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ClinicGallery from "@/components/ClinicGallery";

export const metadata = {
  title: "About Us | Dr. Shiv Dayal Kedia & Team",
  description: "Learn about Kedia Dental Care's 22+ years of clinical excellence, Founder Dr. Shiv Dayal Kedia, in-house specialists, and visiting consultants in Bhubaneswar.",
};

export default function AboutPage() {
  const founder = teamMembers[0];
  const inHouseDoctors = teamMembers.slice(1); // Dr. Priyanka, Dr. Swetali Deo, Dr. Ayushi

  return (
    <>
      <JsonLd />
      
      {/* Page Header */}
      <section className="pt-16 pb-16 bg-gradient-to-b from-purple-50/60 via-white to-white text-slate-900 border-b border-purple-100/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-brand-primary border border-purple-200 text-sm font-bold uppercase tracking-wider">
            Established 2004 • Forest Park, Bhubaneswar
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">About Kedia Dental Care</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            For over two decades, our clinic has been dedicated to preserving natural smiles through gentle micro-dentistry, modern technology, and genuine patient empathy.
          </p>
        </div>
      </section>

      {/* Brand Message Banner */}
      <section className="py-12 bg-purple-50/80 border-b border-purple-100 text-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-2">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-primary">Our Core Promise</span>
          <blockquote className="text-2xl md:text-3xl font-heading font-semibold italic text-slate-900">
            "{clinicInfo.brandMessage}"
          </blockquote>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 relative bg-slate-900">
                <Image 
                  src="/images/dr_kedia_office.jpg"
                  alt={founder.name}
                  width={1024}
                  height={678}
                  unoptimized
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent text-white">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading">{founder.name}</h3>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-brand-primary text-sm font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" /> Chief Dental Surgeon & Founder
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">{founder.name}</h2>
              <p className="text-sm font-bold text-brand-primary uppercase tracking-wider">{founder.title} • {founder.qualifications}</p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed pt-2">
                {founder.bio}
              </p>
              
              <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100">
                <h4 className="font-bold text-brand-primary mb-2 flex items-center gap-2 text-base">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  Painless Micro-Dentistry Focus
                </h4>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  Dr. Kedia believes that fear of pain should never keep anyone from seeking timely dental treatment. By combining digital 3D intraoral scanners with diode lasers and micro-rotary instruments, procedures are made painless and highly conservative.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Meet Our Experts Section (In-House Specialists & Visiting Consultants) */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Multidisciplinary Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-3 mb-4">Meet Our Experts</h2>
            <p className="text-slate-600 text-base">
              Our team consists of dedicated in-house dental specialists and visiting senior consultants providing comprehensive care for all dental needs under one roof.
            </p>
          </div>

          {/* In-House Dental Specialists (Only name on photo) */}
          <div className="mb-16">
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-brand-primary" /> In-House Dental Specialists
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {inHouseDoctors.map((member, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <h4 className="font-bold text-xl font-heading">{member.name}</h4>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-wider">{member.title}</p>
                    <p className="text-xs font-semibold text-slate-800">{member.specialty} • {member.qualifications}</p>
                    {member.registrationNumber && (
                      <p className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 inline-flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" /> {member.registrationNumber}
                      </p>
                    )}
                    <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visiting Consultants */}
          <div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-brand-primary" /> Visiting Senior Consultants
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visitingConsultants.map((consultant, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-purple-300 flex items-center justify-center font-bold text-sm">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand-primary" /> Hospital-Grade Hygiene
              </div>
              <h2 className="text-3xl font-heading font-bold text-slate-900">Cutting-Edge Sterilization Standards</h2>
              <p className="text-slate-600 leading-relaxed">
                We strictly adhere to hospital-grade sterilization protocols to guarantee 100% spore-free infection control for every single patient visit.
              </p>
              
              <div className="p-6 rounded-2xl bg-slate-950 text-white space-y-3">
                <h4 className="font-bold text-lg text-purple-300">Sterilization Assurance</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every instrument set is sealed in medical-grade pouches and opened directly in front of you prior to treatment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {clinicInfo.sterilizationProtocol.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center shrink-0 text-xs">
                      {idx + 1}
                    </div>
                    <p className="text-slate-800 font-medium text-xs md:text-sm pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading">Have Questions for Our Specialists?</h3>
            <p className="text-slate-400 text-sm">Call our reception at Shuvam Towers, Forest Park, Bhubaneswar.</p>
          </div>
          <div className="flex gap-4">
            <a 
              href={`tel:${clinicInfo.phoneRaw}`}
              className="bg-brand-primary hover:bg-brand-primaryLight text-white px-6 py-3 rounded-xl font-bold transition-colors inline-flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" /> {clinicInfo.phone}
            </a>
            <Link 
              href="/contact"
              className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-xl font-bold transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
