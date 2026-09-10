'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveSessionModal from '@/components/LiveSessionModal';
import {
  Code2,
  Terminal,
  Video,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  Layers,
  ShieldCheck,
  Cpu,
  Target
} from 'lucide-react';

const WHAT_WE_OFFER = [
  {
    icon: Code2,
    title: 'Technology Learning',
    desc: 'Practical .NET, Web API, SQL Server, Azure, and modern software architecture.',
  },
  {
    icon: Terminal,
    title: 'Interview Preparation',
    desc: 'Hands-on technical interview readiness covering real design patterns and coding scenarios.',
  },
  {
    icon: Video,
    title: 'Live Sessions',
    desc: 'Live interactive sessions focusing on architecture, code reviews, and direct Q&A.',
  },
  {
    icon: TrendingUp,
    title: 'Career Guidance',
    desc: 'Practical advice to bridge the gap between intermediate coding and production engineering.',
  },
];

const TECH_FOCUS = [
  'C# / .NET',
  'ASP.NET Core',
  'Web API',
  'SQL Server',
  'Azure Cloud',
  'System Design',
  'AI-Assisted Development',
];

const WHY_US_FEATURES = [
  {
    icon: Award,
    title: '10+ Years Industry Experience',
    desc: 'Led by seasoned software engineers with real enterprise delivery track records.',
  },
  {
    icon: Cpu,
    title: 'Practical & Production-Oriented',
    desc: 'Hands-on development approaches mirroring genuine production environments.',
  },
  {
    icon: Target,
    title: 'Realistic Interview Focus',
    desc: 'Calibrated assessments covering live problem solving, system design, and edge cases.',
  },
  {
    icon: Layers,
    title: 'Modern Enterprise Tech Stack',
    desc: 'In-demand technologies centered around modern .NET 8/9, Cloud, and scalable databases.',
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-textPrimary overflow-hidden font-sans">
      {/* Top Navigation */}
      <Header />

      {/* SECTION A: HERO */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden bg-brand-bg">
        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-semibold tracking-wider uppercase mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping" />
            Software Engineering &amp; Interview Mentorship
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Learn. Practice. Prepare. <span className="text-brand-primary">Grow.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-brand-textSecondary max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Practical technology learning and interview preparation led by real software engineering experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center justify-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-[1.03]"
            >
              <span>Apply for Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/interview-prep"
              className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-primary text-white hover:text-brand-primary bg-brand-surface/50 hover:bg-brand-surface/80 px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200"
            >
              <span>Start Interview Preparation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION B: WHAT WE OFFER (4-Card Grid) */}
      <section className="relative py-14 md:py-18 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Core Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
              What We <span className="text-brand-primary">Offer</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-textSecondary">
              Everything you need to level up your engineering capabilities and crack technical interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHAT_WE_OFFER.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-surface border border-brand-border/80 hover:border-brand-primary/50 rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,237,100,0.08)] group flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 bg-brand-bg border border-brand-border rounded-xl w-fit text-brand-primary mb-4 group-hover:border-brand-primary/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-textSecondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION C: TECHNOLOGY FOCUS (Badge / Tag List) */}
      <section className="relative py-12 md:py-14 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3 block">
            Target Stack
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-6">
            Technology <span className="text-brand-primary">Focus</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {TECH_FOCUS.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-brand-surface border border-brand-border/80 text-white/90 hover:text-brand-primary hover:border-brand-primary/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: WHY TECHNEXT ACADEMY (Simple 4-Column Feature Row) */}
      <section className="relative py-14 md:py-18 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              The Standard
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Why <span className="text-brand-primary">TechNext Academy</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-textSecondary">
              Built on real engineering practitioner experience, not generic tutorials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US_FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-surface/70 border border-brand-border/80 rounded-2xl p-5 sm:p-6 text-left hover:border-brand-primary/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl w-fit text-brand-primary mb-3.5">
                      <Icon className="w-4 h-4 sm:w-5 h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold font-display text-white mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-brand-textSecondary leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION E: UPCOMING LIVE SESSION (Single Card Spotlight) */}
      <section className="relative py-14 md:py-18 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Live Mentorship Spotlight
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Upcoming <span className="text-brand-primary">Live Session</span>
            </h2>
          </div>

          {/* Spotlight Card */}
          <div className="bg-brand-surface border border-brand-primary/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-border/60">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-bold text-[#0B0428] bg-brand-primary px-3 py-0.5 rounded-full mb-2.5">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>Interactive Q&amp;A Room</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Next Live Info Session: Q&amp;A
                </h3>
              </div>

              {/* Price Callout */}
              <div className="text-left md:text-right shrink-0">
                <div className="flex items-baseline md:justify-end gap-2">
                  <span className="text-2xl sm:text-3xl font-display font-black text-brand-primary">
                    ₹99
                  </span>
                  <span className="text-xs sm:text-sm text-brand-textSecondary line-through font-medium">
                    Regular ₹500
                  </span>
                </div>
                <span className="text-[10px] text-white/70 font-mono">1-Hour Live Session</span>
              </div>
            </div>

            {/* Event Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
              <div className="p-3.5 rounded-xl bg-brand-bg/80 border border-brand-border flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-surface text-brand-primary shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-textSecondary block uppercase font-mono">Date &amp; Time</span>
                  <p className="text-xs sm:text-sm font-bold text-white">Monday, 21st September 2026 — 2:00 PM IST</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-bg/80 border border-brand-border flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-surface text-brand-primary shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-textSecondary block uppercase font-mono">Format &amp; Duration</span>
                  <p className="text-xs sm:text-sm font-bold text-white">1-Hour Live Session • Online (Google Meet)</p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border/60">
              <p className="text-xs text-brand-textSecondary">
                Instant confirmation email + calendar invite provided upon registration.
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-brand-primary/20 hover:scale-[1.02] shrink-0"
              >
                <span>Reserve Your Seat for ₹99</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: FINAL CTA */}
      <section className="relative py-16 md:py-20 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-brand-surface border border-brand-primary/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight leading-tight">
              Ready to accelerate your technical skills and <span className="text-brand-primary">interview readiness?</span>
            </h2>

            <div className="flex justify-center mt-6">
              <Link
                href="/interview-prep"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-8 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105"
              >
                <span>Start Interview Preparation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Live Session Reservation Modal */}
      <LiveSessionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Footer Navigation */}
      <Footer />
    </main>
  );
}


