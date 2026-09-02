import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, Car, CreditCard, Accessibility, AlertCircle, ShieldCheck, Compass, Navigation, MessageCircle, ExternalLink } from "lucide-react";
import { clinicInfo, faqsList } from "@/data/clinicData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact & Clinic Location in Forest Park",
  description: "Contact Kedia Dental Care in Forest Park, Bhubaneswar. Phone: +91 78730 87575 | Email: shivdayalkedia11@gmail.com | 2nd Floor, Shuvam Towers.",
  alternates: {
    canonical: "https://kediadentalcare.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kediadentalcare.com" },
          { "@type": "ListItem", "position": 2, "name": "Contact & Location", "item": "https://kediadentalcare.com/contact" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqsList.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      
      {/* Header */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-purple-50/60 via-white to-white text-slate-900 border-b border-purple-100/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="inline-block text-xs font-bold px-3.5 py-1 bg-purple-100 text-brand-primary border border-purple-200 rounded-full uppercase tracking-wider">
            Forest Park, Bhubaneswar
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">Contact & Location</h1>
          <p className="text-base md:text-lg text-slate-600">
            Visit our new modern clinic location at Shuvam Towers with dedicated basement parking and elevator access.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href={clinicInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-slate-50 hover:bg-purple-50/50 border border-slate-200/80 hover:border-brand-primary/30 space-y-3 transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 flex items-center gap-1.5">
                      Clinic Address
                      <ExternalLink className="w-3.5 h-3.5 text-brand-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-600 group-hover:text-brand-primary text-xs md:text-sm leading-relaxed mt-1 transition-colors">
                      {clinicInfo.address.full}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-primary mt-2 group-hover:underline">
                      View on Google Maps &rarr;
                    </span>
                  </div>
                </a>
                
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-primary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Direct Phone</h3>
                    <a href={`tel:${clinicInfo.phoneRaw}`} className="text-brand-primary font-bold text-sm hover:underline block mt-1">
                      {clinicInfo.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-1">Same-day walk-in slots reserved</p>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-primary flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Working Hours</h3>
                    <p className="text-slate-600 text-xs mt-1">{clinicInfo.hours.weekdays}</p>
                    <p className="text-slate-600 text-xs mt-0.5">{clinicInfo.hours.sunday}</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-primary flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Official Email</h3>
                    <a href={`mailto:${clinicInfo.email}`} className="text-brand-primary font-semibold text-xs md:text-sm hover:underline block mt-1 truncate">
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Parking & Elevator Info */}
              <div className="p-6 rounded-3xl bg-purple-50/80 border border-purple-100 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm md:text-base flex items-center gap-2">
                  <Car className="w-5 h-5 text-brand-primary" />
                  Parking & Elevator Access Instructions
                </h4>
                <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                  {clinicInfo.address.parkingInfo}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-primary pt-1">
                  <span className="flex items-center gap-1"><Accessibility className="w-4 h-4 text-brand-primary" /> Wheelchair Friendly</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-brand-primary" /> Transparent Pricing</span>
                </div>
              </div>

              {/* Reception Visual Preview */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative group">
                <img 
                  src="/images/clinic_reception.webp" 
                  alt="Kedia Dental Care Reception Counter at Shuvam Towers, Forest Park" 
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">Clinic Front Desk</span>
                    <h4 className="font-bold text-sm text-white mt-1">Visit us on 2nd Floor, Shuvam Towers</h4>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[240px]">
                <iframe 
                  src={clinicInfo.address.googleMapsEmbedUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kedia Dental Care Location Map at Shuvam Towers, Forest Park"
                ></iframe>
              </div>
            </div>

            {/* Direct Connect & Action Cards (Form replaced with direct channels) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl text-white space-y-6">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-900/80 text-purple-200 border border-purple-700/60 rounded-full text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Direct Patient Assistance
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">Connect Directly with Our Clinic</h2>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    For instant appointments, clinical inquiries, or dental emergencies, please reach out to our reception team directly via phone, WhatsApp, or email.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Phone Call Card */}
                  <a 
                    href={`tel:${clinicInfo.phoneRaw}`}
                    className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-brand-primary hover:bg-brand-primaryDark text-white transition-all shadow-lg shadow-brand-primary/30 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-purple-100 font-medium">Call Reception Directly</p>
                        <p className="font-bold text-base sm:text-lg">{clinicInfo.phone}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-white text-slate-900 px-3.5 py-2 rounded-xl group-hover:scale-105 transition-transform shrink-0">
                      Call Now
                    </span>
                  </a>

                  {/* WhatsApp Chat Card */}
                  <a 
                    href={`https://wa.me/917873087575?text=Hello%20Kedia%20Dental%20Care%2C%20I%20would%20like%20to%20inquire%20about%20dental%20care%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-lg shadow-emerald-600/30 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-emerald-100 font-medium">Instant WhatsApp Message</p>
                        <p className="font-bold text-base sm:text-lg">+91 78730 87575</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-white text-emerald-950 px-3.5 py-2 rounded-xl group-hover:scale-105 transition-transform shrink-0 flex items-center gap-1">
                      Chat Now <ExternalLink className="w-3 h-3 inline" />
                    </span>
                  </a>

                  {/* Email Card */}
                  <a 
                    href={`mailto:${clinicInfo.email}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/90 hover:bg-slate-800 text-white transition-all border border-slate-700 group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-purple-300" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-400 font-medium">Email Inquiries</p>
                        <p className="font-semibold text-xs sm:text-sm text-slate-200 truncate">{clinicInfo.email}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-purple-300 group-hover:text-white transition-colors shrink-0">
                      Send Email &rarr;
                    </span>
                  </a>

                  {/* Google Maps Directions Button */}
                  <a 
                    href={clinicInfo.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-purple-900/50 hover:bg-purple-900/80 text-white transition-all border border-purple-700/50 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-purple-800/80 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-amber-300" />
                      </div>
                      <div>
                        <p className="text-xs text-purple-200 font-medium">Get Turn-by-Turn Directions</p>
                        <p className="font-semibold text-xs sm:text-sm text-white">Shuvam Towers, Forest Park</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-300 group-hover:text-white transition-colors shrink-0 flex items-center gap-1">
                      Open Maps <ExternalLink className="w-3 h-3 inline" />
                    </span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 space-y-1">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    Same-Day Walk-Ins & Emergency Care
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Experiencing severe tooth pain or dental trauma? Walk-in priority slots are reserved daily during clinic hours. Call us before heading over for immediate assistance.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Payment Options Banner */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center space-y-4">
          <h3 className="font-bold text-base text-slate-900">Accepted Payment Methods & Financing</h3>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-700">
            {clinicInfo.paymentOptions.map((opt, i) => (
              <span key={i} className="px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                {opt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks & Directions (Local Entity SEO) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-brand-primary rounded-full text-xs font-bold uppercase tracking-wider">
              <Navigation className="w-3.5 h-3.5" /> Easy Access & Directions
            </span>
            <h2 className="text-3xl font-heading font-bold text-slate-900">Nearby Landmarks in Bhubaneswar</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Conveniently located at <strong>Shuvam Towers, Forest Park</strong>, our clinic is easily reachable from key transit hubs and medical centers across Bhubaneswar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicInfo.nearbyLandmarks.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2 hover:border-brand-primary/40 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-primary shrink-0" />
                    {item.name}
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-brand-primary text-white rounded-full shrink-0">
                    {item.distance}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Localities Served Badges */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-heading font-bold text-white flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-brand-primary" /> Key Areas Served in Bhubaneswar
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Patients regularly visit Kedia Dental Care from major commercial, educational, and residential localities across Bhubaneswar:
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {clinicInfo.servedLocalities.map((loc, i) => (
                <span key={i} className="px-4 py-2 bg-slate-800 text-purple-200 border border-slate-700 rounded-full text-xs font-semibold hover:border-brand-primary transition-colors">
                  📍 {loc}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-sm">Everything you need to know before visiting our Forest Park clinic.</p>
          </div>
          
          <div className="space-y-4">
            {faqsList.map((faq, i) => (
              <div key={i} className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 space-y-2">
                <h3 className="text-base md:text-lg font-bold text-teal-300">{faq.question}</h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
