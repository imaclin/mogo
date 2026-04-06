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
