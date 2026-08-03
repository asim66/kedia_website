import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Clock, HelpCircle, Activity, ShieldCheck, CreditCard, AlertCircle, Phone } from "lucide-react";
import { treatmentsData, clinicInfo } from "@/data/clinicData";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const treatment = treatmentsData.find((t) => t.slug === params.slug);
  if (!treatment) return { title: "Treatment Not Found" };
  
  return {
    title: `${treatment.title} in Bhubaneswar`,
    description: `${treatment.shortDescription} Available at Kedia Dental Care, Forest Park, Bhubaneswar.`,
  };
}

export function generateStaticParams() {
  return treatmentsData.map((t) => ({
    slug: t.slug,
  }));
}

export default function TreatmentDetail({ params }: { params: { slug: string } }) {
  const treatment = treatmentsData.find((t) => t.slug === params.slug);
  
  if (!treatment) {
    notFound();
  }

  const detailSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kediadentalcare.com" },
          { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://kediadentalcare.com/treatments" },
          { "@type": "ListItem", "position": 3, "name": treatment.title, "item": `https://kediadentalcare.com/treatments/${treatment.slug}` }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": `${treatment.title} in Bhubaneswar`,
        "description": treatment.shortDescription,
        "procedureType": "http://schema.org/SurgicalProcedure",
        "howPerformed": treatment.fullDescription
      },
      ...(treatment.faq && treatment.faq.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": treatment.faq.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <>
      <JsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(detailSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3.5 text-xs sm:text-sm font-medium text-slate-500 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0" />
          <Link href="/treatments" className="hover:text-brand-primary transition-colors">Treatments</Link>
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">{treatment.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-purple-50/60 via-white to-white text-slate-900 border-b border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold px-3 py-1 bg-purple-100 text-brand-primary border border-purple-200 rounded-full uppercase tracking-wider">
              Specialist Treatment
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">{treatment.title}</h1>
            <p className="text-xl text-brand-primary font-semibold">{treatment.subtitle}</p>
            <p className="text-slate-600 text-lg leading-relaxed pt-2">
              {treatment.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-14">
              
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-brand-primary" />
                  Key Clinical Benefits
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step-by-Step Procedure */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                  What Happens During Treatment
                </h2>
                <div className="space-y-4">
                  {treatment.procedureSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-purple-50/60 border border-purple-100">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary text-white font-bold flex items-center justify-center shrink-0 text-base shadow-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-1">{step.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post-Op & Recovery Guidance */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-brand-primary" />
                  Post-Treatment Patient Care Guidance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  After your session, our team provides clear verbal and written care instructions tailored to your specific case. We also follow up with a courtesy check-in call to ensure your recovery is smooth and comfortable.
                </p>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-brand-primary" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {treatment.faq.map((q, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                      <h4 className="font-bold text-slate-900 mb-2 text-base">{q.question}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{q.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                
                {/* Summary Card */}
                <div className="bg-white border border-purple-100 text-slate-900 p-8 rounded-3xl shadow-xl space-y-6">
                  <h3 className="text-xl font-bold font-heading border-b border-slate-100 pb-4 text-slate-900">
                    Treatment Summary
                  </h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-primary flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Estimated Duration</p>
                        <p className="font-semibold text-base text-slate-900">{treatment.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-primary flex items-center justify-center shrink-0">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Expected Recovery</p>
                        <p className="font-semibold text-base text-slate-900">{treatment.recovery}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-primary flex items-center justify-center shrink-0">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Financial Options</p>
                        <p className="font-semibold text-sm text-brand-primary">0% Interest EMI Available</p>
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />
                  
                  <div className="space-y-3">
                    <Link 
                      href="?booking=true"
                      className="w-full bg-brand-primary hover:bg-brand-primaryDark text-white py-3.5 rounded-xl font-bold transition-all shadow-md shadow-brand-primary/20 flex items-center justify-center gap-2 text-center"
                    >
                      Book Consultation
                    </Link>
                    <a 
                      href={`tel:${clinicInfo.phoneRaw}`}
                      className="w-full bg-purple-50 hover:bg-purple-100 text-brand-primary py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 text-center border border-purple-200"
                    >
                      <Phone className="w-4 h-4 text-brand-primary" /> Call Reception
                    </a>
                  </div>
                </div>

                {/* Medical Disclaimer Box */}
                <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-600 space-y-1 text-xs">
                  <p className="font-bold text-slate-800 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-brand-primary shrink-0" />
                    Medical Disclaimer
                  </p>
                  <p className="leading-relaxed">
                    {clinicInfo.medicalDisclaimer}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
