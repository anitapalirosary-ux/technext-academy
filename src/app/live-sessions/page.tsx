'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveSessionModal from '@/components/LiveSessionModal';
import {
  Calendar,
  Clock,
  Video,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Users2,
  GraduationCap,
  TrendingUp,
  Briefcase,
  Check,
  FileText,
  PlayCircle,
  MessageCircle,
  Layers,
  Code2,
  Terminal,
  ShieldCheck,
  X,
  Phone,
  Mail,
  User
} from 'lucide-react';

const COVERAGE_AREAS = [
  {
    icon: Code2,
    title: 'Interview Questions',
    subtitle: 'Core & Enterprise Stack',
    desc: 'C# · .NET · Web API · SQL · Azure',
    details: 'Live walkthrough of high-frequency interview questions, practical edge cases, and how interviewers evaluate your reasoning.',
  },
  {
    icon: Layers,
    title: 'Real Project Questions',
    subtitle: 'Impact & Architecture',
    desc: 'How to explain your project, role, challenges, and solutions.',
    details: 'Master the STAR framework for describing architecture decisions, database optimizations, and handling production issues.',
  },
  {
    icon: TrendingUp,
    title: 'Career Questions',
    subtitle: 'Growth & Strategy',
    desc: 'Skills to improve, interview preparation, and career direction.',
    details: 'Clear actionable roadmap guidance for transitioning from junior to senior engineer and navigating tech hiring.',
  },
  {
    icon: MessageCircle,
    title: 'Live Q&A',
    subtitle: 'Direct Mentor Interaction',
    desc: 'Bring your questions and get answers during the session.',
    details: 'Unfiltered, direct 1-on-1 Q&A with Senior Software Engineers to solve your specific resume, tech, or interview doubts.',
  },
];

const TARGET_AUDIENCES = [
  {
    icon: GraduationCap,
    title: 'Students',
    desc: 'Preparing for their first technical interview.',
    badge: 'Campus & Entry Level',
  },
  {
    icon: Users2,
    title: 'Fresh Graduates',
    desc: 'Looking for practical interview guidance and real project framing.',
    badge: 'Job Seekers',
  },
  {
    icon: Code2,
    title: 'Developers',
    desc: 'Preparing for their next high-growth .NET and cloud opportunity.',
    badge: '1-3 Years Experience',
  },
  {
    icon: Briefcase,
    title: 'Working Professionals',
    desc: 'Looking to improve their technical depth, architecture, and senior interview skills.',
    badge: 'Career Upgraders',
  },
];

const DELIVERABLES = [
  { text: '1-hour live session', icon: Video },
  { text: 'Direct Q&A with mentor', icon: MessageCircle },
  { text: 'Practical interview guidance', icon: ShieldCheck },
  { text: 'Real-world examples & code reviews', icon: Terminal },
  { text: 'Curated session study resources', icon: FileText },
  { text: 'Lifetime recording access', icon: PlayCircle },
];

const HOW_TO_JOIN_STEPS = [
  {
    step: '01',
    title: 'Reserve Your Seat',
    desc: 'Click "Reserve Your Seat for ₹99" to claim your spot before batch limits fill.',
  },
  {
    step: '02',
    title: 'Complete Registration',
    desc: 'Enter your basic details and complete the quick ₹99 token confirmation.',
  },
  {
    step: '03',
    title: 'Get Session Details',
    desc: 'Receive the direct Google Meet / Zoom link and calendar invite via email & WhatsApp.',
  },
  {
    step: '04',
    title: 'Join Live',
    desc: 'Join the live interactive room on Mon, 21st September 2026 at 2:00 PM IST.',
  },
];

export default function LiveSessionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-textPrimary overflow-hidden font-sans">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-10 md:pb-14 overflow-hidden bg-brand-bg">
        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.08)_0%,transparent_70%)] z-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none bg-[linear-gradient(to_right,#00ED64_1px,transparent_1px),linear-gradient(to_bottom,#00ED64_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-20 text-center">
          {/* Accent Chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-[11px] font-semibold tracking-wider uppercase mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping" />
            Live Mentorship &amp; Q&amp;A
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-3"
          >
            Learn. Ask. <span className="text-gradient">Get Practical Answers.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-medium text-brand-primary max-w-2xl mx-auto mb-4"
          >
            Short, focused live sessions for students, freshers, and working professionals.
          </motion.p>

          {/* Mantra Ribbon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block bg-brand-surface/90 border border-brand-primary/40 px-5 md:px-8 py-2.5 rounded-xl backdrop-blur-md shadow-lg shadow-brand-primary/10 mb-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 font-display font-bold text-xs sm:text-sm md:text-base text-white">
              <span className="text-brand-primary">Live Session</span>
              <span className="text-brand-border">•</span>
              <span className="text-white">Real Questions</span>
              <span className="text-brand-border">•</span>
              <span className="text-gradient">Practical Guidance</span>
            </div>
          </motion.div>

          {/* Jump Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 items-center justify-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105"
            >
              <span>Reserve Your Seat for ₹99</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="#session-details"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-primary text-white hover:text-brand-primary bg-brand-surface/40 hover:bg-brand-surface/80 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200"
            >
              <span>Session Agenda</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Live Session Card Section */}
      <section id="session-details" className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Scheduled Event
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              Upcoming <span className="text-gradient">Live Session</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary">
              Direct practical mentorship tailored for immediate interview readiness.
            </p>
          </div>

          {/* Featured Session Glass Card */}
          <div className="bg-brand-surface border border-brand-primary/50 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-border/60">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-bold text-[#0B0428] bg-brand-primary px-3 py-1 rounded-full mb-3 shadow-md">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>Limited Seats Available</span>
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                  Interview Q&amp;A — .NET &amp; Career Preparation
                </h3>
              </div>

              {/* Pricing Callout */}
              <div className="text-left md:text-right shrink-0">
                <div className="flex items-baseline md:justify-end gap-2">
                  <span className="text-3xl md:text-4xl font-display font-black text-brand-primary">
                    ₹99
                  </span>
                  <span className="text-sm md:text-base text-brand-textSecondary line-through font-medium">
                    ₹500
                  </span>
                </div>
                <span className="text-[10px] text-white/70 font-mono">Special Session Price</span>
              </div>
            </div>

            {/* Event Logistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6">
              <div className="p-3.5 rounded-2xl bg-brand-bg/80 border border-brand-border">
                <div className="flex items-center gap-2 text-brand-primary text-xs font-semibold mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Date</span>
                </div>
                <p className="text-xs md:text-sm font-bold text-white">Mon, 21st Sep 2026</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-brand-bg/80 border border-brand-border">
                <div className="flex items-center gap-2 text-brand-primary text-xs font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Time</span>
                </div>
                <p className="text-xs md:text-sm font-bold text-white">2:00 PM IST</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-brand-bg/80 border border-brand-border">
                <div className="flex items-center gap-2 text-brand-primary text-xs font-semibold mb-1">
                  <Video className="w-3.5 h-3.5" />
                  <span>Format</span>
                </div>
                <p className="text-xs md:text-sm font-bold text-white">1-Hour Live Session</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-brand-bg/80 border border-brand-border">
                <div className="flex items-center gap-2 text-brand-primary text-xs font-semibold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Platform</span>
                </div>
                <p className="text-xs md:text-sm font-bold text-white">Online (Google Meet)</p>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border/60">
              <p className="text-xs text-brand-textSecondary">
                Instant confirmation email + calendar invite provided upon registration.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-6 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105 shrink-0"
              >
                <span>Reserve Your Seat for ₹99</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* What We'll Cover Section */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Curriculum &amp; Discussions
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              What We&apos;ll <span className="text-gradient">Cover</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary">
              Concrete technical topics and high-yield interview frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COVERAGE_AREAS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-surface border border-brand-border/80 hover:border-brand-primary/50 rounded-2xl p-5 md:p-6 text-left transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,237,100,0.06)] group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl text-brand-primary group-hover:border-brand-primary/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold font-display text-white group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono text-brand-primary">{item.subtitle}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-brand-bg/70 border border-brand-border/60 rounded-xl mb-3">
                    <p className="text-xs md:text-sm font-semibold text-white">
                      {item.desc}
                    </p>
                  </div>

                  <p className="text-xs text-brand-textSecondary leading-relaxed">
                    {item.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Target Candidates
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              Who Can <span className="text-gradient">Join?</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary">
              Tailored value across all key career stages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TARGET_AUDIENCES.map((aud, idx) => {
              const Icon = aud.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-surface border border-brand-border/70 rounded-2xl p-5 text-left hover:border-brand-primary/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl w-fit text-brand-primary mb-3.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-brand-primary tracking-wider block mb-1">
                      {aud.badge}
                    </span>
                    <h3 className="text-base font-bold font-display text-white mb-2">
                      {aud.title}
                    </h3>
                    <p className="text-xs text-brand-textSecondary leading-relaxed">
                      {aud.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Session Inclusions
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              What You <span className="text-gradient">Get</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary">
              Everything included with your ₹99 seat registration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {DELIVERABLES.map((del, idx) => {
              const Icon = del.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-brand-surface border border-brand-border/80 flex items-center gap-3 hover:border-brand-primary/40 transition-colors"
                >
                  <div className="p-2 bg-brand-bg border border-brand-border rounded-xl text-brand-primary shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-white/90">
                    {del.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join (4 Steps) */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Simple Registration Process
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              How to <span className="text-gradient">Join</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary">
              Four quick steps to reserve your seat in the live room.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_TO_JOIN_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-brand-surface border border-brand-border/70 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-brand-primary mb-2 block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold font-display text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-brand-textSecondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Join? Final CTA Section */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="bg-brand-surface border border-brand-primary/40 rounded-3xl p-6 md:p-10 text-center shadow-2xl relative">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Ready to Join?
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3">
              Bring Your Questions. <span className="text-gradient">Leave With Clarity.</span>
            </h2>

            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed max-w-xl mx-auto mb-6">
              Join the live session on <strong>21st September at 2:00 PM IST</strong> for ₹99 and prepare smarter for your software engineering interviews.
            </p>

            {/* Primary Action Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-6 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105"
              >
                <span>Reserve Your Seat for ₹99</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Brand Signature */}
            <p className="text-xs md:text-sm font-display font-bold text-white">
              TechNext Academy
            </p>
            <p className="text-xs text-brand-primary font-semibold mt-0.5">
              Learn. Practice. Grow.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Reservation Modal */}
      <LiveSessionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Footer Navigation */}
      <Footer />
    </main>
  );
}
