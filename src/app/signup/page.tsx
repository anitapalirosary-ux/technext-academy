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
  User,
  Phone,
  Sparkles,
  AlertCircle
} from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+91', country: 'IN', label: 'India (+91)' },
  { code: '+1', country: 'US', label: 'USA / Canada (+1)' },
  { code: '+44', country: 'GB', label: 'UK (+44)' },
  { code: '+971', country: 'AE', label: 'UAE (+971)' },
  { code: '+65', country: 'SG', label: 'Singapore (+65)' },
  { code: '+61', country: 'AU', label: 'Australia (+61)' },
  { code: '+49', country: 'DE', label: 'Germany (+49)' },
  { code: '+33', country: 'FR', label: 'France (+33)' },
  { code: '+966', country: 'SA', label: 'Saudi Arabia (+966)' },
  { code: '+81', country: 'JP', label: 'Japan (+81)' },
];

function SignupFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextUrl = searchParams.get('next') || '/interview-test';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validatePhone = (num: string, code: string): boolean => {
    const cleanNum = num.replace(/\D/g, '');
    if (code === '+91') {
      return cleanNum.length === 10 && /^[6-9]\d{9}$/.test(cleanNum);
    }
    return cleanNum.length >= 7 && cleanNum.length <= 15;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your Full Name.');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setError('Phone Number is required.');
      return;
    }
    if (!validatePhone(phone, countryCode)) {
      setError(
        countryCode === '+91'
          ? 'Please enter a valid 10-digit Indian phone number (starting with 6-9).'
          : 'Please enter a valid phone number (7-15 digits).'
      );
      return;
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          countryCode: countryCode,
          phone: phone.trim(),
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to create account. Please try again.');
        setLoading(false);
        return;
      }

      if (typeof window !== 'undefined') {
        const userData = {
          id: data.user?.id,
          name: data.user?.name || name.trim(),
          email: data.user?.email || email.trim(),
          phone: data.user?.phone || `${countryCode} ${phone}`,
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
      console.error('Signup error:', err);
      setError('A network error occurred. Please check your connection and try again.');
      setLoading(false);
    }
  };

  const loginLink = nextUrl
    ? `/login?next=${encodeURIComponent(nextUrl)}`
    : '/login';

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Col: Info & Benefits */}
        <div className="lg:col-span-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping" />
            Candidate Access Portal
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight mb-3">
            {nextUrl.includes('interview-test')
              ? 'Unlock Your Interview Readiness Test'
              : 'Create Your TechNext Account'}
          </h1>

          <p className="text-xs md:text-sm text-brand-textSecondary mb-6 leading-relaxed">
            Create your free profile to access calibrated interview tests, track your technical scoring, and receive personalized feedback.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-2.5 text-xs text-white/90">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>Full access to 6-category technical interview assessment</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-white/90">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>Instant gap analysis report &amp; score breakdown</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-white/90">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>Direct guidance for .NET, Azure, and System Design</span>
            </div>
          </div>

          {nextUrl.includes('interview-test') && (
            <div className="p-3.5 rounded-2xl bg-brand-surface/70 border border-brand-primary/30 text-xs text-white/80 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-brand-primary shrink-0" />
              <span>You will be redirected straight to the <strong>Interview Test</strong> right after completing signup.</span>
            </div>
          )}
        </div>

        {/* Right Col: Signup Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-brand-surface border border-brand-border/80 rounded-3xl p-6 md:p-8 shadow-2xl relative text-left">
            <div className="mb-5">
              <h2 className="text-xl font-display font-bold text-white mb-1">
                Create Account
              </h2>
              <p className="text-xs text-brand-textSecondary">
                Enter your details to register and begin your preparation.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Field 1: Full Name */}
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  1. Full Name <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ketan Sharma"
                    className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Field 2: Email Address */}
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  2. Email Address <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Field 3: Phone Number with Country Code */}
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  3. Phone Number <span className="text-brand-primary">*</span>
                </label>
                <div className="flex gap-2">
                  {/* Country Code Selector */}
                  <div className="relative w-36 shrink-0">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl px-2.5 py-2 text-xs md:text-sm text-white outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {COUNTRY_CODES.map((item) => (
                        <option key={item.code} value={item.code} className="bg-brand-surface text-white">
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Phone Input */}
                  <div className="relative flex-1">
                    <Phone className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={countryCode === '+91' ? '7812804057' : 'Phone Number'}
                      className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>
                <span className="text-[10px] text-brand-textSecondary mt-1 block">
                  {countryCode === '+91' ? '10-digit mobile number for assessment alerts.' : 'Standard international phone number.'}
                </span>
              </div>

              {/* Field 4: Password */}
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  4. Password <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Field 5: Confirm Password */}
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  5. Confirm Password <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-brand-textSecondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-brand-bg/80 border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Field 6: Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs md:text-sm py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-brand-primary/20 hover:scale-[1.01] disabled:opacity-50"
              >
                <span>
                  {loading
                    ? 'Creating Account...'
                    : nextUrl.includes('interview-test')
                    ? 'Create Account & Start Test'
                    : 'Create Account'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Bottom Link: Already have an account? Login */}
            <div className="mt-5 pt-4 border-t border-brand-border/60 text-center text-xs text-brand-textSecondary">
              Already have an account?{' '}
              <Link
                href={loginLink}
                className="text-brand-primary hover:underline font-semibold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-textPrimary overflow-hidden font-sans flex flex-col justify-between">
      {/* Navigation Header */}
      <Header />

      {/* Main Section */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden bg-brand-bg flex-1 flex items-center">
        {/* Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <Suspense fallback={<div className="text-center text-white py-12">Loading portal...</div>}>
          <SignupFormContent />
        </Suspense>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
