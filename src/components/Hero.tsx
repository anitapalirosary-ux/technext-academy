'use client';

import { motion } from 'framer-motion';
import { Play, MessageCircle, Calendar, Users, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenModal?: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="home" className="relative flex items-center justify-center pt-24 md:pt-28 pb-10 md:pb-14 overflow-hidden bg-brand-bg">
      {/* Background Looping Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.14] pointer-events-none z-0"
      >
        <source
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e339f417da208ce12040cb4e92a&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Background Overlays & Decorative Grids */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.08)_0%,transparent_70%)] z-10 pointer-events-none" />
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none bg-[linear-gradient(to_right,#00ED64_1px,transparent_1px),linear-gradient(to_bottom,#00ED64_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating Animated Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Side: Text and Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Accent Chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-semibold tracking-wider uppercase mb-3.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping" />
            Admissions Open • Industry Mentorship
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-bold tracking-tight leading-[1.15] mb-3.5 text-white"
          >
            Bridge the gap between coding &amp; <span className="text-gradient">a real tech career.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-brand-textSecondary max-w-xl mb-5 leading-relaxed"
          >
            Cohort-based preparatory programs designed by working engineers. 
            Get mock interviews, direct mentorship, and referrals — rather than 
            vague course catalogs.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 items-center mb-6 w-full sm:w-auto"
          >
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105"
            >
              <span>Apply for Session</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            
            <a
              href="https://chat.whatsapp.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-primary text-white hover:text-brand-primary bg-brand-surface/40 hover:bg-brand-surface/80 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-current text-brand-primary" />
              <span>Join WhatsApp Group</span>
            </a>
          </motion.div>

          {/* Updated Live Info Session Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-xl bg-brand-surface/90 border border-brand-primary/30 p-3.5 md:p-4 rounded-2xl backdrop-blur-md relative overflow-hidden shadow-lg shadow-black/40"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Next Live Info Session: Q&amp;A
                </span>
              </div>
              <span className="text-[11px] font-medium text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10 w-fit">
                Mon, 21st September 2026 — 2:00 PM IST
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-brand-border/60">
              <div>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-xs md:text-sm font-semibold text-white">1-Hour Live Session Demo</span>
                  <span className="text-xs text-white/50 line-through">₹500</span>
                  <span className="text-sm font-bold text-brand-primary">₹99</span>
                </div>
                <p className="text-[11px] md:text-xs text-brand-textSecondary">
                  Starting now — join before we close the room!
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs px-3.5 py-2 rounded-xl transition-all duration-200 shadow-md shadow-brand-primary/20 hover:scale-[1.02] shrink-0"
              >
                <span>Reserve Your Seat for ₹99</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated SVG Graphic */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
          {/* Animated SVG Path Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full max-w-[400px] h-[400px] relative flex items-center justify-center"
          >
            {/* Ambient Background Glow behind graphic */}
            <div className="absolute inset-0 bg-brand-primary/5 rounded-full filter blur-2xl" />

            {/* Custom SVG Design */}
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full relative z-10"
            >
              {/* Outer Glowing Hexagon */}
              <motion.path
                d="M200 40 L340 120 L340 280 L200 360 L60 280 L60 120 Z"
                stroke="url(#svg-gradient-1)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />

              {/* Inner Hexagon */}
              <motion.path
                d="M200 80 L300 140 L300 260 L200 320 L100 260 L100 140 Z"
                stroke="url(#svg-gradient-2)"
                strokeWidth="1.5"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2.5, delay: 0.3, ease: 'easeInOut' }}
              />

              {/* Decorative Tech Grid Lines & Circles */}
              <circle cx="200" cy="200" r="8" fill="#00ED64" className="animate-pulse" />
              <line x1="200" y1="40" x2="200" y2="80" stroke="#00ED64" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="200" y1="320" x2="200" y2="360" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="60" y1="280" x2="100" y2="260" stroke="#00ED64" strokeWidth="1.5" />
              <line x1="340" y1="120" x2="300" y2="140" stroke="#FFFFFF" strokeWidth="1.5" />

              {/* Interactive Floating Node Lines */}
              <motion.path
                d="M100 140 L200 200 L300 140"
                stroke="#00ED64"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.path
                d="M200 200 L200 320"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />

              {/* Glowing SVG Gradients */}
              <defs>
                <linearGradient id="svg-gradient-1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00ED64" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
                <linearGradient id="svg-gradient-2" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#00ED64" />
                </linearGradient>
              </defs>
            </svg>

            {/* Micro-Card Float Overlay 1: Working Mentors & Startups */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-brand-surface/90 border border-brand-border/80 backdrop-blur px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-xl"
            >
              <div className="p-1 rounded bg-brand-primary/10 text-brand-primary">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-textSecondary uppercase tracking-wider font-semibold">Mentorship</span>
                <span className="text-xs font-bold text-white">Working Mentors & Startups</span>
              </div>
            </motion.div>

            {/* Micro-Card Float Overlay 2: Interview Readiness & Technology-Focused */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-brand-surface/90 border border-brand-border/80 backdrop-blur px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-xl"
            >
              <div className="p-1 rounded bg-brand-primary/10 text-brand-primary">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-textSecondary uppercase tracking-wider font-semibold">Readiness</span>
                <span className="text-xs font-bold text-white">Interview Readiness & Technology-Focused</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
