"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { treatmentsData } from "@/data/clinicData";

export default function AppointmentForm({ onSuccess }: { onSuccess?: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
        <div className="w-16 h-16 bg-purple-100 text-brand-primary rounded-full flex items-center justify-center mb-2">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading font-bold text-xl text-slate-900">Request Sent Successfully!</h3>
        <p className="text-slate-600">
          Thank you for reaching out. Our reception team will contact you shortly to confirm your appointment time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors bg-slate-50 focus:bg-white text-base sm:text-sm min-h-[48px]"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors bg-slate-50 focus:bg-white text-base sm:text-sm min-h-[48px]"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="treatment" className="text-sm font-medium text-slate-700">Service Required</label>
        <select 
          id="treatment"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors bg-slate-50 focus:bg-white text-base sm:text-sm min-h-[48px]"
        >
          <option value="">Select a treatment (Optional)</option>
          {treatmentsData.map(t => (
            <option key={t.id} value={t.id}>{t.title}</option>
          ))}
          <option value="general">General Checkup / Consultation</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Additional Notes</label>
        <textarea 
          id="message" 
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors bg-slate-50 focus:bg-white text-base sm:text-sm resize-none"
          placeholder="Briefly describe your dental issue or preferred appointment time..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full bg-brand-primary hover:bg-brand-primaryDark text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
      >
        {status === "submitting" ? (
          "Submitting..."
        ) : (
          <>
            Request Appointment
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
      <p className="text-xs text-slate-500 text-center mt-3">
        Your information is secure. We will never share your details with third parties.
      </p>
    </form>
  );
}
