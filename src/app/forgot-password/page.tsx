'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, ArrowRight, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please provide a valid registered email address.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-textPrimary overflow-hidden font-sans flex flex-col justify-between">
      <Header />

      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden bg-brand-bg flex-1 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="w-full max-w-md mx-auto px-4 relative z-20">
          <div className="bg-brand-surface border border-brand-border/80 rounded-3xl p-6 md:p-8 shadow-2xl text-left">
            {!submitted ? (
              <>
                <div className="mb-6">
                  <h1 className="text-2xl font-display font-bold text-white mb-2">
                    Reset Password
                  </h1>
                  <p className="text-xs text-brand-textSecondary leading-relaxed">
                    Enter the email associated with your TechNext account, and we will send password reset instructions.
                  </p>
                </div>

                {error && (
                  <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Registered Email <span className="text-brand-primary">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs md:text-sm py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-brand-primary/20 hover:scale-[1.01] disabled:opacity-50"
                  >
                    <span>{loading ? 'Sending Instructions...' : 'Send Reset Link'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                </div>
                <h2 className="text-lg font-bold text-white mb-2">Check Your Inbox</h2>
                <p className="text-xs text-brand-textSecondary mb-6 leading-relaxed">
                  We have sent password reset instructions to <strong className="text-white">{email}</strong>.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-brand-border/60 text-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:underline font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Login</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
