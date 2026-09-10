'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code, Database, Globe, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PROGRAMS_DATA = [
  {
    icon: Globe,
    title: 'Frontend Ready Prep',
    duration: '6 Weeks Cohort',
    badge: 'Popular for Beginners',
    price: '₹14,999',
    originalPrice: '₹24,999',
    features: [
      'Modern UI Patterns & Tailwind CSS',
      'Advanced React & State Management',
      'Browser Performance & DOM Optimization',
      '1 Full-Length Mock Technical Interview',
      'Portfolio & Resume Audit',
    ],
    mentor: 'UI Engineer at Razorpay',
    ctaLink: '#apply',
  },
  {
    icon: Database,
    title: 'Backend & Systems Prep',
    duration: '8 Weeks Cohort',
    badge: 'Intermediate Developers',
    price: '₹18,999',
    originalPrice: '₹29,999',
    features: [
      'Node.js & Express REST APIs',
      'SQL & NoSQL Database Architectures',
      'Authentication, Cookies, & JWT Auth',
      'System Design & Microservices Basics',
      '1 Full-Length Backend Mock Interview',
    ],
    mentor: 'Backend Lead at Swiggy',
    ctaLink: '#apply',
  },
  {
    icon: Code,
    title: 'Fullstack Career Readiness',
    duration: '12 Weeks (Flagship)',
    badge: 'Best Value • Outcomes Focused',
    isFlagship: true,
    price: '₹24,999',
    originalPrice: '₹39,999',
    features: [
      'Complete Frontend + Backend Syllabi',
      'End-to-End Scalable App Deployment',
      'System Design & Web Security Patterns',
      '3 Mock Interviews (Tech, Domain, HR)',
      'Dedicated Referral & Job Prep Channel',
    ],
    mentor: 'SDE-2 at Microsoft & Swiggy Lead',
    ctaLink: '#apply',
  },
];

export default function Programs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.program-card', {
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.programs-grid',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="roadmap" className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
            Cohort Tracks
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-brand-textPrimary mb-3">
            Choose your path to <span className="text-gradient">job readiness.</span>
          </h2>
          <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
            Select the track matching your career goals. Each program is run by experienced 
            engineers with curated homework and real-world project portfolios.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROGRAMS_DATA.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <div
                key={index}
                className={`program-card group flex flex-col justify-between rounded-2xl p-5 md:p-6 transition-all duration-300 relative border ${
                  prog.isFlagship
                    ? 'bg-brand-surface border-brand-primary/60 shadow-[0_0_30px_rgba(0,237,100,0.1)]'
                    : 'bg-brand-surface/70 border-brand-border/60 hover:border-brand-primary/30'
                }`}
              >
                {/* Flagship Badge */}
                {prog.isFlagship && (
                  <div className="absolute -top-3 right-6 bg-brand-primary text-[#0B0428] font-bold font-display text-[10px] tracking-widest uppercase px-3 py-0.5 rounded-full shadow-lg">
                    Flagship Track
                  </div>
                )}

                <div>
                  {/* Top line details */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl text-brand-primary group-hover:border-brand-primary/45 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-white/80 bg-brand-border/40 px-3 py-1 rounded-full border border-brand-border/80">
                      {prog.duration}
                    </span>
                  </div>

                  {/* Program Title & Badge */}
                  <div className="mb-5 text-left">
                    <span className="text-[10px] text-brand-primary font-bold uppercase tracking-wider block mb-1">
                      {prog.badge}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold font-display text-white">
                      {prog.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-brand-border/60 mb-5" />

                  {/* Features List */}
                  <ul className="space-y-3 mb-7 text-left">
                    {prog.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 text-xs md:text-sm text-white/80 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Mentor details */}
                  <div className="mb-5 text-left p-3 rounded-xl bg-brand-bg/40 border border-brand-border/40 text-xs">
                    <span className="text-brand-textSecondary block mb-0.5">Primary Mentorship:</span>
                    <strong className="text-white font-medium">{prog.mentor}</strong>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-left">
                      <span className="text-[10px] text-brand-textSecondary line-through block leading-none mb-1">
                        {prog.originalPrice}
                      </span>
                      <span className="text-xl md:text-2xl font-bold font-display text-white">
                        {prog.price}
                      </span>
                    </div>
                    <span className="text-[10px] bg-brand-primary/10 border border-brand-primary/30 text-brand-primary px-2 py-0.5 rounded font-mono font-semibold">
                      Save {(100 - Math.round((parseInt(prog.price.replace(/[^\d]/g, '')) / parseInt(prog.originalPrice.replace(/[^\d]/g, ''))) * 100))}%
                    </span>
                  </div>

                  <a
                    href={prog.ctaLink}
                    className={`group flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl font-bold text-xs md:text-sm transition-all duration-200 ${
                      prog.isFlagship
                        ? 'bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] shadow-md shadow-brand-primary/20 hover:scale-[1.02]'
                        : 'border border-white/20 text-white hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5'
                    }`}
                  >
                    <span>Apply for Session</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
