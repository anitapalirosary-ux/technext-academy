'use client';

import { useEffect, useState } from 'react';

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-brand-surface border-b border-brand-border/60 py-2.5 text-center text-xs md:text-sm font-sans tracking-wide text-brand-textPrimary relative z-50 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
      </span>
      <span>
        <strong>Founding Batch Cohort:</strong> Less than <span className="text-brand-primary font-bold">4 seats left</span>.
      </span>
      <span className="hidden sm:inline text-brand-border">|</span>
      <span className="font-mono bg-brand-bg/50 px-2 py-0.5 rounded border border-brand-border text-brand-primary text-xs font-semibold">
        Fires closing: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
    </div>
  );
}
