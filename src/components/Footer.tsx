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
