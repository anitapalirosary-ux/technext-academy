'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Clock, Award, CheckCircle } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS_ITEMS = [
  {
    icon: Briefcase,
    label: 'Placements & Internships',
    target: 500,
    suffix: '+',
    desc: 'Engineering placements facilitated.',
  },
  {
    icon: Clock,
    label: 'Years Mentor Experience',
    target: 15,
    suffix: '+',
    desc: 'Collective industry background.',
  },
  {
    icon: Award,
    label: 'Mock Interviews Conducted',
    target: 300,
    suffix: '+',
    desc: 'Detailed feed-forward rounds.',
  },
  {
    icon: CheckCircle,
    label: 'Practitioner Mentorship',
    target: 100,
    suffix: '%',
    desc: 'Led by engineers, not marketplaces.',
  },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = document.querySelectorAll('.stat-number-val');
      
      counters.forEach((counter) => {
        const targetAttr = counter.getAttribute('data-target');
        if (!targetAttr) return;
        const targetValue = parseInt(targetAttr, 10);
        const obj = { val: 0 };
        
        gsap.to(obj, {
          val: targetValue,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            counter.textContent = Math.floor(obj.val).toString();
          },
        });
      });

      // Subtle stagger animation for stats blocks
      gsap.from('.stat-card-item', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stats-grid-container',
          start: 'top 85%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-10 md:py-12 bg-brand-bg border-y border-brand-border/40 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="stats-grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STATS_ITEMS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card-item glass-card p-5 md:p-6 rounded-2xl flex flex-col items-start text-left relative overflow-hidden group hover:border-brand-primary/40"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-brand-primary group-hover:w-full transition-all duration-500" />
                
                {/* Floating Icon Background */}
                <div className="p-2.5 bg-brand-surface border border-brand-border rounded-xl mb-3.5 text-brand-primary group-hover:text-white group-hover:border-brand-primary/45 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex items-baseline gap-1 font-display font-bold text-3xl md:text-4xl mb-1 text-white">
                  <span
                    className="stat-number-val text-gradient"
                    data-target={stat.target}
                  >
                    0
                  </span>
                  <span className="text-white/90 text-2xl md:text-3xl">{stat.suffix}</span>
                </div>

                <h3 className="text-xs md:text-sm font-semibold tracking-wide text-white/90 mb-1 font-display uppercase">
                  {stat.label}
                </h3>
                
                <p className="text-xs text-brand-textSecondary leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
