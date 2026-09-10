'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, MessageCircle, Globe, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-brand-surface border-t border-brand-border/60 pt-10 md:pt-12 pb-6 overflow-hidden font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 mb-8 border-b border-brand-border/60">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <Link href="/" className="mb-3 block group">
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-brand-primary transition-colors">
                TechNext <span className="text-brand-primary">Academy</span>
              </span>
            </Link>
            <p className="text-xs md:text-sm text-brand-textSecondary max-w-md mb-4 leading-relaxed">
              A tech-focused career-readiness and industry mentorship academy. 
              We help early-career developers become job-ready through practical software engineering experience 
              and realistic interview preparation.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:anita.palirosary@gmail.com"
                className="p-2.5 rounded-lg bg-brand-bg hover:bg-brand-border/50 border border-brand-border text-brand-textSecondary hover:text-brand-primary transition-colors duration-300"
                aria-label="Email support"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917812804057?text=Hi%2C%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20your%20courses%20at%20TechNext%20Academy.%20Could%20you%20please%20share%20the%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-brand-bg hover:bg-brand-border/50 border border-brand-border text-brand-textSecondary hover:text-brand-primary transition-colors duration-300"
                aria-label="WhatsApp Direct Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/anitapalirosary-ux/technext-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-brand-bg hover:bg-brand-border/50 border border-brand-border text-brand-textSecondary hover:text-brand-primary transition-colors duration-300"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Quick Links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold font-display uppercase tracking-widest text-brand-textPrimary mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <Link href="/about" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/interview-prep" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link href="/live-sessions" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Live Sessions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Access */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold font-display uppercase tracking-widest text-brand-textPrimary mb-4">
              Portal Access
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <Link href="/login" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Student Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-textSecondary hover:text-brand-primary transition-colors">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-textSecondary">
          <p>© {new Date().getFullYear()} TechNext Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-brand-primary transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/refund-cancellation-policy" className="hover:text-brand-primary transition-colors">
              Refund & Cancellation Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
