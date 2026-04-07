// src/app/services/[service]/[city]/page.tsx
// Programmatic SEO page generator for location + service combinations

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, MapPin, Clock, Star, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import FadeIn from '@/components/FadeIn';
import { SITE } from '@/lib/content';
import {
  SEO_SERVICES,
  SERVICE_AREAS,
  getServiceBySlug,
  getCityBySlug,
  getNearbyCities,
  getDistanceText,
} from '@/lib/seo-data';
import { generateLocalBusinessSchema, generateServiceSchema, generateFAQSchema } from '@/lib/schema';

// Generate static params for all service + city combinations
export async function generateStaticParams() {
  const params: { service: string; city: string }[] = [];

  for (const service of SEO_SERVICES) {
    for (const city of SERVICE_AREAS) {
      params.push({
        service: service.slug,
        city: city.slug,
      });
    }
  }

  return params;
}

// Generate metadata for each page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} ${city.name}, ${city.state} | ASE Certified | Mogo Auto (440) 871-4949`,
    description: `Professional ${service.shortTitle.toLowerCase()} in ${city.name}, Ohio. ASE certified mechanics, 20+ years experience. Same-day service available. Call (440) 871-4949. Free estimates!`,
    keywords: [
      ...service.keywords,
      `${service.shortTitle.toLowerCase()} ${city.name.toLowerCase()}`,
      `${service.shortTitle.toLowerCase()} ${city.name.toLowerCase()} ohio`,
      `auto repair ${city.name.toLowerCase()}`,
      `car repair ${city.name.toLowerCase()}`,
      `mechanic ${city.name.toLowerCase()}`,
    ],
    openGraph: {
      title: `${service.title} in ${city.name}, ${city.state}`,
      description: `Professional ${service.shortTitle.toLowerCase()} in ${city.name}, Ohio. ASE certified, 20+ years experience.`,
      type: 'website',
    },
    alternates: {
      canonical: `https://mogoautoservices.com/services/${serviceSlug}/${citySlug}/`,
    },
  };
}

// Main page component
export default async function ServiceLocationPage({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) {
    notFound();
  }

  const nearbyCities = getNearbyCities(citySlug, 4);
  const distanceText = getDistanceText(city.distanceFromShop);

  // Generate schema markup
  const localBusinessSchema = generateLocalBusinessSchema(city);
  const serviceSchema = generateServiceSchema(service, city);
  const faqSchema = generateFAQSchema(service.faqs);

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, serviceSchema, faqSchema]),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-zinc-50 border-b border-zinc-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <ol className="flex items-center text-sm text-zinc-500">
            <li>
              <Link href="/" className="hover:text-zinc-900">Home</Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="/services" className="hover:text-zinc-900">Services</Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <a href={`/services/${serviceSlug}`} className="hover:text-zinc-900">{service.shortTitle}</a>
            </li>
            <li className="mx-2">/</li>
            <li className="text-zinc-900">{city.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-red-mogo/30" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <p className="text-red-mogo text-sm font-semibold uppercase tracking-widest mb-4">
              {city.name}, {city.state}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight max-w-3xl mb-6">
              {service.title} in {city.name}, {city.state}
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-8">
              Professional {service.shortTitle.toLowerCase()} serving {city.name} and surrounding areas. 
              ASE certified technicians with 20+ years experience. Same-day service available.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 bg-red-mogo hover:bg-red-mogo-dark text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                <Phone size={18} weight="bold" />
                Call {SITE.phone}
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-12 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TrustSignal icon={Star} title="4.7 Stars" description="215+ Reviews" />
            <TrustSignal icon={MapPin} title={distanceText} description={`${city.name}`} />
            <TrustSignal icon={Clock} title="Same-Day" description="Service Available" />
            <TrustSignal icon={Phone} title="Free Estimates" description="No Hidden Fees" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">
                  Expert {service.shortTitle} Near {city.name}
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                  {service.contentTemplate(city.name, city.state)}
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  {distanceText} {city.name}, our Westlake shop is conveniently located for all {city.name} residents. 
                  {city.nearbyLandmarks && city.nearbyLandmarks.length > 0 && (
                    <> We&apos;re easily accessible from {city.nearbyLandmarks.slice(0, 2).join(' and ')}.</>
                  )}{' '}
                  Whether you&apos;re commuting to work, running errands around town, or heading out for the weekend, 
                  we provide the reliable auto repair services you need to keep your vehicle running smoothly.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">
                  Why Choose Mogo Auto for {service.shortTitle}?
                </h2>
                <ul className="space-y-4">
                  <BenefitItem title="ASE Certified Technicians" description="Our mechanics are certified and trained to handle all makes and models." />
                  <BenefitItem title="20+ Years Experience" description="Serving the Westlake community and surrounding areas since 2004." />
                  <BenefitItem title="Honest Pricing" description="Upfront estimates with no hidden fees. We explain every repair before we start." />
                  <BenefitItem title="Same-Day Service" description="Most repairs completed the same day. We&apos;ll have you back on the road in no time." />
                  <BenefitItem title="Quality Parts" description="We use high-quality parts that meet or exceed OEM specifications." />
                </ul>
              </FadeIn>

              {/* FAQs with Schema */}
              <FadeIn delay={0.2}>
                <h2 className="text-2xl font-bold tracking-tighter mb-6">
                  Frequently Asked Questions About {service.shortTitle} in {city.name}
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="border-l-2 border-red-mogo pl-6">
                      <h3 className="font-semibold text-zinc-900 mb-2">{faq.question}</h3>
                      <p className="text-zinc-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Service Area Info */}
              <FadeIn delay={0.3}>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">
                  Serving {city.name} and Surrounding Areas
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  We proudly serve customers throughout {city.name} and the greater Westlake area. 
                  Our convenient location on Detroit Road makes us easily accessible from anywhere in the region.
                </p>
                {city.zipCodes && city.zipCodes.length > 0 && (
                  <p className="text-zinc-600 text-sm">
                    <span className="font-semibold">ZIP codes served:</span> {city.zipCodes.join(', ')}
                  </p>
                )}
              </FadeIn>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* CTA Card */}
              <FadeIn>
                <div className="bg-zinc-900 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Ready to Schedule?</h3>
                  <p className="text-zinc-400 text-sm mb-6">
                    Get expert {service.shortTitle.toLowerCase()} in {city.name}. Call now for a free estimate.
                  </p>
                  <a
                    href={SITE.phoneHref}
                    className="block w-full text-center bg-red-mogo hover:bg-red-mogo-dark text-white font-semibold py-3 rounded transition-colors mb-3"
                  >
                    {SITE.phone}
                  </a>
                  <p className="text-zinc-500 text-xs text-center">
                    {SITE.hours[0].day}: {SITE.hours[0].time}
                  </p>
                </div>
              </FadeIn>

              {/* Nearby Locations */}
              <FadeIn delay={0.1}>
                <div className="bg-zinc-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Also Serving Nearby Areas</h3>
                  <ul className="space-y-2">
                    {nearbyCities.map((nearby) => (
                      <li key={nearby.slug}>
                        <a
                          href={`/services/${serviceSlug}/${nearby.slug}/`}
                          className="flex items-center justify-between text-zinc-600 hover:text-zinc-900 group"
                        >
                          <span>{nearby.name}</span>
                          <ArrowRight size={16} className="text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Other Services */}
              <FadeIn delay={0.2}>
                <div className="bg-zinc-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Other Services in {city.name}</h3>
                  <ul className="space-y-2">
                    {SEO_SERVICES.filter(s => s.slug !== serviceSlug).slice(0, 5).map((otherService) => (
                      <li key={otherService.slug}>
                        <a
                          href={`/services/${otherService.slug}/${citySlug}/`}
                          className="flex items-center justify-between text-zinc-600 hover:text-zinc-900 group"
                        >
                          <span>{otherService.shortTitle}</span>
                          <ArrowRight size={16} className="text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Visit Our Westlake Shop
              </h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                Conveniently located for all {city.name} residents. Just {city.distanceFromShop || 'minutes from'} {city.distanceFromShop ? 'miles from' : ''} {city.name}.
              </p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={SITE.mapsEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mogo Auto Services Location"
                className="w-full"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-zinc-900 font-semibold">{SITE.address}</p>
              <p className="text-zinc-500 text-sm mt-1">
                {SITE.hours.map(h => `${h.day}: ${h.time}`).join(' | ')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-mogo py-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Get {service.shortTitle} in {city.name} Today
              </h2>
              <p className="text-red-100 mb-8 max-w-xl mx-auto">
                ASE certified mechanics, honest pricing, and quality you can trust. 
                Serving {city.name} and the greater Westlake area for over 20 years.
              </p>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-3 bg-white text-red-mogo font-bold text-lg px-8 py-4 rounded hover:bg-zinc-50 transition-colors"
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

// Helper Components
function TrustSignal({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Star;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={24} weight="bold" className="text-red-mogo shrink-0" />
      <div>
        <p className="font-semibold text-zinc-900">{title}</p>
        <p className="text-zinc-500 text-sm">{description}</p>
      </div>
    </div>
  );
}

function BenefitItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-red-mogo/10 flex items-center justify-center shrink-0 mt-0.5">
        <div className="w-2 h-2 rounded-full bg-red-mogo" />
      </div>
      <div>
        <p className="font-semibold text-zinc-900">{title}</p>
        <p className="text-zinc-600 text-sm">{description}</p>
      </div>
    </li>
  );
}
