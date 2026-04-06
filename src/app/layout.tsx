// src/app/layout.tsx
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/content';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Westlake, OH Auto Repair`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name} — ${SITE.tagline} ASE certified mechanics serving Westlake, Ohio for 20+ years. Brakes, exhaust, tires, oil changes & more.`,
  metadataBase: new URL('https://mogoautoservices.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
