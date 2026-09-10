'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  MapPin,
  HelpCircle,
  User,
  AlertCircle
} from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+91', country: 'IN', label: 'India (+91)' },
  { code: '+1', country: 'US', label: 'USA / Canada (+1)' },
  { code: '+44', country: 'GB', label: 'UK (+44)' },
  { code: '+971', country: 'AE', label: 'UAE (+971)' },
  { code: '+65', country: 'SG', label: 'Singapore (+65)' },
  { code: '+61', country: 'AU', label: 'Australia (+61)' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

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
            Contact Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-3"
          >
            Let&apos;s <span className="text-gradient">Talk</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-medium text-brand-primary max-w-2xl mx-auto mb-3"
          >
            Have a question about our sessions, interview preparation, or technology learning?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs md:text-sm text-brand-textSecondary max-w-xl mx-auto"
          >
            We&apos;re here to help you move step by step toward industry readiness.
          </motion.p>
        </div>
      </section>

      {/* Get in Touch & Contact Form Split Section */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Get in Touch Channels */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div>
                <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest block mb-1">
                  Direct Channels
                </span>
                <h2 className="text-xl md:text-2xl font-bold font-display text-white mb-2">
                  Get in <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-xs text-brand-textSecondary leading-relaxed">
                  Reach out to us directly through any of the channels below for immediate assistance.
                </p>
              </div>

              {/* Channel 1: Email */}
              <div className="bg-brand-surface border border-brand-border/70 hover:border-brand-primary/40 rounded-2xl p-5 transition-all group">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl text-brand-primary shrink-0 group-hover:border-brand-primary/40 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-brand-textSecondary mb-0.5">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@technextacademy.com"
                      className="text-sm md:text-base font-bold text-white hover:text-brand-primary transition-colors block mb-1"
                    >
                      hello@technextacademy.com
                    </a>
                    <p className="text-xs text-brand-textSecondary leading-relaxed">
                      For general questions, session details, and learning-related enquiries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Channel 2: Phone */}
              <div className="bg-brand-surface border border-brand-border/70 hover:border-brand-primary/40 rounded-2xl p-5 transition-all group">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl text-brand-primary shrink-0 group-hover:border-brand-primary/40 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-brand-textSecondary mb-0.5">
                      Phone
                    </h3>
                    <a
                      href="tel:+919876543210"
                      className="text-sm md:text-base font-bold text-white hover:text-brand-primary transition-colors block mb-1"
                    >
                      +91 98765 43210
                    </a>
                    <p className="text-xs text-brand-textSecondary leading-relaxed">
                      Available for session and course-related enquiries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Channel 3: WhatsApp */}
              <div className="bg-brand-surface border border-brand-border/70 hover:border-brand-primary/40 rounded-2xl p-5 transition-all group">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl text-brand-primary shrink-0 group-hover:border-brand-primary/40 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-brand-textSecondary mb-0.5">
                      WhatsApp
                    </h3>
                    <span className="text-sm font-bold text-white block mb-1">
                      Chat with us on WhatsApp
                    </span>
                    <p className="text-xs text-brand-textSecondary leading-relaxed mb-3">
                      Get quick answers about upcoming live sessions, registration, and interview preparation.
                    </p>
                    <a
                      href="https://chat.whatsapp.com/placeholder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs transition-all shadow-md hover:scale-105"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Send Us a Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-brand-surface border border-brand-border/80 rounded-3xl p-6 md:p-8 shadow-2xl relative text-left">
                <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest font-bold block mb-1">
                  Message Form
                </span>
                <h2 className="text-xl md:text-2xl font-bold font-display text-white mb-1">
                  Send Us a <span className="text-gradient">Message</span>
                </h2>
                <p className="text-xs text-brand-textSecondary mb-6 leading-relaxed">
                  Have a question? Send us a message and we&apos;ll get back to you promptly.
                </p>

                {error && (
                  <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1">
                        Full Name <span className="text-brand-primary">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1">
                        Email Address <span className="text-brand-primary">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1">
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="w-36 shrink-0 bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl px-2.5 py-2 text-xs md:text-sm text-white outline-none appearance-none cursor-pointer"
                        >
                          {COUNTRY_CODES.map((item) => (
                            <option key={item.code} value={item.code} className="bg-brand-surface text-white">
                              {item.label}
                            </option>
                          ))}
                        </select>

                        <div className="relative flex-1">
                          <Phone className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1">
                        Message <span className="text-brand-primary">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl p-3 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs md:text-sm py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-brand-primary/20 hover:scale-[1.01] disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary text-brand-primary flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs text-brand-textSecondary max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out, <strong>{formData.name}</strong>. Our team will review your enquiry and respond to <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', countryCode: '+91', phone: '', message: '' });
                      }}
                      className="mt-2 px-5 py-2 rounded-full bg-brand-surface border border-brand-border text-white hover:text-brand-primary text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Looking for Interview Guidance? Banner Section */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="bg-brand-surface border border-brand-primary/40 rounded-3xl p-6 md:p-10 text-center shadow-2xl relative">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Direct Mentorship
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3">
              Looking for <span className="text-gradient">Interview Guidance?</span>
            </h2>

            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed max-w-xl mx-auto mb-6">
              You can also join one of our upcoming live sessions to ask your questions directly to senior software engineers.
            </p>

            <div className="flex justify-center mb-6">
              <Link
                href="/live-sessions"
                className="inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-6 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105"
              >
                <span>View Live Sessions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Brand Signature */}
            <p className="text-xs md:text-sm font-display font-bold text-white">
              TechNext Academy
            </p>
            <p className="text-xs text-brand-primary font-semibold mt-0.5">
              Learn. Practice. Prepare. Grow.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <Footer />
    </main>
  );
}
