// src/app/about/page.tsx
import type { Metadata } from 'next';
import { Phone, Certificate, Clock, Wrench } from '@phosphor-icons/react/dist/ssr';
import FadeIn from '@/components/FadeIn';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about Mogo Auto Services - ASE certified mechanics serving Westlake, Ohio for over 20 years. All makes and models. Call ${SITE.phone}.`,
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
                  Welcome to Mogo Auto Services, your one-stop-shop for all your auto repair needs. We have been proudly serving our community for over 20 years and offer a range of services to all makes and models of cars and trucks.
                </p>
                <p>
                  Our ASE certified mechanics are experts in their field and dedicated to ensuring your vehicle is serviced with care. We know that your car is essential to your daily life, which is why we strive for excellence in all our services.
                </p>
                <p>
                  We believe quality auto repair should be accessible and affordable for everyone. That is why we offer unbeatable pricing without compromising on the quality of parts or workmanship.
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
            {VALUES.map((v, i) => {
              const ValIcon = v.icon;
              return (
                <FadeIn key={v.title} delay={i * 0.1}>
                  <div className="border-t-2 border-red-mogo pt-6">
                    <ValIcon size={24} weight="bold" className="text-red-mogo mb-4" />
                    <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{v.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
