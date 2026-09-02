import type { Metadata } from "next";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | Kedia Dental Care",
  description: "Privacy Policy for Kedia Dental Care. Read how we protect patient personal and health data in compliance with relevant data protection guidelines.",
  alternates: {
    canonical: "https://kediadentalcare.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd />
      
      <section className="pt-16 pb-12 bg-gradient-to-b from-purple-50/60 via-white to-white text-slate-900 border-b border-purple-100/60">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-purple-100 text-brand-primary rounded-full border border-purple-200">
            Legal & Compliance
          </span>
          <h1 className="text-4xl font-heading font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p>
              Kedia Dental Care ("we", "our", or "us"), located in Forest Park, Bhubaneswar, is committed to safeguarding the privacy and security of our patients' personal and medical data. This Privacy Policy outlines how we collect, use, store, and protect information submitted via our website and online appointment forms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p>When you fill out our online appointment form or contact us, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1.5 pt-2">
              <li>Full Name and Contact Phone Number</li>
              <li>Email Address</li>
              <li>Preferred Appointment Date and Time</li>
              <li>Primary Dental Concern or Service Requested</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <p>We use your personal data strictly for:</p>
            <ul className="list-disc pl-6 space-y-1.5 pt-2">
              <li>Scheduling, confirming, or updating your dental appointment.</li>
              <li>Responding to patient inquiries or consultation requests.</li>
              <li>Providing treatment reminders or necessary post-care instructions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-3">4. Data Protection & Confidentiality</h2>
            <p>
              We maintain strict administrative, technical, and physical safeguards to prevent unauthorized access, disclosure, or misuse of patient data. We do not sell, rent, or trade your personal information to third parties or advertising brokers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-3">5. Medical Disclaimer</h2>
            <p className="italic text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {clinicInfo.medicalDisclaimer}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-3">6. Contact Information</h2>
            <p>
              For any questions regarding this Privacy Policy or your personal data, please contact:
            </p>
            <div className="pt-2 font-medium text-slate-900 space-y-1">
              <p>{clinicInfo.name}</p>
              <p>
                <a
                  href={clinicInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary underline transition-colors"
                >
                  {clinicInfo.address.full}
                </a>
              </p>
              <p>Phone: {clinicInfo.phone}</p>
              <p>Email: {clinicInfo.email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
