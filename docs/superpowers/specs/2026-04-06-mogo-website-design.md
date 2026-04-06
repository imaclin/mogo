# Mogo Auto Services Website Design

**Date:** 2026-04-06
**Status:** Approved

---

## Overview

Rebuild mogoautoservices.com as a fast, modern, premium-minimal Next.js 15 site deployed to Vercel. All content migrated from the existing Wix site. No backend, no contact form — just clickable phone and email.

---

## Business Content

**Name:** Mogo Auto Services
**Tagline:** Your one-stop-shop for all your auto repair needs
**Credentials:** ASE Certified, 20+ years in business, all makes and models
**Phone:** (440) 871-4949
**Email:** info@mogoautoservices.com
**Address:** 27303 Detroit Rd, Westlake, OH 44145
**Hours:** Mon-Fri 8am-5pm, Saturday 9am-1pm

**Services:**
- Discount Muffler & Brake
- Car Checks / Computer Diagnostics
- Tire Change
- Oil & Brake Service
- Steering & Suspension
- Battery Change
- Breakdown Service
- Shocks & Struts
- Starters & Alternators
- Cooling & Heating Service
- Preventive Maintenance
- Exhaust & Mufflers

**Key selling points:**
- Unbeatable, affordable pricing
- ASE certified mechanics
- Fast service, same-day available on some services
- All makes and models
- Serving Westlake, OH community for 20+ years

---

## Pages

1. **Home** — Hero, Why Mogo (3 pillars), Services preview grid, Testimonials, CTA strip
2. **About** — Story, stats, ASE certification callout
3. **Services** — Full service grid with descriptions
4. **Contact** — Address, clickable phone, clickable email, hours, Google Maps embed

No Gallery page (deferred). No contact form.

---

## Tech Stack

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (scroll-triggered fade-ins)
- **Icons:** Phosphor Icons (@phosphor-icons/react)
- **Fonts:** Geist (via next/font/google)
- **Deployment:** Vercel

---

## Design System

| Token | Value |
|---|---|
| Background | `#ffffff` |
| Surface | `#fafafa` |
| Text primary | `#111111` (zinc-900) |
| Text secondary | `#555555` |
| Accent | `#8B1A1A` (dark red) |
| Accent hover | `#6F1515` |
| Dark section bg | `#111111` |

**Typography:** Geist Sans throughout. Display headings: `text-4xl md:text-6xl tracking-tighter`. Body: `text-base leading-relaxed`.

**Logo:** White PNG (`/public/logo.png`) on dark sections. CSS `invert` filter on light sections.

**Layout rules:**
- Left-aligned content (no centered hero)
- `max-w-7xl mx-auto px-6` containers
- DESIGN_VARIANCE: 8 — asymmetric, generous whitespace

---

## Page Breakdown

### Home (`/`)

1. **Nav** — Logo left, page links right, sticky, glass blur on scroll
2. **Hero** — Dark background (`#111111`), left-aligned. Large headline split across two lines. Subtext. Two CTAs: "Call Now" (tel link) + "Our Services" (link). Background: subtle dark red gradient or shop photo if available.
3. **Why Mogo** — 3 cards: "20+ Years Experience", "ASE Certified", "Unbeatable Prices". Left-border accent style.
4. **Services Preview** — Section header + 6-card grid (top services). Each card: icon, service name, one-line description. "See All Services" link.
5. **Testimonials** — 3 customer reviews pulled from Yelp/Birdeye. Star ratings, quote, name.
6. **CTA Strip** — Dark red background, "Ready to get back on the road?" + clickable phone number large.
7. **Footer** — Address, phone, email, hours, copyright.

### About (`/about`)

1. **Hero** — Page title, short subtext
2. **Story** — Two-column: text left (history, ASE, community), stats right (20+, ASE badge, all makes)
3. **Values** — 3 short cards: Fast Service, Affordable, Quality Parts

### Services (`/services`)

1. **Hero** — "What can we help you with?"
2. **Intro** — Short paragraph about the team
3. **Services Grid** — All 12 services, each with icon, title, description paragraph
4. **CTA** — Call to action at bottom

### Contact (`/contact`)

1. **Hero** — "Get in Touch"
2. **Info Block** — Phone (tel: link), Email (mailto: link), Address, Hours table
3. **Map** — Google Maps iframe embed for 27303 Detroit Rd, Westlake OH
4. **CTA** — "Give us a call" with large clickable number

---

## File Structure

```
src/
  app/
    layout.tsx          # Root layout, Nav, Footer
    page.tsx            # Home
    about/page.tsx
    services/page.tsx
    contact/page.tsx
    globals.css
  components/
    Nav.tsx
    Footer.tsx
    Hero.tsx            # Reusable hero section
    ServiceCard.tsx
    TestimonialCard.tsx
  lib/
    content.ts          # All site content as constants
public/
  logo.png              # Mogo white logo
```

---

## SEO

Each page exports `metadata` with unique title, description, and canonical URL. Structure supports programmatic SEO expansion later (service-specific pages at `/services/[slug]`).

---

## Out of Scope

- Contact form
- Gallery page
- CMS / editable content
- Blog
- Service-specific SEO pages (future)
