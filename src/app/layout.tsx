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
  description: `${SITE.name} - ${SITE.tagline} ASE certified mechanics serving Westlake, Ohio for 20+ years. Brakes, exhaust, tires, oil changes & more.`,
  metadataBase: new URL('https://mogoautoservices.com'),
  keywords: ['auto repair', 'car repair', 'mechanic', 'Westlake OH', 'brake repair', 'oil change', 'tire service', 'exhaust repair', 'ASE certified'],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mogoautoservices.com',
    siteName: SITE.name,
    title: `${SITE.name} | Westlake, OH Auto Repair`,
    description: `${SITE.name} - ${SITE.tagline} ASE certified mechanics serving Westlake, Ohio for 20+ years.`,
    images: [
      {
        url: 'https://mogo-maclin.vercel.app/mogosocial.png',
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Westlake, OH Auto Repair`,
    description: `${SITE.name} - ${SITE.tagline} ASE certified mechanics serving Westlake, Ohio for 20+ years.`,
    images: ['https://mogo-maclin.vercel.app/mogosocial.png'],
    creator: '@mogoautoservices',
  },
  alternates: {
    canonical: 'https://mogoautoservices.com',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32' },
      { url: '/favicon.png', sizes: '16x16' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180' },
    ],
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
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
