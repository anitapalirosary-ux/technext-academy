'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, UsersRound, Award, Milestone } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    icon: UsersRound,
    title: 'FAANG & Startup Mentors',
    desc: 'Every lecture, Q&A, and review is led by working software engineers who actually write production code, not professional online teachers.',
    color: 'from-brand-primary/15 to-transparent',
  },
  {
    icon: Award,
    title: 'Deep Mock Interviews',
    desc: '3 structured stages of mock interview rounds (Fundamentals, Domain-specific, and HR) accompanied by exhaustive performance feedback reports.',
    color: 'from-white/10 to-transparent',
  },
  {
    icon: ShieldCheck,
    title: 'Curated Cohorts (Max 30)',
    desc: 'We limit class sizes to ensure high touchpoints. Get personalized resume polishing, regular code review submissions, and direct Slack access.',
    color: 'from-brand-primary/15 to-transparent',
  },
  {
    icon: Milestone,
    title: 'Outcome-Oriented Roadmap',
    desc: 'No generic slide decks. Our curriculum focuses strictly on job-relevant patterns, web architecture, and clean, readable coding styles.',
    color: 'from-white/10 to-transparent',
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative py-12 md:py-16 bg-brand-bg overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2"
          >
            The Practitioner Differentiator
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3"
          >
            We are not a course marketplace. We are <span className="text-gradient">a launchpad.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-brand-textSecondary leading-relaxed"
          >
            Generic prep platforms sell content libraries that are easily found on YouTube. 
            TechNext Academy focuses on mentor accountability, peer growth, and direct feedback.
          </motion.p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {DIFFERENTIATORS.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-brand-surface border border-brand-border/60 hover:border-brand-primary/40 rounded-2xl p-5 md:p-6 transition-all duration-300 overflow-hidden flex flex-col md:flex-row gap-4 md:gap-5 items-start hover:shadow-[0_0_30px_rgba(0,237,100,0.06)]"
              >
                {/* Subtle gradient accent background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${diff.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`} />

                {/* Left: Icon Container */}
                <div className="p-3 bg-brand-bg border border-brand-border rounded-xl text-brand-primary group-hover:text-white group-hover:border-brand-primary/50 transition-colors duration-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Right: Copy */}
                <div className="flex flex-col text-left">
                  <h3 className="text-sm md:text-base font-bold font-display text-white mb-1.5 group-hover:text-brand-primary transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-brand-textSecondary leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
