'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, Sparkles, Terminal, Layers, UserCheck, Star } from 'lucide-react';

const INTERVIEW_ROUNDS = [
  {
    id: 'round-1',
    icon: Terminal,
    num: 'Round 01',
    title: 'Technical Fundamentals',
    duration: '45 Minutes',
    focus: 'Data Structures, Algorithms, & Logic Flow',
    details: [
      'Core language concepts (JavaScript ES6+, Java, or Python)',
      'Basic and intermediate DSA (Arrays, Strings, Trees, HashMaps)',
      'Dry running logic & handling edge cases',
      'Analysing Time and Space Complexities (Big O notation)',
    ],
  },
  {
    id: 'round-2',
    icon: Layers,
    num: 'Round 02',
    title: 'Domain & Web Architecture',
    duration: '60 Minutes',
    focus: 'Framework Patterns & Database Schema Design',
    details: [
      'React state flow, render cycles, and API lifecycle integrations',
      'REST & GraphQL endpoint design principles',
      'Database normalization, transactions, and index optimizations',
      'System design mock case studies (e.g., Shortener, Chat, Feed)',
    ],
  },
  {
    id: 'round-3',
    icon: UserCheck,
    num: 'Round 03',
    title: 'HR & Behavioral Fit',
    duration: '30 Minutes',
    focus: 'Communication, Projects Deep-Dive, & Fitment',
    details: [
      'STAR methodology review for past academic/freelance projects',
      'Conflict resolution, startup alignment, and career aspirations',
      'Simulated mock salary negotiations and questions for the interviewer',
      'Resume wording review and portfolio feedback audits',
    ],
  },
];

export default function InterviewProcess() {
  const [activeRound, setActiveRound] = useState(0);

  return (
    <section id="interviews" className="relative py-12 md:py-16 bg-brand-bg overflow-hidden border-t border-brand-border/40">
      {/* Background Decors */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
            Our Evaluation Process
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3">
            Structured <span className="text-gradient">Mock Interviews.</span>
          </h2>
          <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
            We simulate the interview stages of top tech companies. You don't just code — 
            you get measured reports that identify exact technical gaps.
          </p>
        </div>

        {/* Multi Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/* Left Column: Interactive Navigation & Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Rounds Selector Tabs */}
            <div className="flex flex-col gap-2.5 mb-5 md:mb-6">
              {INTERVIEW_ROUNDS.map((round, idx) => {
                const Icon = round.icon;
                const isSelected = activeRound === idx;
                return (
                  <button
                    key={round.id}
                    onClick={() => setActiveRound(idx)}
                    className={`w-full flex items-center justify-between p-4.5 rounded-xl border text-left transition-all duration-300 ${
                      isSelected
                        ? 'bg-brand-surface border-brand-primary/60 shadow-[0_0_20px_rgba(0,237,100,0.08)]'
                        : 'bg-brand-surface/40 border-brand-border/40 hover:border-brand-border/80'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-lg border transition-colors ${
                        isSelected
                          ? 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary'
                          : 'bg-brand-bg border-brand-border text-white/50'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-textSecondary uppercase tracking-widest">
                          {round.num}
                        </span>
                        <h3 className="text-sm md:text-base font-bold font-display text-white mt-0.5">
                          {round.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-primary font-mono px-2 py-1 rounded bg-brand-bg/60 border border-brand-border">
                      {round.duration}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Display Active Round Details */}
            <div className="bg-brand-surface border border-brand-border/60 p-5 md:p-6 rounded-2xl min-h-[200px] text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRound}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide">
                    Focus Area
                  </span>
                  <h4 className="text-base md:text-lg font-bold font-display text-white mt-1 mb-3">
                    {INTERVIEW_ROUNDS[activeRound].focus}
                  </h4>
                  
                  <div className="h-px bg-brand-border/40 mb-4" />

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {INTERVIEW_ROUNDS[activeRound].details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-brand-textSecondary leading-normal">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Simulated Feedback Dashboard Preview */}
          <div className="lg:col-span-5 flex items-center">
            <div className="w-full bg-brand-surface/90 border border-brand-primary/30 rounded-2xl p-6 relative overflow-hidden shadow-2xl text-left hover:border-brand-primary/50 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none" />
              
              {/* Header inside Report Card */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-brand-border/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-brand-textSecondary uppercase tracking-wider">Candidate Evaluation</h4>
                    <span className="text-sm font-bold text-white">Ketan Sharma (Frontend Prep)</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#0B0428] bg-brand-primary px-2.5 py-0.5 rounded uppercase font-mono shadow-sm">
                  SDE-1 Ready
                </span>
              </div>

              {/* Metrics Rating Grid */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-brand-textSecondary">Problem Solving & Coding Logic</span>
                    <strong className="text-white font-mono">8.5 / 10</strong>
                  </div>
                  <div className="w-full h-1.5 bg-brand-border rounded-full overflow-hidden">
                    <div className="h-full bg-brand-primary rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-brand-textSecondary">Web Architecture & React Flow</span>
                    <strong className="text-white font-mono">8.0 / 10</strong>
                  </div>
                  <div className="w-full h-1.5 bg-brand-border rounded-full overflow-hidden">
                    <div className="h-full bg-brand-primary rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-brand-textSecondary">Communication & Explanation</span>
                    <strong className="text-white font-mono">9.0 / 10</strong>
                  </div>
                  <div className="w-full h-1.5 bg-brand-border rounded-full overflow-hidden">
                    <div className="h-full bg-white/90 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
              </div>

              {/* Written Feed-forward Remarks */}
              <div className="p-4 bg-brand-bg/75 border border-brand-border rounded-xl mb-5 text-xs">
                <div className="flex items-center gap-1.5 text-brand-primary font-semibold mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Mentor Evaluator Feedback:</span>
                </div>
                <p className="text-brand-textSecondary leading-relaxed italic">
                  "Ketan demonstrated clear code structure and properly dry ran his edge cases. 
                  His explanation of custom React hooks was stellar. Recommend for early-career 
                  referrals at partner tech startups."
                </p>
              </div>

              {/* Star Badges */}
              <div className="flex items-center gap-2 text-[11px] text-brand-textSecondary">
                <div className="flex gap-0.5 text-brand-warning">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>Reviewed by SDE-2 Mentor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
