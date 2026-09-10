'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Interview Prep', href: '/interview-prep' },
  { label: 'Live Sessions', href: '/live-sessions' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Automatically close mobile menu whenever path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0428]/95 backdrop-blur-md border-b border-brand-border/70 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Full-width Centered Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between">
        {/* Brand Text Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-brand-primary transition-colors">
            TechNext <span className="text-brand-primary">Academy</span>
          </span>
        </Link>

        {/* Desktop Main Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs md:text-sm font-medium tracking-wide transition-colors rounded-lg ${
                  isActive
                    ? 'text-brand-primary font-semibold bg-brand-primary/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Account Menu (Right Side) */}
        <div className="hidden sm:flex items-center gap-3 md:gap-4 shrink-0">
          <Link
            href="/login"
            className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${
              pathname === '/login'
                ? 'text-brand-primary font-semibold bg-brand-primary/10'
                : 'text-white/80 hover:text-white hover:bg-white/5'
            }`}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="group relative inline-flex items-center justify-center gap-1.5 text-xs md:text-sm font-bold bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-4 py-2 rounded-lg overflow-hidden transition-all duration-200 shadow-md shadow-brand-primary/20 hover:scale-[1.02]"
          >
            <span>Sign Up</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white/90 hover:text-brand-primary transition-colors p-2 rounded-lg hover:bg-white/5"
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Full-width Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full bg-[#0B0428]/98 border-b border-brand-border/80 backdrop-blur-2xl px-6 py-5 flex flex-col gap-4 lg:hidden shadow-2xl shadow-black/90 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg transition-all text-xs md:text-sm font-medium ${
                      isActive
                        ? 'bg-brand-primary/15 text-brand-primary font-semibold border border-brand-primary/30'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-brand-primary' : 'text-white/40'}`} />
                  </Link>
                );
              })}
            </div>

            <div className="h-[1px] bg-brand-border/60" />

            {/* Mobile Account Menu */}
            <div className="flex flex-col gap-2.5 pt-1">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className={`text-center py-2.5 text-xs md:text-sm font-medium rounded-lg transition-colors ${
                  pathname === '/login'
                    ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 text-center py-2.5 text-xs md:text-sm font-bold bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] rounded-lg shadow-md shadow-brand-primary/20 transition-all"
              >
                <span>Sign Up</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


