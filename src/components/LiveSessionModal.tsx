'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, User, Mail, Phone, Sparkles } from 'lucide-react';

interface LiveSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiveSessionModal({ isOpen, onClose }: LiveSessionModalProps) {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Lock background scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setRegistered(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setRegistered(false);
    }, 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full max-w-md bg-brand-surface border border-brand-primary/40 rounded-3xl p-6 md:p-8 shadow-2xl relative text-left"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-white/60 hover:text-white bg-brand-bg/80 border border-brand-border transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {!registered ? (
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-primary uppercase tracking-widest font-bold mb-1">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>Live Session Registration</span>
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-1">
                  Interview Q&amp;A — .NET &amp; Career Prep
                </h3>
                <p className="text-xs text-brand-textSecondary mb-4">
                  Mon, 21st Sep 2026 • 2:00 PM IST • ₹99 Token
                </p>

                <form onSubmit={handleRegister} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Full Name <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ketan Sharma"
                        className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Email Address <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Phone Number (WhatsApp) <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs md:text-sm py-2.5 rounded-xl transition-all shadow-md shadow-brand-primary/20 hover:scale-[1.01]"
                  >
                    <span>Pay ₹99 &amp; Confirm Seat</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary text-brand-primary flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  Seat Reserved Successfully!
                </h3>
                <p className="text-xs text-brand-textSecondary leading-relaxed">
                  Thank you, <strong>{formData.name || 'Candidate'}</strong>! The session meeting link and calendar invite have been sent to <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-2 px-5 py-2 rounded-full bg-brand-primary text-[#0B0428] font-bold text-xs hover:bg-brand-primaryDark transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
