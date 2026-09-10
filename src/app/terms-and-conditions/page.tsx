import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Phone, 
  Globe,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Terms and Conditions | TechNext Academy',
  description: 'Terms and Conditions governing the use of TechNext Academy website, training programs, and educational services.',
};

export default function TermsAndConditionsPage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Terms and <span className="text-gradient">Conditions</span>
          </h1>

          <p className="text-xs md:text-sm text-brand-textSecondary max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using the TechNext Academy website, training sessions, mock interviews, or educational programs.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-brand-primary/90 bg-brand-surface/60 border border-brand-border px-3.5 py-1.5 rounded-xl">
            <span>Last Updated: September 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="relative py-12 md:py-16 bg-brand-bg">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 space-y-8 text-left">
          
          {/* Welcome Intro Card */}
          <div className="bg-brand-surface border border-brand-border/80 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-brand-bg border border-brand-primary/30 text-brand-primary shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold font-display text-white">
                  Welcome to TechNext Academy
                </h2>
                <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
                  These Terms and Conditions govern your use of our website, services, courses, interview preparation programs, training sessions, and other educational services offered through our platform.
                </p>
                <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
                  By accessing or using the TechNext Academy website, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <div id="section-1" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                01
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                1. About TechNext Academy
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              TechNext Academy is an online learning and professional development platform designed to help students, graduates, software professionals, and job seekers improve their technical skills and prepare for career opportunities.
            </p>
            <p className="text-xs md:text-sm text-white/90 font-medium">
              Our services may include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                'Technical training and learning programs',
                'Software development and programming courses',
                'Interview preparation',
                'Mock interviews and interview guidance',
                'One-to-one and group training sessions',
                'Career-oriented technical guidance',
                'Online classes and interactive sessions',
                'Learning resources and educational materials'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-brand-textSecondary bg-brand-bg/50 p-2.5 rounded-xl border border-brand-border/40">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-brand-textSecondary pt-2 leading-relaxed italic">
              The services and programs available on the website may be updated, modified, or discontinued from time to time.
            </p>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                02
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                2. Eligibility
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              You must provide accurate and complete information when registering for our services or booking a session.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              If you are using the website on behalf of another person, organization, or institution, you confirm that you have the authority to do so.
            </p>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                03
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                3. Account and User Information
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Some services may require you to provide information such as your name, email address, phone number, or other relevant details.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              You are responsible for ensuring that the information you provide is accurate and up to date.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              You should not share your account credentials or allow unauthorized individuals to access your account.
            </p>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                04
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                4. Course and Training Services
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Course content, schedules, instructors, session formats, duration, and availability may vary depending on the program selected.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              TechNext Academy reserves the right to make reasonable changes to course content, trainers, schedules, or session arrangements when necessary.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Where possible, students will be informed about significant changes in advance.
            </p>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                05
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                5. Class Booking and Scheduling
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Certain services may require advance booking.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Once a session is booked, the student is expected to attend at the scheduled date and time.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              If you need to reschedule a session, you should contact TechNext Academy within the applicable cancellation or rescheduling period communicated at the time of booking.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Availability of alternative time slots is subject to the instructor&apos;s schedule.
            </p>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                06
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                6. Payments
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Where paid services are offered, the applicable fees will be displayed or communicated before payment.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Payments must be completed through the payment methods made available by TechNext Academy or its authorized payment providers.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              You agree not to use fraudulent payment methods or provide inaccurate payment information.
            </p>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                07
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                7. Cancellation and Refunds
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Cancellation and refund eligibility may vary depending on the service or program purchased.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Any applicable refund, cancellation, or rescheduling conditions will be communicated before or at the time of purchase.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              TechNext Academy may deny refunds where the applicable cancellation or refund conditions have not been satisfied.
            </p>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                08
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                8. Online Classes and Group Sessions
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              For group classes, students are expected to maintain professional and respectful behavior. Participants must not:
            </p>
            <ul className="space-y-2 pt-1">
              {[
                'Disrupt classes intentionally',
                'Harass instructors or other participants',
                'Share inappropriate content',
                'Record or distribute sessions without permission',
                'Share private class links with unauthorized individuals'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-textSecondary bg-brand-bg/50 p-3 rounded-xl border border-brand-border/40">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-brand-textSecondary pt-2 leading-relaxed">
              TechNext Academy may restrict or terminate access to a session or service if a participant seriously violates these requirements.
            </p>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                09
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                9. Educational Disclaimer
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              TechNext Academy provides educational and career-development services.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Completion of a course, training program, mock interview, or interview-preparation session does not guarantee employment, promotion, a particular salary, or selection by any employer.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Career outcomes depend on individual skills, experience, performance, market conditions, and other factors outside our control.
            </p>
          </div>

          {/* Section 10 */}
          <div id="section-10" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                10
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                10. Intellectual Property
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              All website content and educational materials provided by TechNext Academy, including text, graphics, logos, videos, course materials, documents, designs, and other resources, are protected by applicable intellectual-property laws.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              You may use the materials for your personal learning purposes only.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              You must not copy, reproduce, distribute, sell, publish, modify, or commercially exploit TechNext Academy materials without prior written permission.
            </p>
          </div>

          {/* Section 11 */}
          <div id="section-11" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                11
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                11. Website Usage
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              You agree to use the website only for lawful purposes. You must not:
            </p>
            <ul className="space-y-2 pt-1">
              {[
                'Attempt to gain unauthorized access to the website or its systems',
                'Introduce malicious software or harmful code',
                'Interfere with website functionality',
                'Use the website for fraudulent activities',
                'Copy or misuse website content',
                'Attempt to access another user’s account or information'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-textSecondary bg-brand-bg/50 p-3 rounded-xl border border-brand-border/40">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-brand-textSecondary pt-2 leading-relaxed">
              We reserve the right to restrict access to users who violate these Terms.
            </p>
          </div>

          {/* Section 12 */}
          <div id="section-12" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                12
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                12. Third-Party Services
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Our website may use third-party services such as payment providers, video-conferencing platforms, analytics services, hosting providers, or other technology services.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Use of these services may also be subject to the terms and privacy policies of the respective third-party providers.
            </p>
          </div>

          {/* Section 13 */}
          <div id="section-13" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                13
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                13. Website Availability
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              We aim to keep the website and services available and functioning properly. However, we do not guarantee uninterrupted or error-free availability.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              The website may occasionally be unavailable because of maintenance, technical issues, updates, network problems, or circumstances beyond our reasonable control.
            </p>
          </div>

          {/* Section 14 */}
          <div id="section-14" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                14
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                14. Privacy
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Your use of our website may involve the collection and processing of certain personal information.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Please refer to our <strong className="text-white">Privacy Policy</strong> for information about how we collect, use, store, and protect user information.
            </p>
          </div>

          {/* Section 15 */}
          <div id="section-15" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                15
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                15. Changes to These Terms
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              TechNext Academy may update these Terms and Conditions from time to time.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              When changes are made, the updated version will be published on this page with a revised &quot;Last Updated&quot; date.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Your continued use of the website after changes are published constitutes acceptance of the updated Terms and Conditions.
            </p>
          </div>

          {/* Section 16 */}
          <div id="section-16" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                16
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                16. Limitation of Liability
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              To the extent permitted by applicable law, TechNext Academy will not be responsible for indirect, incidental, or consequential losses arising from the use of our website or educational services.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              We are not responsible for technical problems, interruptions, or failures caused by third-party platforms, internet connectivity, or circumstances outside our reasonable control.
            </p>
          </div>

          {/* Section 17 */}
          <div id="section-17" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                17
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                17. Termination
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              TechNext Academy may suspend or terminate access to its services where a user violates these Terms and Conditions, engages in inappropriate behavior, uses the platform unlawfully, or attempts to misuse our services.
            </p>
          </div>

          {/* Section 18 */}
          <div id="section-18" className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                18
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                18. Governing Law
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              These Terms and Conditions shall be governed by and interpreted in accordance with the applicable laws of India.
            </p>
            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              Any disputes arising in connection with these Terms and Conditions shall be subject to the jurisdiction of the appropriate courts in India.
            </p>
          </div>

          {/* Section 19: Contact Us */}
          <div id="section-19" className="bg-brand-surface border border-brand-primary/40 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-bg border border-brand-primary/40 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                19
              </span>
              <h3 className="text-base md:text-lg font-bold font-display text-white">
                19. Contact Us
              </h3>
            </div>

            <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
              If you have questions about these Terms and Conditions or our services, please contact TechNext Academy through the contact information provided on our website.
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
                  <span>Email: <a href="mailto:hello@technextacademy.com" className="text-white hover:text-brand-primary transition-colors">hello@technextacademy.com</a></span>
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
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-surface border border-brand-border text-white hover:text-brand-primary text-xs font-semibold transition-colors"
              >
                <span>Back to Home</span>
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
