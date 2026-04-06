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
