'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CheckCircle2,
  ArrowRight,
  Lock,
  Mail,
  Sparkles,
  AlertCircle
} from 'lucide-react';

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextUrl = searchParams.get('next') || '/interview-test';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

      setLoading(false);
      const destination = decodeURIComponent(nextUrl);
      router.push(destination);
    } catch (err: any) {
      console.error('Login error:', err);
      setError('A network error occurred. Please check your connection and try again.');
      setLoading(false);
    }
  };

  const signupLink = nextUrl
    ? `/signup?next=${encodeURIComponent(nextUrl)}`
    : '/signup';

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Col: Info & Returning Candidate Context */}
        <div className="lg:col-span-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping" />
            Candidate Sign In
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight mb-3">
            {nextUrl.includes('interview-test')
              ? 'Continue to Your Interview Test'
              : 'Welcome Back to TechNext Academy'}
          </h1>

          <p className="text-xs md:text-sm text-brand-textSecondary mb-6 leading-relaxed">
            Log in to access your assessment scorecards, resume mock evaluations, and track your ongoing technology readiness.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-2.5 text-xs text-white/90">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>Resume previous test sessions &amp; progress</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-white/90">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>Review detailed skill gap reports &amp; answers</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-white/90">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>Direct access to enrolled live masterclasses</span>
            </div>
          </div>

          {nextUrl.includes('interview-test') && (
            <div className="p-3.5 rounded-2xl bg-brand-surface/70 border border-brand-primary/30 text-xs text-white/80 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-brand-primary shrink-0" />
              <span>You will be redirected straight to the <strong>Interview Test</strong> after logging in.</span>
            </div>
          )}
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
                <span>
                  {loading
                    ? 'Signing In...'
                    : nextUrl.includes('interview-test')
                    ? 'Login & Continue to Test'
                    : 'Login'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Bottom Link: Don't have an account? Create Account */}
            <div className="mt-6 pt-4 border-t border-brand-border/60 text-center text-xs text-brand-textSecondary">
              Don&apos;t have an account?{' '}
              <Link
                href={signupLink}
                className="text-brand-primary hover:underline font-semibold"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-textPrimary overflow-hidden font-sans flex flex-col justify-between">
      {/* Navigation Header */}
      <Header />

      {/* Main Section */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden bg-brand-bg flex-1 flex items-center">
        {/* Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <Suspense fallback={<div className="text-center text-white py-12">Loading login...</div>}>
          <LoginFormContent />
        </Suspense>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
