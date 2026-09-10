'use client';

import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PRICING_TIERS = [
  {
    name: 'Free Community Track',
    badge: 'Self-Paced Learning',
    price: '₹0',
    priceNote: 'Always free for students',
    description: 'Get started with coding roadmaps, foundational resources, and connect with other tech aspirants.',
    features: [
      'Access to weekly live tech webinars',
      'Join our active student WhatsApp group',
      'Basic HTML, CSS & JS study roadmaps',
      'Curated list of 100+ interview questions',
      'Community chat for Q&A questions',
    ],
    notIncluded: [
      'Personalized SDE mentor guidance',
      '1-on-1 mock interview assessments',
      'Resume & portfolio review workshops',
      'Internship & job placement referrals',
    ],
    cta: 'Join Free Community',
    ctaLink: 'https://chat.whatsapp.com/placeholder',
    isPrimary: false,
  },
  {
    name: 'Career Readiness Cohort',
    badge: 'Flagship Mentor Program',
    price: '₹24,999',
    strikePrice: '₹39,999',
    priceNote: 'Founding Batch Special (EMI available)',
    description: 'Our complete mentor-led program designed to build deep interview confidence and bridge the gap to high-growth tech jobs.',
    features: [
      'Complete Frontend + Backend cohort curriculum',
      'Direct 1-on-1 Slack access to SDE mentors',
      '3 rigorous Mock Interviews (Tech, Domain, HR)',
      'Written candidate evaluation feedback reports',
      'Custom Resume, GitHub, & LinkedIn audit',
      'Access to partner referrals & placements channel',
    ],
    notIncluded: [],
    cta: 'Apply for Session',
    ctaLink: '#apply',
    isPrimary: true,
  },
];

export default function Pricing() {
  return (
    <section id="sessions" className="relative py-12 md:py-16 bg-brand-bg overflow-hidden border-t border-brand-border/40">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
            Flexible Pricing
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3">
            Fair pricing built for <span className="text-gradient">outcomes.</span>
          </h2>
          <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
            Get started for free to see if you like the structure, or enroll in our flagship 
            cohort for maximum placement readiness and active referrals.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`rounded-2xl p-6 md:p-7 flex flex-col justify-between relative border ${
                tier.isPrimary
                  ? 'bg-brand-surface border-brand-primary/60 shadow-[0_0_40px_rgba(0,237,100,0.1)]'
                  : 'bg-brand-surface/50 border-brand-border/60'
              }`}
            >
              {/* Primary Popular/Batch Urgency Tag */}
              {tier.isPrimary && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-primary text-[#0B0428] font-bold font-display text-[10px] tracking-wider uppercase px-4 py-0.5 rounded-full shadow-lg">
                  Limited Spots • Cohort Pricing
                </div>
              )}

              <div>
                {/* Header */}
                <div className="text-left mb-6">
                  <span className="text-[10px] text-brand-primary font-bold uppercase tracking-wider block mb-1">
                    {tier.badge}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-brand-textSecondary mt-2 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-brand-border/60 mb-6" />

                {/* Price Display */}
                <div className="text-left mb-6 flex items-baseline gap-2.5 flex-wrap">
                  {tier.strikePrice && (
                    <span className="text-sm md:text-base text-brand-textSecondary line-through font-medium">
                      {tier.strikePrice}
                    </span>
                  )}
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white">
                    {tier.price}
                  </span>
                  <span className="text-xs text-brand-textSecondary block mt-1 w-full">
                    {tier.priceNote}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-brand-border/40 mb-6" />

                {/* Features List */}
                <ul className="space-y-3.5 mb-8 text-left">
                  {/* Included Items */}
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-white/90">
                      <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}

                  {/* Not Included Items */}
                  {tier.notIncluded?.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-brand-textSecondary/40 line-through">
                      <Check className="w-4 h-4 text-brand-border shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={tier.ctaLink}
                  className={`group flex items-center justify-center gap-1.5 w-full py-2.5 px-5 rounded-xl font-bold text-xs md:text-sm transition-all duration-200 ${
                    tier.isPrimary
                      ? 'bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] shadow-md shadow-brand-primary/20 hover:scale-[1.02]'
                      : 'border border-white/20 text-white hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
