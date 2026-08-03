"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AppointmentForm from "./AppointmentForm";
import { useEffect } from "react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
            >
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-slate-100 bg-slate-50/50 shrink-0">
                <div>
                  <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900">Book an Appointment</h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1">Fill out the form below and we'll get back to you.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-200/50 text-slate-500 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center touch-manipulation"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 sm:p-6 overflow-y-auto">
                <AppointmentForm onSuccess={onClose} />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
