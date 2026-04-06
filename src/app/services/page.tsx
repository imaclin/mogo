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
              Your vehicle is in good hands with Mogo Auto Services. Our team of experienced, ASE certified technicians is committed to providing the best possible care for your car - from routine maintenance to extensive repairs.
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
                <p className="text-zinc-500 text-sm">Give us a call and we will help you figure it out.</p>
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
