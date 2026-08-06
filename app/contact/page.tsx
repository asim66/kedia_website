import { Mail, MapPin, Phone, Clock, Car, CreditCard, Accessibility, AlertCircle, ShieldCheck } from "lucide-react";
import { clinicInfo, faqsList } from "@/data/clinicData";
import AppointmentForm from "@/components/AppointmentForm";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Contact & Clinic Location in Forest Park",
  description: "Contact Kedia Dental Care in Forest Park, Bhubaneswar. Phone: +91 78730 87575 | Email: shivdayalkedia11@gmail.com | 2nd Floor, Shuvam Towers.",
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
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Clinic Address</h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-1">{clinicInfo.address.full}</p>
                  </div>
                </div>
                
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

              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[280px]">
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

            {/* Contact Form */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 p-5 sm:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">Get in Touch with Us</h2>
                <p className="text-slate-600 text-xs md:text-sm mb-6">
                  Fill out the form below to send us a message. Our team will get back to you promptly during operating hours.
                </p>
                <AppointmentForm />
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
