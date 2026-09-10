'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Star } from 'lucide-react';

interface CTAProps {
  onOpenModal?: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section id="cta" className="relative py-12 md:py-16 bg-brand-bg overflow-hidden border-t border-brand-border/40">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-surface border border-brand-primary/30 rounded-3xl p-6 md:p-10 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#19E7D9_1px,transparent_1px),linear-gradient(to_bottom,#19E7D9_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          {/* Social Proof Mini Line */}
          <div className="flex items-center justify-center gap-1 mb-4 text-xs text-brand-primary font-bold tracking-wider uppercase">
            <Star className="w-4 h-4 fill-current text-brand-warning" />
            <span>Founding Batch: Limited to 30 seats to ensure 1-on-1 focus</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-brand-textPrimary mb-4 tracking-tight leading-tight">
            Ready to become <span className="text-gradient">job ready?</span>
          </h2>
          
          <p className="text-xs md:text-sm text-brand-textSecondary max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Stop scrolling generic online tutorials. Commit to a structured preparation timeline 
            led by software engineers, designed to build core technical readiness and mock interview confidence.
          </p>

          {/* Side-by-Side Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center max-w-md mx-auto mb-6">
            <button
              onClick={onOpenModal}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-6 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105"
            >
              <span>Apply for Session</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              href="https://chat.whatsapp.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-primary text-white hover:text-brand-primary bg-brand-surface/40 hover:bg-brand-surface/80 px-6 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-current text-brand-primary" />
              <span>Join WhatsApp Group</span>
            </a>
          </div>

          {/* Footnote disclaimer */}
          <p className="text-[11px] text-brand-textSecondary/60 max-w-xl mx-auto leading-relaxed">
            *TechNext Academy is a practitioner-led preparation program. We do not sell guaranteed job placement promises; 
            we focus on direct technical readiness, resume feedback, mock performance reviews, and referrals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
