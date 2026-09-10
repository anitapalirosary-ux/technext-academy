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

import { AuthProvider } from '@/context/AuthContext';
import UserProfileModal from '@/components/UserProfileModal';

export const metadata: Metadata = {
  title: 'TechNext Academy | Career Readiness & Industry Mentorship',
  description: 'Bridge the gap between coding and a real tech career with structured cohort programs led by industry practitioners.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-brand-bg text-brand-textPrimary antialiased selection:bg-brand-primary/30 selection:text-brand-primary">
        <AuthProvider>
          {children}
          <UserProfileModal />
        </AuthProvider>
      </body>
    </html>
  );
}
