import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Activity, Smile, Sparkles, Camera, Layers, HeartPulse, Stethoscope, Sun } from "lucide-react";
import { treatmentsData, clinicInfo } from "@/data/clinicData";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Specialized Dental Treatments | Kedia Dental Care",
  description: "Explore our 10 core specialized dental treatments including Laser Dentistry, Single-Visit RCT, Dental Implants, Braces, and Smile Designing in Bhubaneswar.",
};

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd />
      
      {/* Header */}
      <section className="pt-16 pb-16 bg-gradient-to-b from-purple-50/60 via-white to-white text-slate-900 border-b border-purple-100/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="inline-block text-xs font-bold px-3 py-1 bg-purple-100 text-brand-primary border border-purple-200 rounded-full uppercase tracking-wider">
            Comprehensive Dental Care
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">Specialized Treatments & Services</h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            From routine preventive checkups to full mouth rehabilitation, we offer specialized dental care using the world's finest digital technology in Bhubaneswar.
          </p>
        </div>
      </section>

      {/* Grid of All 10 Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentsData.map((treatment, idx) => (
              <Link 
                key={treatment.id} 
                href={`/treatments/${treatment.slug}`}
                className="group flex flex-col justify-between rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300 hover:border-brand-primary"
              >
                <div className="p-5 sm:p-8">
                  <div className="w-12 h-12 bg-purple-100 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    {idx === 0 && <Zap className="w-6 h-6" />}
                    {idx === 1 && <Activity className="w-6 h-6" />}
                    {idx === 2 && <Smile className="w-6 h-6" />}
                    {idx === 3 && <ShieldCheck className="w-6 h-6" />}
                    {idx === 4 && <Sparkles className="w-6 h-6" />}
                    {idx === 5 && <Camera className="w-6 h-6" />}
                    {idx === 6 && <Layers className="w-6 h-6" />}
                    {idx === 7 && <HeartPulse className="w-6 h-6" />}
                    {idx === 8 && <Stethoscope className="w-6 h-6" />}
                    {idx === 9 && <Sun className="w-6 h-6" />}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-heading">{treatment.title}</h3>
                  <p className="text-sm font-bold text-brand-primary mb-3">{treatment.subtitle}</p>
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    {treatment.shortDescription}
                  </p>
                </div>

                <div className="px-5 sm:px-8 py-4 border-t border-slate-200/60 bg-white group-hover:bg-purple-50/80 transition-colors flex items-center justify-between text-brand-primary font-bold text-sm">
                  <span>View Treatment Procedure</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50 text-slate-900 border-t border-purple-100">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl font-heading font-bold text-slate-900">Unsure Which Treatment You Need?</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Book a comprehensive digital consultation with Dr. Shiv Dayal Kedia & Team. We conduct full 3D scans and explain every option clearly.
          </p>
          <div className="pt-2">
            <Link 
              href="?booking=true"
              className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-primary/20 inline-flex items-center gap-2"
            >
              Make an Appointment Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
