'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CheckCircle2,
  ArrowRight,
  Lock,
  Mail,
  AlertCircle,
  X,
  Home,
  BookOpen
} from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successData, setSuccessData] = useState<{
    name: string;
    email: string;
    role: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to sign in. Please check your credentials.');
        setLoading(false);
        return;
      }

      // Save user session in localStorage
      if (typeof window !== 'undefined') {
        const userData = {
          id: data.user?.id,
          name: data.user?.name || email.split('@')[0],
          email: data.user?.email || email.trim(),
          phone: data.user?.phone || '',
          role: data.user?.role || 'student',
          loggedIn: true,
          timestamp: new Date().toISOString(),
        };
        localStorage.setItem('technext_user', JSON.stringify(userData));
      }

      // Trigger "Login Successful" popup
      setSuccessData({
        name: data.user?.name || email.split('@')[0],
        email: data.user?.email || email.trim(),
        role: data.user?.role || 'student',
      });

      // Clear input fields
      setEmail('');
      setPassword('');
      setLoading(false);
    } catch (err: any) {
      console.error('Login error:', err);
      setError('A network error occurred. Please check your connection and try again.');
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-textPrimary overflow-hidden font-sans flex flex-col justify-between">
      {/* Navigation Header */}
      <Header />

      {/* Main Section */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden bg-brand-bg flex-1 flex items-center">
        {/* Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Info & Benefits */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-[11px] font-semibold tracking-wider uppercase mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping" />
                Student Sign In
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight mb-3">
                Welcome Back to <span className="text-gradient">TechNext Academy</span>
              </h1>

              <p className="text-xs md:text-sm text-brand-textSecondary mb-6 leading-relaxed">
                Log in to access your registered training courses, session links, and personalized engineering learning resources.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>Access enrolled live masterclasses &amp; session recordings</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>Review architectural blueprints and practice guides</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>Direct connection with enterprise mentors</span>
                </div>
              </div>
            </div>

            {/* Right Col: Login Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-brand-surface border border-brand-border/80 rounded-3xl p-6 md:p-8 shadow-2xl relative text-left">
                <div className="mb-6">
                  <h2 className="text-xl font-display font-bold text-white mb-1">
                    Candidate Login
                  </h2>
                  <p className="text-xs text-brand-textSecondary">
                    Enter your registered email and password to sign in.
                  </p>
                </div>

                {error && (
                  <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Email Address */}
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Email Address <span className="text-brand-primary">*</span>
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

                  {/* Field 2: Password */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-medium text-white/80">
                        Password <span className="text-brand-primary">*</span>
                      </label>
                      <Link
                        href="/forgot-password"
                        className="text-[11px] text-brand-primary hover:underline"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs md:text-sm py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-brand-primary/20 hover:scale-[1.01] disabled:opacity-50"
                  >
                    <span>{loading ? 'Signing In...' : 'Login'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Bottom Link: Don't have an account? Create Account */}
                <div className="mt-6 pt-4 border-t border-brand-border/60 text-center text-xs text-brand-textSecondary">
                  Don&apos;t have an account?{' '}
                  <Link
                    href="/signup"
                    className="text-brand-primary hover:underline font-semibold"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Login Successful Popup Modal */}
      {successData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0428]/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-brand-surface border border-brand-primary/50 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative text-center">
            {/* Close Button */}
            <button
              onClick={() => setSuccessData(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-bg border border-brand-border hover:border-brand-primary text-white hover:text-brand-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Success Icon */}
            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary text-brand-primary flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(0,237,100,0.25)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-brand-primary font-bold block mb-1">
              Authentication Verified
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-2">
              Login Successful!
            </h3>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed mb-5">
              Welcome back, <strong className="text-white">{successData.name}</strong>. You have successfully logged in to your TechNext Academy account.
            </p>

            {/* Session Info */}
            <div className="bg-brand-bg/80 border border-brand-border rounded-2xl p-4 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-brand-textSecondary">Account Email:</span>
                <span className="font-semibold text-white">{successData.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-textSecondary">Account Role:</span>
                <span className="font-semibold text-brand-primary uppercase font-mono text-[10px] bg-brand-surface px-2 py-0.5 rounded border border-brand-border">{successData.role}</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs py-2.5 rounded-xl transition-all shadow-md hover:scale-105"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Go to Home</span>
              </Link>
              <Link
                href="/interview-test"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-bg border border-brand-border hover:border-brand-primary text-white hover:text-brand-primary text-xs font-semibold py-2.5 rounded-xl transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Take Assessment</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}
