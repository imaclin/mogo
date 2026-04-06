# Mogo Auto Services Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 4-page Next.js 15 static marketing site for Mogo Auto Services (Westlake, OH) and deploy to Vercel.

**Architecture:** Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion for scroll animations, Phosphor Icons. All content lives in `src/lib/content.ts`. No backend, no forms — just clickable phone/email links.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v3, Framer Motion, @phosphor-icons/react, Geist font

---

## File Structure

```
/Users/expando/GitHub/mogo/
  public/
    logo.png                  # White Mogo logo (already exists at project root, move to public/)
  src/
    app/
      layout.tsx              # Root layout: Nav + Footer, Geist font, metadata
      globals.css             # Tailwind base + custom CSS vars
      page.tsx                # Home: Hero, Why Mogo, Services Preview, Testimonials, CTA
      about/
        page.tsx              # About: Story, Stats, Values
      services/
        page.tsx              # Services: full grid of 12 services
      contact/
        page.tsx              # Contact: phone, email, address, hours, map
    components/
      Nav.tsx                 # Sticky nav, glass blur on scroll
      Footer.tsx              # Address, links, copyright
      ServiceCard.tsx         # Icon + title + description card
      TestimonialCard.tsx     # Star rating + quote + name
      FadeIn.tsx              # Framer Motion scroll-triggered wrapper
    lib/
      content.ts              # All site content as typed constants
```

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `.gitignore`, `src/app/globals.css`
- Move: `logo.png` → `public/logo.png`

- [ ] **Step 1: Scaffold Next.js 15 into existing directory**

From `/Users/expando/GitHub/mogo`, run:
```bash
npx create-next-app@15 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
```

If `--yes` fails (older create-next-app), answer interactively: TypeScript=Yes, ESLint=Yes, Tailwind=Yes, src/ dir=Yes, App Router=Yes, import alias=Yes (`@/*`).

- [ ] **Step 2: Move logo into public/**

```bash
mv /Users/expando/GitHub/mogo/logo.png /Users/expando/GitHub/mogo/public/logo.png
```

- [ ] **Step 3: Install additional dependencies**

```bash
cd /Users/expando/GitHub/mogo
npm install framer-motion @phosphor-icons/react
```

- [ ] **Step 4: Verify Tailwind version**

```bash
cat node_modules/tailwindcss/package.json | grep '"version"'
```

If version is `4.x`, you must use `@tailwindcss/postcss` plugin (not `tailwindcss` in postcss). If `3.x`, keep the default postcss config.

- [ ] **Step 5: Check dev server starts**

```bash
npm run dev
```

Expected: Server starts at http://localhost:3000, default Next.js page visible.

- [ ] **Step 6: Init git and first commit**

```bash
cd /Users/expando/GitHub/mogo
git init
git add -A
git commit -m "chore: scaffold Next.js 15 project"
```

---

## Task 2: Content Library

**Files:**
- Create: `src/lib/content.ts`

- [ ] **Step 1: Create content.ts**

```ts
// src/lib/content.ts

export const SITE = {
  name: 'Mogo Auto Services',
  tagline: 'Your one-stop-shop for all your auto repair needs.',
  phone: '(440) 871-4949',
  phoneHref: 'tel:+14408714949',
  email: 'info@mogoautoservices.com',
  emailHref: 'mailto:info@mogoautoservices.com',
  address: '27303 Detroit Rd, Westlake, OH 44145',
  mapsUrl: 'https://maps.google.com/?q=27303+Detroit+Rd+Westlake+OH+44145',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.123!2d-81.917!3d41.455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830f4b2b2b2b2b3%3A0x0!2s27303+Detroit+Rd%2C+Westlake%2C+OH+44145!5e0!3m2!1sen!2sus!4v1',
  hours: [
    { day: 'Monday – Friday', time: '8:00 am – 5:00 pm' },
    { day: 'Saturday', time: '9:00 am – 1:00 pm' },
    { day: 'Sunday', time: 'Closed' },
  ],
  rating: '4.7',
  reviewCount: '215',
} as const;

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: 'Wrench',
    title: 'Discount Muffler & Brake',
    description: 'Same-day muffler and exhaust repair using quality parts. Our technicians diagnose the problem and get you back on the road fast.',
  },
  {
    icon: 'CarSimple',
    title: 'Car Checks & Diagnostics',
    description: 'Comprehensive vehicle inspections using state-of-the-art diagnostic equipment. Catch problems early before they become costly repairs.',
  },
  {
    icon: 'CircleWavy',
    title: 'Tire Change & Replacement',
    description: 'Quick and reliable tire changes and replacements. Affordable rates, top-notch service, back on the road in no time.',
  },
  {
    icon: 'Drop',
    title: 'Oil & Brake Service',
    description: 'Fast, efficient oil changes and brake repairs at prices that won\'t break the bank. Quality work every time.',
  },
  {
    icon: 'ArrowsCounterClockwise',
    title: 'Steering & Suspension',
    description: 'Restore your ride\'s handling and comfort. Suspension repairs reduce wear on tires and keep you safely in control.',
  },
  {
    icon: 'Lightning',
    title: 'Battery Change',
    description: 'Don\'t get stranded with a dead battery. Fast, affordable battery replacement using only the highest quality parts.',
  },
  {
    icon: 'Siren',
    title: 'Breakdown Service',
    description: 'When you need help most, we\'re here. Quick response breakdown services to get you moving again without the stress.',
  },
  {
    icon: 'Gauge',
    title: 'Shocks & Struts',
    description: 'Worn shocks and struts affect your safety and comfort. Our experts restore your vehicle\'s ride quality and stability.',
  },
  {
    icon: 'Plug',
    title: 'Starters & Alternators',
    description: 'Electrical system issues diagnosed and repaired quickly. We keep your vehicle\'s charging and starting system running right.',
  },
  {
    icon: 'Thermometer',
    title: 'Cooling & Heating Service',
    description: 'Keep your engine at the right temperature. Cooling system repairs, heater service, and coolant flushes done right.',
  },
  {
    icon: 'Shield',
    title: 'Preventive Maintenance',
    description: 'Regular maintenance extends the life of your vehicle. We help you stay ahead of issues with scheduled service plans.',
  },
  {
    icon: 'Exhaust',
    title: 'Exhaust & Mufflers',
    description: 'Complete exhaust system repairs and replacements. Quiet your ride and keep emissions in check with expert exhaust service.',
  },
];

export type Testimonial = {
  name: string;
  quote: string;
  stars: number;
  source: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Scott',
    quote: 'I have been coming here for over 10 years. Great service, fair prices, and excellent work. The staff is always helpful and willing to go out of their way to get the job done. I am a very happy customer.',
    stars: 5,
    source: 'Insider Pages',
  },
  {
    name: 'Sarah',
    quote: 'George is very efficient and very pleasant to work with. My experience was wonderful. I trust him implicitly. Thank you again for the wonderful work — I look forward to our next service.',
    stars: 5,
    source: 'Insider Pages',
  },
  {
    name: 'Ellis',
    quote: 'Always great advice and speedy service. Reasonable pricing. They\'re honest, courteous, and always fix it right the first time.',
    stars: 5,
    source: 'Insider Pages',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];
```

- [ ] **Step 2: Verify TypeScript is happy**

```bash
cd /Users/expando/GitHub/mogo && npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/content.ts
git commit -m "feat: add site content library"
```

---

## Task 3: Global Styles + Root Layout

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update globals.css**

Replace the entire file:

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --accent: #8B1A1A;
  --accent-hover: #6F1515;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #ffffff;
  color: #111111;
}

.accent-text { color: var(--accent); }
.accent-bg { background: var(--accent); }
.accent-bg-hover:hover { background: var(--accent-hover); }
```

- [ ] **Step 2: Update tailwind.config.ts**

Add the dark red to the theme:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          mogo: '#8B1A1A',
          'mogo-dark': '#6F1515',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 3: Update layout.tsx**

```tsx
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
```

- [ ] **Step 4: Verify build**

```bash
npx tsc --noEmit
```

Expected: Errors only for missing Nav/Footer components (will be created next). If Geist import errors, check that next/font/google exports Geist in your Next.js version — if not, use `{ GeistSans } from 'geist/font/sans'` after `npm install geist`.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css tailwind.config.ts src/app/layout.tsx
git commit -m "feat: configure Tailwind theme and root layout"
```

---

## Task 4: Nav + Footer + FadeIn

**Files:**
- Create: `src/components/Nav.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/FadeIn.tsx`

- [ ] **Step 1: Create FadeIn.tsx**

```tsx
// src/components/FadeIn.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create Nav.tsx**

```tsx
// src/components/Nav.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { List, X, Phone } from '@phosphor-icons/react';
import { NAV_LINKS, SITE } from '@/lib/content';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Mogo Auto Services"
            width={140}
            height={46}
            className={`h-10 w-auto transition-all duration-300 ${scrolled ? 'invert' : ''}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-red-mogo'
                  : scrolled
                  ? 'text-zinc-700 hover:text-red-mogo'
                  : 'text-white hover:text-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 bg-red-mogo hover:bg-red-mogo-dark text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            <Phone size={15} weight="bold" />
            {SITE.phone}
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden ${scrolled ? 'text-zinc-900' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-zinc-700 hover:text-red-mogo"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-red-mogo"
          >
            <Phone size={15} weight="bold" />
            {SITE.phone}
          </a>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Create Footer.tsx**

```tsx
// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Envelope, MapPin } from '@phosphor-icons/react/dist/ssr';
import { SITE, NAV_LINKS } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/logo.png"
              alt="Mogo Auto Services"
              width={140}
              height={46}
              className="h-10 w-auto mb-4"
            />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px]">
              ASE certified auto repair serving Westlake, Ohio for over 20 years.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Pages</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href={SITE.phoneHref} className="flex items-start gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="flex items-start gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                  <Envelope size={15} className="mt-0.5 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  {SITE.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Mogo Auto Services. All rights reserved.</p>
          <p className="text-xs text-zinc-600">Westlake, Ohio</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: No errors (or only errors for pages not yet created).

- [ ] **Step 5: Commit**

```bash
git add src/components/
git commit -m "feat: add Nav, Footer, and FadeIn components"
```

---

## Task 5: Home Page

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/ServiceCard.tsx`
- Create: `src/components/TestimonialCard.tsx`

- [ ] **Step 1: Create ServiceCard.tsx**

```tsx
// src/components/ServiceCard.tsx
import * as Icons from '@phosphor-icons/react/dist/ssr';
import { Service } from '@/lib/content';

type IconName = keyof typeof Icons;

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons[service.icon as IconName] ?? Icons.Wrench) as React.ElementType;

  return (
    <div className="group border-l-2 border-zinc-200 hover:border-red-mogo pl-5 py-2 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <Icon size={20} weight="bold" className="text-red-mogo shrink-0" />
        <h3 className="font-semibold text-sm text-zinc-900">{service.title}</h3>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
    </div>
  );
}
```

- [ ] **Step 2: Create TestimonialCard.tsx**

```tsx
// src/components/TestimonialCard.tsx
import { Star } from '@phosphor-icons/react/dist/ssr';
import { Testimonial } from '@/lib/content';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="border-t-2 border-red-mogo bg-zinc-50 p-6">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} size={14} weight="fill" className="text-red-mogo" />
        ))}
      </div>
      <p className="text-sm text-zinc-700 leading-relaxed mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
      <p className="text-xs font-semibold text-zinc-900">{testimonial.name}</p>
      <p className="text-xs text-zinc-400">{testimonial.source}</p>
    </div>
  );
}
```

- [ ] **Step 3: Build Home page**

```tsx
// src/app/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight, Certificate, Clock, CurrencyDollar } from '@phosphor-icons/react/dist/ssr';
import FadeIn from '@/components/FadeIn';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { SITE, SERVICES, TESTIMONIALS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Westlake Auto Repair | Brakes, Exhaust & More',
  description: `Mogo Auto Services — ASE certified auto repair in Westlake, OH. Brakes, exhaust, tires, oil changes & more. Call ${SITE.phone}.`,
};

const PILLARS = [
  {
    icon: Certificate,
    title: 'ASE Certified',
    body: 'Our mechanics are ASE certified and trained to service all makes and models to the highest standard.',
  },
  {
    icon: Clock,
    title: '20+ Years Experience',
    body: 'Proudly serving the Westlake community for over two decades. You can count on us to get it right.',
  },
  {
    icon: CurrencyDollar,
    title: 'Unbeatable Prices',
    body: 'Quality auto repair should be accessible for everyone. We offer competitive pricing without cutting corners.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-900 min-h-[100dvh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-red-mogo/20" />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
          <div className="max-w-2xl">
            <p className="text-red-mogo text-sm font-semibold uppercase tracking-widest mb-6">
              Westlake, Ohio &bull; ASE Certified
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-6">
              Auto repair<br />done right.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">
              {SITE.tagline} Serving Westlake and the surrounding area for over 20 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 bg-red-mogo hover:bg-red-mogo-dark text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                <Phone size={18} weight="bold" />
                Call {SITE.phone}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                Our Services
                <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-8 text-zinc-500 text-sm">
              {SITE.rating} stars &bull; {SITE.reviewCount}+ reviews
            </p>
          </div>
        </div>
      </section>

      {/* Why Mogo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-mogo mb-3">Why Mogo</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-14">
              The shop Westlake trusts.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="border-t-2 border-red-mogo pt-6">
                  <p.icon size={28} weight="bold" className="text-red-mogo mb-4" />
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-red-mogo mb-3">Services</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What we do.</h2>
              </div>
              <Link
                href="/services"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                See all services <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.05}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 md:hidden">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-red-mogo">
              See all services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-mogo mb-3">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-14">
              {SITE.rating} stars. {SITE.reviewCount}+ reviews.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <TestimonialCard testimonial={t} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-red-mogo py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-2">
                  Ready to get back on the road?
                </h2>
                <p className="text-red-100 text-sm">Mon-Fri 8am-5pm &bull; Sat 9am-1pm</p>
              </div>
              <a
                href={SITE.phoneHref}
                className="shrink-0 inline-flex items-center gap-3 bg-white text-red-mogo font-bold text-lg px-8 py-4 rounded hover:bg-zinc-50 transition-colors"
              >
                <Phone size={22} weight="bold" />
                {SITE.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Verify**

```bash
npx tsc --noEmit
npm run dev
```

Visit http://localhost:3000 — hero should show, scroll down to see Why Mogo, Services Preview, Testimonials, and CTA strip.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/components/ServiceCard.tsx src/components/TestimonialCard.tsx
git commit -m "feat: build home page with all sections"
```

---

## Task 6: About Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create about/page.tsx**

```tsx
// src/app/about/page.tsx
import type { Metadata } from 'next';
import { Phone, Certificate, Clock, Wrench } from '@phosphor-icons/react/dist/ssr';
import FadeIn from '@/components/FadeIn';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about Mogo Auto Services — ASE certified mechanics serving Westlake, Ohio for over 20 years. All makes and models. Call ${SITE.phone}.`,
};

const STATS = [
  { value: '20+', label: 'Years in Business' },
  { value: 'ASE', label: 'Certified Mechanics' },
  { value: 'All', label: 'Makes & Models' },
  { value: '4.7★', label: '215+ Reviews' },
];

const VALUES = [
  {
    icon: Clock,
    title: 'Fast Service',
    body: 'We respect your time. Same-day service is available on many repairs, and we work efficiently to get you back on the road without the wait.',
  },
  {
    icon: Certificate,
    title: 'Honest Work',
    body: 'No upsells, no surprises. Our ASE certified technicians tell you what your vehicle actually needs and price it fairly.',
  },
  {
    icon: Wrench,
    title: 'Quality Parts',
    body: 'We use only high-quality parts on every repair. Your vehicle deserves the best, and we deliver that at a price you can afford.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-red-mogo text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none max-w-xl">
            Serving Westlake for over 20 years.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-mogo mb-4">Our Story</p>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Your neighborhood auto shop.</h2>
              <div className="space-y-4 text-zinc-600 text-sm leading-relaxed">
                <p>
                  Welcome to Mogo Auto Services, your one-stop-shop for all your auto repair needs. We've been proudly serving our community for over 20 years and offer a range of services to all makes and models of cars and trucks.
                </p>
                <p>
                  Our ASE certified mechanics are experts in their field and dedicated to ensuring your vehicle is serviced with care. We know that your car is essential to your daily life, which is why we strive for excellence in all our services.
                </p>
                <p>
                  We believe quality auto repair should be accessible and affordable for everyone — that's why we offer unbeatable pricing without compromising on the quality of parts or workmanship.
                </p>
              </div>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 bg-red-mogo hover:bg-red-mogo-dark text-white font-semibold px-6 py-3 rounded transition-colors mt-8 text-sm"
              >
                <Phone size={15} weight="bold" />
                Call {SITE.phone}
              </a>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-red-mogo pt-5 pb-4">
                    <div className="text-4xl font-bold tracking-tighter text-zinc-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-mogo mb-3">How we work</p>
            <h2 className="text-3xl font-bold tracking-tighter mb-14">The Mogo difference.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="border-t-2 border-red-mogo pt-6">
                  <v.icon size={24} weight="bold" className="text-red-mogo mb-4" />
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npx tsc --noEmit && npm run dev
```

Visit http://localhost:3000/about — dark hero, two-column story + stats, values grid.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: build about page"
```

---

## Task 7: Services Page

**Files:**
- Create: `src/app/services/page.tsx`

- [ ] **Step 1: Create services/page.tsx**

```tsx
// src/app/services/page.tsx
import type { Metadata } from 'next';
import { Phone } from '@phosphor-icons/react/dist/ssr';
import FadeIn from '@/components/FadeIn';
import ServiceCard from '@/components/ServiceCard';
import { SITE, SERVICES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Auto Repair Services',
  description: `Full-service auto repair in Westlake, OH. Brakes, exhaust, tires, oil changes, suspension, diagnostics & more. ASE certified. Call ${SITE.phone}.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-red-mogo text-sm font-semibold uppercase tracking-widest mb-4">Services</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none max-w-2xl">
            What can we help you with?
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-zinc-600 text-base leading-relaxed max-w-2xl">
              Your vehicle is in good hands with Mogo Auto Services. Our team of experienced, ASE certified technicians is committed to providing the best possible care for your car — from routine maintenance to extensive repairs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Full services grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.04}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-50 py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-2">
                  Not sure what your car needs?
                </h2>
                <p className="text-zinc-500 text-sm">Give us a call and we'll help you figure it out.</p>
              </div>
              <a
                href={SITE.phoneHref}
                className="shrink-0 inline-flex items-center gap-2 bg-red-mogo hover:bg-red-mogo-dark text-white font-bold px-8 py-4 rounded transition-colors"
              >
                <Phone size={18} weight="bold" />
                {SITE.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npx tsc --noEmit && npm run dev
```

Visit http://localhost:3000/services — dark hero, intro text, full 12-service grid.

- [ ] **Step 3: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "feat: build services page"
```

---

## Task 8: Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create contact/page.tsx**

```tsx
// src/app/contact/page.tsx
import type { Metadata } from 'next';
import { Phone, Envelope, MapPin, Clock } from '@phosphor-icons/react/dist/ssr';
import FadeIn from '@/components/FadeIn';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact Mogo Auto Services in Westlake, OH. Call ${SITE.phone} or email ${SITE.email}. Located at ${SITE.address}.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-red-mogo text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none">
            Get in touch.
          </h1>
        </div>
      </section>

      {/* Contact info + map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Info */}
            <FadeIn>
              <div className="space-y-10">
                {/* Phone */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">Phone</p>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-3 text-2xl font-bold text-zinc-900 hover:text-red-mogo transition-colors"
                  >
                    <Phone size={24} weight="bold" className="text-red-mogo" />
                    {SITE.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">Email</p>
                  <a
                    href={SITE.emailHref}
                    className="flex items-center gap-3 text-base font-medium text-zinc-900 hover:text-red-mogo transition-colors"
                  >
                    <Envelope size={20} weight="bold" className="text-red-mogo" />
                    {SITE.email}
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">Location</p>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-base text-zinc-700 hover:text-red-mogo transition-colors"
                  >
                    <MapPin size={20} weight="bold" className="text-red-mogo mt-0.5 shrink-0" />
                    {SITE.address}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">Hours</p>
                  <div className="flex items-start gap-3">
                    <Clock size={20} weight="bold" className="text-red-mogo mt-0.5 shrink-0" />
                    <table className="text-sm text-zinc-700">
                      <tbody>
                        {SITE.hours.map((h) => (
                          <tr key={h.day}>
                            <td className="pr-6 py-0.5 font-medium">{h.day}</td>
                            <td className="py-0.5 text-zinc-500">{h.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.15}>
              <div className="rounded overflow-hidden border border-zinc-200 h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.5493902986644!2d-81.91949842393565!3d41.45494469999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830f07b2e28d305%3A0x48faa8d33c0dec31!2s27303%20Detroit%20Rd%2C%20Westlake%2C%20OH%2044145!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mogo Auto Services location"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-mogo py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-6">
              Give us a call today.
            </h2>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-3 bg-white text-red-mogo font-bold text-xl px-10 py-4 rounded hover:bg-zinc-50 transition-colors"
            >
              <Phone size={24} weight="bold" />
              {SITE.phone}
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npx tsc --noEmit && npm run dev
```

Visit http://localhost:3000/contact — contact info left, map right, red CTA at bottom.

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat: build contact page with map"
```

---

## Task 9: Deploy to Vercel

**Files:**
- None — uses Vercel CLI

- [ ] **Step 1: Install Vercel CLI if needed**

```bash
which vercel || npm install -g vercel
```

- [ ] **Step 2: Verify production build succeeds**

```bash
cd /Users/expando/GitHub/mogo
npm run build
```

Expected: Build completes with no errors. If TypeScript or ESLint errors appear, fix them before proceeding.

- [ ] **Step 3: Push to GitHub**

Create a new GitHub repo named `mogo`, then:

```bash
cd /Users/expando/GitHub/mogo
git remote add origin https://github.com/OWNER/mogo.git
git branch -M main
git push -u origin main
```

Replace `OWNER` with the actual GitHub username/org.

- [ ] **Step 4: Deploy to Vercel**

```bash
vercel --prod
```

Follow the prompts:
- Set up and deploy: Yes
- Which scope: select the correct Vercel account
- Link to existing project: No (create new)
- Project name: `mogo`
- Directory: `./`
- Override settings: No

- [ ] **Step 5: Verify live site**

Visit the Vercel deployment URL. Check:
- All 4 pages load (Home, About, Services, Contact)
- Phone number is clickable (tel: link)
- Email is clickable (mailto: link)
- Logo displays correctly on dark and light backgrounds
- Map loads on contact page
- Mobile menu works

- [ ] **Step 6: Final commit**

```bash
git add -A && git commit -m "chore: verify production deployment" --allow-empty
```
