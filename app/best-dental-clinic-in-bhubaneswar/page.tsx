import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicInfo, teamMembers, treatmentsData, testimonials, faqsList } from "@/data/clinicData";
import { CheckCircle2, MapPin, Phone, Star, Award, ShieldCheck, Clock, CalendarDays, ExternalLink } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Top-Rated Dental Clinic in Bhubaneswar | Patient Reviews & Clinic Ratings",
  description: "Discover why patients rank Kedia Dental Care as a top-rated dental clinic in Bhubaneswar. 22+ years of clinical excellence, 500+ 5-star Google reviews, and advanced laser dentistry in Forest Park.",
  keywords: "top rated dental clinic bhubaneswar, dental clinic reviews bhubaneswar, best dental care forest park, kedia dental care ratings",
  alternates: {
    canonical: "https://kediadentalcare.com/best-dental-clinic-in-bhubaneswar",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BestDentalClinicBhubaneswarPage() {
  const founder = teamMembers[0];
  const topTreatments = treatmentsData.slice(0, 6);

  const hubSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kediadentalcare.com" },
          { "@type": "ListItem", "position": 2, "name": "Best Dental Clinic in Bhubaneswar", "item": "https://kediadentalcare.com/best-dental-clinic-in-bhubaneswar" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqsList.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-purple-50/80 via-white to-white text-slate-900 border-b border-purple-100/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-brand-primary border border-purple-200 text-sm font-bold uppercase tracking-wider mx-auto lg:mx-0">
              <Award className="w-4 h-4" /> Rated #1 Dental Clinic
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
              The <span className="text-brand-primary">Best Dental Clinic</span> in Bhubaneswar
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience world-class, painless dentistry at Kedia Dental Care. With over 22 years of excellence, we provide advanced dental treatments in a comfortable and hygienic environment.
            </p>
            
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
            
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <span>4.9/5 from 2000+ Patients</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/clinic_reception.webp" 
                alt="Kedia Dental Care Reception & Welcome Area in Forest Park, Bhubaneswar"
                width={800}
                height={600}
                priority
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow hidden md:flex">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-brand-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Trusted by</p>
                <p className="text-lg font-black text-slate-900">10,000+ Patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Why Are We Considered the Best Dental Clinic in Bhubaneswar?
            </h2>
            <p className="text-slate-600 text-lg">
              Choosing the right dentist is crucial for your oral health. Here is why thousands of families trust Kedia Dental Care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "22+ Years Experience", desc: "Dr. Kedia brings over two decades of clinical expertise, handling complex cases with precision.", icon: Award },
              { title: "Painless Micro-Dentistry", desc: "Advanced techniques and equipment ensure your treatment is minimally invasive and virtually painless.", icon: CheckCircle2 },
              { title: "100% Sterilization", desc: "We follow strict hospital-grade sterilization protocols to ensure a safe, infection-free environment.", icon: ShieldCheck },
              { title: "Advanced Technology", desc: "Equipped with state-of-the-art tools like intraoral cameras, digital X-rays, and lasers.", icon: Star },
              { title: "All Specialists Under One Roof", desc: "From orthodontists to oral surgeons, our team of specialists provides comprehensive care.", icon: CheckCircle2 },
              { title: "Prime Location", desc: "Conveniently located in Forest Park, easily accessible from all parts of Bhubaneswar.", icon: MapPin },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Comprehensive Dental Services
              </h2>
              <p className="text-slate-600 text-lg">
                As the top dental clinic in Bhubaneswar, we offer a complete range of dental treatments tailored to your needs.
              </p>
            </div>
            <Link href="/treatments" className="text-brand-primary font-bold hover:underline hidden md:block">
              View All Treatments &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topTreatments.map((treatment) => (
              <Link key={treatment.id} href={`/treatments/${treatment.slug}`} className="group block">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-brand-primary/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-purple-100 text-brand-primary rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-1 group-hover:text-brand-primary transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs font-bold text-brand-primary mb-3">{treatment.subtitle}</p>
                    <p className="text-slate-600 text-sm line-clamp-3">{treatment.shortDescription}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between text-brand-primary font-bold text-sm">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/treatments" className="bg-purple-50 text-brand-primary font-bold px-6 py-3 rounded-xl inline-block">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Best Dentist */}
      <section className="py-20 bg-purple-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Meet the Best Dentist in Bhubaneswar</h2>
              <div className="w-20 h-1 bg-purple-400 rounded-full"></div>
              <h3 className="text-2xl font-bold text-purple-200">{founder.name}</h3>
              <p className="text-sm font-bold uppercase tracking-wider text-purple-300">{founder.qualifications}</p>
              
              <p className="text-purple-100 text-lg leading-relaxed">
                With a passion for preserving natural smiles and a commitment to utilizing the latest advancements in dentistry, Dr. Kedia has transformed the smiles of thousands of patients. His expertise in micro-dentistry ensures treatments are not just effective, but incredibly comfortable.
              </p>
              
              <div className="pt-6">
                <Link 
                  href="/about"
                  className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold transition-all inline-block"
                >
                  Read Full Profile
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] max-w-md mx-auto relative rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-800">
                <Image 
                  src={founder.image || "/images/dr_kedia.webp"}
                  alt={founder.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-slate-600 text-lg">
              Don't just take our word for it. Read reviews from our happy patients who consider us the best dental clinic in Bhubaneswar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4 text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">
                    "{review.review}"
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">{review.name}</span>
                    <span className="text-xs text-slate-500">{review.treatment}</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 px-2 py-0.5 bg-slate-100 rounded-md">Google Review</span>
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
              <span>See All 500+ Reviews on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 text-white space-y-8 flex flex-col justify-center">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-2">Visit Our Clinic Today</h2>
                  <p className="text-slate-400">Experience the difference at Bhubaneswar's top-rated dental facility.</p>
                </div>
                
                <div className="space-y-6">
                  <a
                    href={clinicInfo.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group p-2 -m-2 rounded-xl hover:bg-slate-800/60 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-purple-900/60 flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white flex items-center gap-1.5">
                        Clinic Address
                        <ExternalLink className="w-4 h-4 text-purple-300 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-slate-400 group-hover:text-purple-200 mt-1 transition-colors">{clinicInfo.address.full}</p>
                      <span className="text-xs text-brand-primary font-bold inline-block mt-1">Open in Google Maps &rarr;</span>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Working Hours</h4>
                      <div className="text-slate-400 mt-1 space-y-1">
                        <p>{clinicInfo.hours.weekdays}</p>
                        <p>{clinicInfo.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="bg-brand-primary hover:bg-brand-primaryLight text-white px-8 py-4 rounded-xl font-bold transition-all text-center inline-block w-full sm:w-auto"
                >
                  Contact & Location Info
                </Link>
              </div>
              
              <div className="h-64 lg:h-auto min-h-[400px]">
                <iframe 
                  src={clinicInfo.address.googleMapsEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kedia Dental Care Location"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
