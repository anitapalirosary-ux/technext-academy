import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  RotateCcw, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  CreditCard, 
  FileText, 
  Mail, 
  Phone, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

export const metadata = {
  title: 'Refund and Cancellation Policy | TechNext Academy',
  description: 'Understand the cancellation and refund terms for live sessions, interview prep, and mentorship programs at TechNext Academy.',
};

export default function RefundCancellationPolicyPage() {
  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-textPrimary overflow-hidden font-sans">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-28 md:pt-36 pb-10 md:pb-12 bg-brand-bg overflow-hidden border-b border-brand-border/40">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear & Transparent Terms</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Refund &amp; <span className="text-gradient">Cancellation Policy</span>
          </h1>

          <p className="text-xs md:text-sm text-brand-textSecondary max-w-2xl mx-auto leading-relaxed">
            We are committed to providing high-quality learning and transparent policies for all live interactive sessions, mock interviews, and technical programs.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-brand-primary/90 bg-brand-surface/60 border border-brand-border px-3.5 py-1.5 rounded-xl">
            <span>Last Updated: September 2026</span>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-12 md:py-16 bg-brand-bg">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 space-y-8 text-left">
          
          {/* Policy Overview Card */}
          <div className="bg-brand-surface border border-brand-border/80 rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-brand-bg border border-brand-primary/30 text-brand-primary shrink-0 mt-1">
                <CreditCard className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold font-display text-white">
                  Overview of Our Policy
                </h2>
                <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
                  At <strong className="text-white">TechNext Academy</strong>, we maintain small batch sizes and dedicated senior software engineer time to ensure personalized mentorship. Because seats and instructor slots are strictly reserved in advance, our cancellation and refund policies are structured to be fair and transparent.
                </p>
                <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
                  Please review the specific cancellation and refund terms applicable to our different service offerings below.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Live 1-Hour Interactive Sessions */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                01
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                1. Live 1-Hour Interactive Sessions (e.g. ₹99 Spotlights)
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              For scheduled one-off live sessions (such as the 1-Hour Live Interactive Prep Session):
            </p>
            <ul className="space-y-2.5 pt-1">
              <li className="flex items-start gap-2.5 text-xs text-brand-textSecondary bg-brand-bg/50 p-3 rounded-xl border border-brand-border/40">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span><strong className="text-white">Cancellation with 24+ Hours Notice:</strong> If you request cancellation at least 24 hours prior to the scheduled session start time, you are eligible for a 100% full refund or free rescheduling to a future session date.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-brand-textSecondary bg-brand-bg/50 p-3 rounded-xl border border-brand-border/40">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Within 24 Hours of Session:</strong> Cancellations requested less than 24 hours prior to the start time are non-refundable, as the seat has been locked and instructor time allocated. However, we will provide you access to the session recording and resources.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-brand-textSecondary bg-brand-bg/50 p-3 rounded-xl border border-brand-border/40">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span><strong className="text-white">Academy Rescheduling/Cancellation:</strong> In the rare event TechNext Academy reschedules or cancels a session due to unforeseen technical or trainer emergencies, participants will be offered a 100% immediate refund or free transfer to the rescheduled date.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Mock Interviews & 1-on-1 Guidance */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                02
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                2. 1-on-1 Mock Interviews &amp; Architecture Reviews
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              1-on-1 sessions require reserving a senior software engineer&apos;s exclusive calendar time:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-brand-bg/60 border border-brand-border space-y-1.5">
                <strong className="text-xs font-bold text-white block">Rescheduling Allowed (48h Notice)</strong>
                <p className="text-xs text-brand-textSecondary">You may reschedule your 1-on-1 slot once at no additional charge with at least 48 hours prior notice.</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-bg/60 border border-brand-border space-y-1.5">
                <strong className="text-xs font-bold text-white block">No-Show Policy</strong>
                <p className="text-xs text-brand-textSecondary">Failure to join within 15 minutes of the scheduled time without prior notice is treated as a completed session and is non-refundable.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Multi-Week Cohorts & Programs */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                03
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                3. Multi-Week Comprehensive Mentorship Programs
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              For structured cohort tracks:
            </p>
            <ul className="list-disc list-inside text-xs text-brand-textSecondary space-y-1.5 pl-2 leading-relaxed">
              <li><strong className="text-white">Before Batch Launch:</strong> Full 100% refund if requested at least 3 business days before the first day of the cohort.</li>
              <li><strong className="text-white">After Batch Commencement:</strong> Because curriculum materials, repository access, and mentor time are provided immediately, tuition fees are non-refundable once the first week of classes has taken place.</li>
            </ul>
          </div>

          {/* Section 4: Refund Processing & Timelines */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                04
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                4. Refund Processing &amp; Timelines
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Approved refunds are initiated immediately by TechNext Academy. Depending on your bank or payment provider (UPI, Net Banking, Credit/Debit Card), the funds typically reflect in your original payment account within <strong className="text-white">5 to 7 business days</strong>.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              A transaction confirmation reference will be sent to your registered email address as soon as the refund is initiated.
            </p>
          </div>

          {/* Section 5: How to Request a Refund or Reschedule */}
          <div className="bg-brand-surface border border-brand-primary/40 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                05
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                5. How to Request a Cancellation or Refund
              </h3>
            </div>

            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              To request a cancellation, reschedule, or refund, please reach out to our team with your Registered Name, Registered Email, and Transaction ID:
            </p>

            <div className="p-4 rounded-2xl bg-brand-bg/80 border border-brand-border/80 space-y-2.5">
              <strong className="text-sm font-display font-bold text-white block">
                TechNext Academy Support
              </strong>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-brand-textSecondary pt-1">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Website: <strong className="text-white">TechNext Academy</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Email: <a href="mailto:anita.palirosary@gmail.com" className="text-white hover:text-brand-primary transition-colors">anita.palirosary@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Phone: <a href="tel:+917812804057" className="text-white hover:text-brand-primary transition-colors">+91 7812804057</a></span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] text-xs font-bold transition-all shadow-md hover:scale-105"
              >
                <span>Contact Support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/terms-and-conditions"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-surface border border-brand-border text-white hover:text-brand-primary text-xs font-semibold transition-colors"
              >
                <span>Terms &amp; Conditions</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
