import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  Eye, 
  Database, 
  UserCheck, 
  FileText, 
  Mail, 
  Phone, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | TechNext Academy',
  description: 'Learn how TechNext Academy collects, uses, and safeguards your personal information and privacy.',
};

export default function PrivacyPolicyPage() {
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
            <Shield className="w-3.5 h-3.5" />
            <span>Data Privacy & Security</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>

          <p className="text-xs md:text-sm text-brand-textSecondary max-w-2xl mx-auto leading-relaxed">
            At TechNext Academy, we value your trust and are committed to protecting your personal data and privacy.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-brand-primary/90 bg-brand-surface/60 border border-brand-border px-3.5 py-1.5 rounded-xl">
            <span>Last Updated: September 2026</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12 md:py-16 bg-brand-bg">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 space-y-8 text-left">
          
          {/* Intro Card */}
          <div className="bg-brand-surface border border-brand-border/80 rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-brand-bg border border-brand-primary/30 text-brand-primary shrink-0 mt-1">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold font-display text-white">
                  Our Commitment to Your Privacy
                </h2>
                <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
                  This Privacy Policy describes how <strong className="text-white">TechNext Academy</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, and protects information when you visit our website, register for live training sessions, enroll in interview preparation programs, or interact with our services.
                </p>
                <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
                  By using our website and services, you consent to the data practices described in this policy.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                01
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                1. Information We Collect
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              We collect information to provide better educational services and support to all our learners. The categories of information we may collect include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-brand-bg/60 border border-brand-border space-y-1.5">
                <strong className="text-xs font-bold text-white block">Personal Identification</strong>
                <p className="text-xs text-brand-textSecondary">Name, email address, phone/WhatsApp number, career background, and learning objectives.</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-bg/60 border border-brand-border space-y-1.5">
                <strong className="text-xs font-bold text-white block">Account & Credentials</strong>
                <p className="text-xs text-brand-textSecondary">Login credentials, encrypted passwords, profile preferences, and session booking history.</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-bg/60 border border-brand-border space-y-1.5">
                <strong className="text-xs font-bold text-white block">Payment & Billing Info</strong>
                <p className="text-xs text-brand-textSecondary">Transaction identifiers and payment status processed securely through authorized payment gateways (e.g. Razorpay).</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-bg/60 border border-brand-border space-y-1.5">
                <strong className="text-xs font-bold text-white block">Technical & Usage Data</strong>
                <p className="text-xs text-brand-textSecondary">IP address, browser type, operating system, page views, and interactions with our learning simulator.</p>
              </div>
            </div>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                02
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                2. How We Use Your Information
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              We use the collected information for the following legitimate business and educational purposes:
            </p>
            <ul className="space-y-2.5 pt-1">
              {[
                'To schedule, deliver, and manage live sessions, courses, and mock interview appointments.',
                'To send confirmation emails, session links (Google Meet/Zoom), updates, and important administrative notices.',
                'To provide personalized technical feedback, roadmap recommendations, and gap analysis.',
                'To process secure payments and issue transaction receipts.',
                'To respond to inquiries, support requests, and feedback submitted via our contact forms.',
                'To maintain website security, prevent fraud, and comply with legal requirements.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-textSecondary bg-brand-bg/50 p-2.5 rounded-xl border border-brand-border/40">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Third-Party Service Providers */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                03
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                3. Third-Party Service Providers
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              We do not sell, trade, or rent your personal identification information to third parties. We may share necessary information with trusted third-party service providers solely to operate our website and services, including:
            </p>
            <ul className="list-disc list-inside text-xs text-brand-textSecondary space-y-1.5 pl-2 leading-relaxed">
              <li><strong className="text-white">Payment Processors:</strong> Secure third-party gateways to process payments without TechNext Academy storing raw credit card details.</li>
              <li><strong className="text-white">Video Conferencing Tools:</strong> Platforms such as Google Meet or Zoom for delivering live classes and mock interviews.</li>
              <li><strong className="text-white">Hosting & Cloud Infrastructure:</strong> Cloud providers powering our web application and database infrastructure.</li>
            </ul>
          </div>

          {/* Section 4: Data Security & Protection */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                04
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                4. Data Security & Storage
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              All data transmissions on our platform are encrypted via SSL/TLS protocols. However, please note that no internet transmission is 100% secure, and we encourage you to protect your login credentials.
            </p>
          </div>

          {/* Section 5: Cookies and Tracking */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                05
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                5. Cookies and Tracking Technologies
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance user experience, remember your preferences, and analyze site performance. You can instruct your browser to refuse cookies, though some features of the platform may not function optimally.
            </p>
          </div>

          {/* Section 6: Your Privacy Rights */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                06
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                6. Your Rights & Choices
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Depending on applicable laws, you have the right to request access to your personal data, request correction of inaccurate data, or request the deletion of your account and related records. To exercise these rights, please reach out to us at <a href="mailto:anita.palirosary@gmail.com" className="text-brand-primary hover:underline">anita.palirosary@gmail.com</a>.
            </p>
          </div>

          {/* Section 7: Updates to this Policy */}
          <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                07
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                7. Changes to This Privacy Policy
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              TechNext Academy may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. When revised, the updated date at the top of this page will be updated accordingly.
            </p>
          </div>

          {/* Contact Us Card */}
          <div className="bg-brand-surface border border-brand-primary/40 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                08
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                8. Contact Us Regarding Privacy
              </h3>
            </div>

            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy or your personal information, please contact TechNext Academy:
            </p>

            <div className="p-4 rounded-2xl bg-brand-bg/80 border border-brand-border/80 space-y-2.5">
              <strong className="text-sm font-display font-bold text-white block">
                TechNext Academy
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
                <span>Terms & Conditions</span>
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
