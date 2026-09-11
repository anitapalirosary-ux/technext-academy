import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

import Script from 'next/script';
import { AuthProvider } from '@/context/AuthContext';
import UserProfileModal from '@/components/UserProfileModal';

export const metadata: Metadata = {
  title: 'TechNext Academy | Career Readiness & Industry Mentorship',
  description: 'Bridge the gap between coding and a real tech career with structured cohort programs led by industry practitioners.',
};

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-7K7DHHTGSQ';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-brand-bg text-brand-textPrimary antialiased selection:bg-brand-primary/30 selection:text-brand-primary">
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <AuthProvider>
          {children}
          <UserProfileModal />
        </AuthProvider>
      </body>
    </html>
  );
}
