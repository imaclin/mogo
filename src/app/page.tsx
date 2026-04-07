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
  description: `Mogo Auto Services - ASE certified auto repair in Westlake, OH. Brakes, exhaust, tires, oil changes & more. Call ${SITE.phone}.`,
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
      <section className="relative min-h-[100dvh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/mogo.jpg)',
            filter: 'blur(2px)',
          }}
        />
        <div className="absolute inset-0 bg-zinc-900/90" />
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
            {PILLARS.map((p, i) => {
              const PillarIcon = p.icon;
              return (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <div className="border-t-2 border-red-mogo pt-6">
                    <PillarIcon size={28} weight="bold" className="text-red-mogo mb-4" />
                    <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </FadeIn>
              );
            })}
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
