import Image from "next/image";
import Link from "next/link";
import { clinicInfo, teamMembers, testimonials } from "@/data/clinicData";
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Star, 
  Award, 
  ShieldCheck, 
  Clock, 
  CalendarDays, 
  Zap, 
  Activity, 
  Check, 
  X, 
  HelpCircle, 
  Sparkles, 
  AlertTriangle, 
  CreditCard, 
  Stethoscope,
  ExternalLink
} from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Root Canal Specialist in Bhubaneswar | Micro-Endodontics & Laser RCT",
  description: "Consult MDS Endodontic Specialist Dr. Shiv Dayal Kedia for painless laser root canal therapy, rotary endodontics, and single-visit RCT in Forest Park, Bhubaneswar.",
  keywords: "root canal specialist bhubaneswar, endodontic specialist bhubaneswar, laser rct bhubaneswar, dr kedia root canal, micro endodontics bhubaneswar",
  alternates: {
    canonical: "/best-root-canal-treatment-in-bhubaneswar",
  },
};

export default function RootCanalTreatmentBhubaneswarPage() {
  const founder = teamMembers[0]; // Dr. Shiv Dayal Kedia (MDS - Endodontics)

  const rctFaqs = [
    {
      question: "Is a root canal treatment painful at Kedia Dental Care?",
      answer: "Not at all. With modern local anesthesia, digital apex locators, and computer-guided rotary endodontics, a root canal at Kedia Dental Care is virtually painless and feels as comfortable as a routine tooth filling."
    },
    {
      question: "Can a root canal be completed in a single sitting?",
      answer: "Yes! At Kedia Dental Care, over 90% of non-complex root canal cases are successfully completed in a single 45 to 60 minute visit using advanced rotary instruments and laser pulp disinfection."
    },
    {
      question: "How much does Root Canal Treatment cost in Bhubaneswar?",
      answer: "Root canal treatment cost in Bhubaneswar generally ranges depending on whether it is a front tooth or a multi-rooted molar, whether laser disinfection is required, and the type of protective crown selected (e.g. PFM or Zirconia). We provide complete written transparent cost estimates before starting treatment."
    },
    {
      question: "Is a crown (cap) necessary after a root canal treatment?",
      answer: "In most cases, yes. After root canal treatment, the tooth loses its living blood supply and can become brittle over time. A custom-fitted dental crown (PFM or metal-free Zirconia) protects the tooth against fracturing and restores 100% chewing function."
    },
    {
      question: "What are the signs that I need a root canal?",
      answer: "Key symptoms include severe throbbing tooth pain (especially while chewing), lingering sensitivity to hot or cold foods, swollen or tender gums near the tooth, a persistent pimple on the gums, or a darkened/discolored tooth."
    },
    {
      question: "How long does a root canal treated tooth last?",
      answer: "With proper oral hygiene, regular dental checkups, and a protective crown, a root canal treated tooth can easily last a lifetime."
    }
  ];

  const rctSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "name": "Root Canal Treatment (RCT)",
        "alternateName": ["Single-Visit RCT", "Endodontic Therapy"],
        "description": "Advanced painless root canal treatment in Bhubaneswar using computerized rotary endodontics, laser pulp sterilization, and custom CAD/CAM Zirconia crowns.",
        "procedureType": "http://schema.org/SurgicalProcedure",
        "bodyLocation": "Tooth / Oral Cavity",
        "howPerformed": "Pulp tissue removal, computerized canal cleaning, laser sterilization, biocompatible gutta-percha sealing, and crown placement.",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Endodontics"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": rctFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <JsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rctSchema) }}
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-purple-50/90 via-white to-white text-slate-900 border-b border-purple-100/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-brand-primary border border-purple-200 text-sm font-bold uppercase tracking-wider mx-auto lg:mx-0">
              <Zap className="w-4 h-4 fill-brand-primary" /> #1 Painless Single-Visit RCT in Bhubaneswar
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
              Painless <span className="text-brand-primary">Root Canal Treatment</span> in Bhubaneswar
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Save your natural tooth in just <strong>1 sitting</strong>. Led by MDS Endodontist <strong>Dr. Shiv Dayal Kedia</strong> (22+ Yrs Experience) using computerized rotary tools and laser pulp sterilization.
            </p>
            
            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Single Visit (45 Min)</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Painless Anesthesia</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Laser Disinfection</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>3,500+ Successful RCTs</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zirconia Crown Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Transparent Pricing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link 
                href="/contact"
                className="bg-brand-primary hover:bg-brand-primaryLight text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-primary/30 flex items-center gap-2 text-lg w-full sm:w-auto justify-center"
              >
                Contact Us Today
              </Link>
              <a 
                href={`tel:${clinicInfo.phoneRaw}`}
                className="bg-white border-2 border-slate-200 text-slate-900 hover:border-brand-primary hover:text-brand-primary px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 text-lg w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" /> {clinicInfo.phone}
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <span>4.9/5 Patient Rating for Root Canals</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/clinic_treatment.webp" 
                alt="Dr. Shiv Dayal Kedia performing painless Root Canal Treatment in Bhubaneswar at Kedia Dental Care"
                width={800}
                height={600}
                priority
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg text-slate-900">
                <p className="text-xs font-bold text-brand-primary uppercase tracking-wider">Expert Endodontist Care</p>
                <p className="text-sm font-semibold text-slate-800">"We save your natural teeth with minimal discomfort, restoring full chewing power fast."</p>
                <p className="text-xs text-slate-500 font-medium mt-1">— Dr. Shiv Dayal Kedia (MDS)</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow hidden md:flex">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-brand-primary">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Success Rate</p>
                <p className="text-lg font-black text-slate-900">99.4% Precision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Toothache Banner */}
      <section className="bg-amber-50 border-y border-amber-200 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-amber-900">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 bg-amber-200 text-amber-900 rounded-xl flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg">Suffering from Severe Toothache right now?</h3>
              <p className="text-xs md:text-sm text-amber-800">We reserve daily priority emergency slots for acute tooth pain & single-sitting root canals.</p>
            </div>
          </div>
          <a 
            href={`tel:${clinicInfo.phoneRaw}`}
            className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shrink-0 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call Emergency Line: {clinicInfo.phone}
          </a>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-purple-100 text-brand-primary rounded-full border border-purple-200">
              Early Diagnosis Saves Your Tooth
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Do You Need a Root Canal Treatment?
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              If you are experiencing any of the following symptoms, an infected dental pulp may be harming your natural tooth root.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Throbbing Tooth Pain",
                desc: "Sharp, throbbing, or continuous pain while biting, chewing, or lying down.",
                icon: AlertTriangle,
                badge: "High Urgency"
              },
              {
                title: "Lingering Hot/Cold Sensitivity",
                desc: "Pain or discomfort that persists for seconds or minutes after eating hot tea, coffee, or cold water.",
                icon: FlameIcon,
                badge: "Common Symptom"
              },
              {
                title: "Gum Swelling or Gum Pimple",
                desc: "Tenderness, swelling, or a small pus-filled pimple (abscess) on the gums near the painful tooth.",
                icon: Activity,
                badge: "Infection Sign"
              },
              {
                title: "Discolored or Cracked Tooth",
                desc: "A tooth turning dark, greyish, or chipped due to deep cavity decay or dental injury trauma.",
                icon: ShieldCheck,
                badge: "Structural Damage"
              }
            ].map((symptom, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:border-brand-primary/40 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-purple-100 text-brand-primary rounded-2xl flex items-center justify-center">
                    <symptom.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full">{symptom.badge}</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">{symptom.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{symptom.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kedia Dental Care for RCT */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Why Kedia Dental Care is the Best Choice for Root Canal in Bhubaneswar
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              We combine over two decades of clinical mastery with modern endodontic technology to make root canal treatments painless, fast, and permanent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:border-brand-primary/50 transition-colors">
              <div className="w-14 h-14 bg-purple-100 text-brand-primary rounded-2xl flex items-center justify-center">
                <Stethoscope className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">MDS Specialist Endodontist</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Performed by Founder <strong>Dr. Shiv Dayal Kedia</strong> (BDS, MDS) with over 22 years of clinical experience in complex endodontics and re-RCT cases.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:border-brand-primary/50 transition-colors">
              <div className="w-14 h-14 bg-purple-100 text-brand-primary rounded-2xl flex items-center justify-center">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">Single-Visit Painless Protocol</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Computerized NiTi rotary instrumentation and digital apex locators complete pulp cleaning in a single 45-minute sitting without multiple tedious visits.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:border-brand-primary/50 transition-colors">
              <div className="w-14 h-14 bg-purple-100 text-brand-primary rounded-2xl flex items-center justify-center">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">Diode Laser Disinfection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Medical diode laser sterilization kills 99.9% of deep-canal bacteria, preventing secondary infections and accelerating tissue healing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:border-brand-primary/50 transition-colors">
              <div className="w-14 h-14 bg-purple-100 text-brand-primary rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">Low-Radiation Digital RVG</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Instant HD digital dental radiography with 90% less radiation than traditional film X-rays for pinpoint accuracy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:border-brand-primary/50 transition-colors">
              <div className="w-14 h-14 bg-purple-100 text-brand-primary rounded-2xl flex items-center justify-center">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">Metal-Free Zirconia Crowns</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                CAD/CAM precision computer-milled Zirconia crowns color-matched to your enamel for natural tooth aesthetics and strength.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:border-brand-primary/50 transition-colors">
              <div className="w-14 h-14 bg-purple-100 text-brand-primary rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">Transparent Billing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Upfront written cost breakdowns provided before treatment begins with zero hidden charges or surprise fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Single-Visit vs Traditional RCT */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Single-Visit RCT vs Old Traditional Root Canal
            </h2>
            <p className="text-slate-600 text-base">
              Why modern computerized Root Canal Treatment at Kedia Dental Care is far superior to traditional dental procedures.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-heading">
                  <th className="p-5 font-bold text-base">Feature</th>
                  <th className="p-5 font-bold text-base bg-brand-primary text-white">Kedia Dental Care (Single Visit)</th>
                  <th className="p-5 font-bold text-base text-slate-400">Old Traditional Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                <tr className="bg-white hover:bg-slate-50">
                  <td className="p-5 font-semibold text-slate-900">Number of Sittings</td>
                  <td className="p-5 font-bold text-brand-primary bg-purple-50/50 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" /> 1 Single Sitting (45 Min)
                  </td>
                  <td className="p-5 text-slate-600 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" /> 3 to 4 Repeated Visits
                  </td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="p-5 font-semibold text-slate-900">Pain Level</td>
                  <td className="p-5 font-bold text-brand-primary bg-purple-50/50">
                    Virtually Painless (Local Numbing)
                  </td>
                  <td className="p-5 text-slate-600">Frequent sore visits & lingering pain</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="p-5 font-semibold text-slate-900">Cleaning Technology</td>
                  <td className="p-5 font-bold text-brand-primary bg-purple-50/50">
                    Computerized Rotary & Diode Laser
                  </td>
                  <td className="p-5 text-slate-600">Manual stainless steel hand files</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="p-5 font-semibold text-slate-900">Bacterial Sterilization</td>
                  <td className="p-5 font-bold text-brand-primary bg-purple-50/50">
                    100% Laser Disinfection
                  </td>
                  <td className="p-5 text-slate-600">Standard chemical rinses only</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="p-5 font-semibold text-slate-900">Recovery Time</td>
                  <td className="p-5 font-bold text-brand-primary bg-purple-50/50">
                    Immediate / Same Day
                  </td>
                  <td className="p-5 text-slate-600">7 to 10 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Step-by-Step Procedure */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-purple-100 text-brand-primary rounded-full border border-purple-200">
              Clear & Transparent Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              The 5-Step Root Canal Procedure
            </h2>
            <p className="text-slate-600 text-base">
              Here is what happens during your painless single-visit root canal treatment at our Forest Park clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: 1,
                title: "3D RVG Examination",
                desc: "High-definition digital X-ray maps the root canal structure, nerve length, and depth of infection."
              },
              {
                step: 2,
                title: "Painless Anesthesia",
                desc: "Gentle local numbing gel and precise anesthesia ensures you feel complete comfort throughout."
              },
              {
                step: 3,
                title: "Rotary Pulp Cleaning",
                desc: "Computerized nickel-titanium rotary tools clean and shape infected pulp canals with micro-precision."
              },
              {
                step: 4,
                title: "Laser Sterilization",
                desc: "Diode laser sterilizes microscopic root tubules, sealing the canal with biocompatible Gutta-Percha."
              },
              {
                step: 5,
                title: "Crown Restoration",
                desc: "Custom CAD/CAM tooth-colored crown is permanently placed to restore complete chewing strength."
              }
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-brand-primary text-white font-bold rounded-2xl flex items-center justify-center text-lg mb-4 shadow-md shadow-brand-primary/20">
                    {item.step}
                  </div>
                  <h3 className="font-bold font-heading text-slate-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Root Canal Cost Transparency */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-900 via-slate-900 to-purple-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl space-y-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-purple-800/80 text-purple-200 rounded-full border border-purple-700">
                Transparent Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Root Canal Treatment Cost in Bhubaneswar
              </h2>
              <p className="text-purple-100 text-base leading-relaxed">
                At Kedia Dental Care, we believe in 100% price transparency. No hidden charges or surprise costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-900">
              <div className="bg-white p-6 rounded-2xl space-y-3">
                <p className="text-xs font-bold text-brand-primary uppercase">Front Teeth RCT</p>
                <h3 className="text-2xl font-black font-heading text-slate-900">Single Root</h3>
                <p className="text-xs text-slate-600">Quick 1-sitting procedure for anterior incisors & canines.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl space-y-3 border-2 border-amber-400 relative">
                <span className="absolute -top-3 right-4 bg-amber-400 text-slate-950 font-bold text-xs px-2.5 py-0.5 rounded-full uppercase">Most Common</span>
                <p className="text-xs font-bold text-brand-primary uppercase">Molar Teeth RCT</p>
                <h3 className="text-2xl font-black font-heading text-slate-900">Multi-Rooted</h3>
                <p className="text-xs text-slate-600">Advanced rotary cleaning for complex posterior molars.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl space-y-3">
                <p className="text-xs font-bold text-brand-primary uppercase">Laser Re-RCT</p>
                <h3 className="text-2xl font-black font-heading text-slate-900">Complex / Re-Treatment</h3>
                <p className="text-xs text-slate-600">Salvaging previously failed or infected external root canals.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-purple-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-purple-200">
                💡 Full transparent cost breakdown provided prior to treatment.
              </div>
              <Link 
                href="/contact"
                className="bg-brand-primary hover:bg-brand-primaryLight text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg inline-flex items-center gap-2"
              >
                Get Cost Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Bio Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md relative bg-slate-100">
                <Image 
                  src={founder.image} 
                  alt={founder.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-purple-100 text-brand-primary rounded-full">
                Lead Endodontist
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                Meet {founder.name}
              </h2>
              <p className="text-brand-primary font-bold text-base">{founder.title} • {founder.qualifications}</p>
              <p className="text-slate-600 leading-relaxed text-base">
                Dr. Shiv Dayal Kedia is one of Bhubaneswar's most trusted dental surgeons with over 22 years of clinical expertise. Having performed thousands of successful root canals, Dr. Kedia specializes in single-visit painless endodontics, micro-laser sterilization, and restorative smile preservation.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 text-center">
                  <p className="text-2xl font-black text-brand-primary font-heading">22+</p>
                  <p className="text-xs font-bold text-slate-600">Years Experience</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 text-center">
                  <p className="text-2xl font-black text-brand-primary font-heading">3,500+</p>
                  <p className="text-xs font-bold text-slate-600">Root Canals Done</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 text-center col-span-2 sm:col-span-1">
                  <p className="text-2xl font-black text-brand-primary font-heading">99.4%</p>
                  <p className="text-xs font-bold text-slate-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Patient Experiences with Root Canals at Kedia Dental Care
            </h2>
            <p className="text-slate-600 text-lg">
              Read real feedback from patients who underwent single-visit root canals in Bhubaneswar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((review, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4 text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-slate-700 italic mb-6 leading-relaxed">
                    "{review.review}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                    <p className="text-slate-500">{review.location}</p>
                  </div>
                  <span className="px-2.5 py-1 bg-purple-100 text-brand-primary rounded-full font-bold">{review.treatment}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={clinicInfo.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full text-sm font-semibold hover:bg-brand-secondary transition shadow-sm"
            >
              <span>Read All Reviews on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-purple-100 text-brand-primary rounded-full border border-purple-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Root Canal Treatment FAQs
            </h2>
            <p className="text-slate-600 text-base">
              Got questions about root canals in Bhubaneswar? We have answers.
            </p>
          </div>

          <div className="space-y-6">
            {rctFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-lg font-bold font-heading text-slate-900 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 space-y-8 flex flex-col justify-center">
                <div>
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Forest Park, Bhubaneswar</span>
                  <h2 className="text-3xl font-heading font-bold mb-2 text-white">Visit Kedia Dental Care</h2>
                  <p className="text-slate-400">Painless Root Canal & Comprehensive Dental Center.</p>
                </div>
                
                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white">Address</p>
                      <p className="text-slate-300">{clinicInfo.address.full}</p>
                      <p className="text-xs text-purple-300 mt-1">🚗 {clinicInfo.address.parkingInfo}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white">Phone & Emergency Line</p>
                      <a href={`tel:${clinicInfo.phoneRaw}`} className="text-slate-300 hover:text-brand-primary font-bold">
                        {clinicInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white">Clinic Hours</p>
                      <p className="text-slate-300">{clinicInfo.hours.weekdays}</p>
                      <p className="text-slate-300">{clinicInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link 
                    href="/contact"
                    className="bg-brand-primary hover:bg-brand-primaryLight text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg inline-flex items-center gap-2 text-base w-full sm:w-auto justify-center"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
              
              <div className="relative min-h-[350px] lg:min-h-full">
                <iframe
                  src={clinicInfo.address.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Simple Helper Icon component for Flame
function FlameIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}
