# Mogo Auto Services - Programmatic SEO Strategy

## Overview
Generate hundreds of SEO-optimized landing pages targeting local service-based keywords to dominate search results in Westlake, OH and surrounding areas.

## Target Matrix

### Services (12)
1. Brake Repair / Brake Service
2. Muffler & Exhaust Repair
3. Oil Change
4. Tire Replacement
5. Car Diagnostics / Check Engine Light
6. Battery Replacement
7. Suspension & Steering
8. Cooling System / Radiator Repair
9. Alternator & Starter
10. Transmission Service
11. Preventive Maintenance
12. Emergency Breakdown Service

### Service Area - Surrounding Cities (15)
- Westlake, OH (primary)
- Bay Village, OH
- Rocky River, OH
- Lakewood, OH
- Fairview Park, OH
- North Olmsted, OH
- Olmsted Falls, OH
- Berea, OH
- Middleburg Heights, OH
- Parma, OH
- Strongsville, OH
- Avon, OH
- Avon Lake, OH
- Sheffield Lake, OH
- Elyria, OH

### Nearby ZIP Codes (20+)
44145, 44140, 44116, 44107, 44126, 44136, 44138, 44117, 44130, 44129, 44134, 44142, 44136, 44012, 44011, 44035, 44039, 44070, 44147, 44017

## Page Generation Formula

### Total Pages: 180+
- **Service + City Pages**: 12 services × 15 cities = 180 pages
- **Service + ZIP Code Pages**: 12 services × 20 ZIPs = 240 pages (optional expansion)
- **Near Me Pages**: 12 services × 1 = 12 pages
- **Generic Service Pages**: 12 pages

## URL Structure
```
/services/[service-slug]/[city-slug]/
/services/brake-repair/westlake-oh/
/services/oil-change/bay-village-oh/
/services/tire-replacement/rocky-river-oh/
```

## Content Template Structure

### H1 Pattern
"[Service] in [City], OH | Mogo Auto Services"

### Title Tag Pattern
"[Service] [City], OH | ASE Certified | Mogo Auto (440) 871-4949"

### Meta Description Pattern
"Professional [service] in [City], Ohio. ASE certified mechanics, [X]+ years experience. Same-day service available. Call (440) 871-4949. Free estimates!"

### Content Sections (Auto-Generated)
1. **Hero** - Location-specific messaging
2. **Why Choose Us** - Local trust signals
3. **Service Details** - Unique per service type
4. **Service Area Map** - Distance from shop
5. **Local Testimonials** - Rotated per page
6. **FAQ Schema** - Service-specific FAQs
7. **CTA** - Phone number + map

## Technical SEO Implementation

### 1. Dynamic Route Handler
```typescript
// app/services/[service]/[city]/page.tsx
// Generates: /services/brake-repair/westlake-oh/
```

### 2. Static Params Generation
- Pre-generate all 180+ page combinations at build time
- Include in sitemap.xml

### 3. Schema.org Markup
```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "[Service] in [City] - Mogo Auto Services",
  "areaServed": {
    "@type": "City",
    "name": "[City]"
  },
  "serviceType": "[Service Name]"
}
```

### 4. Internal Linking Strategy
- Breadcrumb navigation
- Related services in sidebar
- Nearby cities grid
- Service area links

## Keyword Variations (Per Service)

### Primary Keywords
- "[service] [city] ohio"
- "[service] near [city]"
- "[service] [city]"

### Secondary Keywords
- "best [service] [city]"
- "affordable [service] [city]"
- "[service] shop [city]"
- "[service] mechanic [city]"
- "same day [service] [city]"
- " ASE certified [service] [city]"

### Long-tail Keywords
- "how much does [service] cost in [city]"
- "[service] open saturday [city]"
- "emergency [service] [city]"
- "[service] coupons [city]"

## Content Differentiation Strategy

To avoid duplicate content penalties, each page includes:
1. Unique opening paragraph mentioning specific landmarks/streets
2. Local distance calculation from shop to city center
3. City-specific testimonials (rotated)
4. Service-specific tips for that geographic area
5. Nearby city cross-links

## Implementation Phases

### Phase 1: Core Setup (Week 1)
- Create data structures for services + locations
- Build page generator template
- Add Schema.org markup
- Implement sitemap generation

### Phase 2: Content Generation (Week 2)
- Write 12 service templates
- Create 15 city variations
- Generate all 180+ pages
- Test all URLs

### Phase 3: Optimization (Week 3)
- Add internal linking
- Implement FAQ schemas
- Optimize images and speed
- Submit sitemap to Google

### Phase 4: Monitoring (Ongoing)
- Track rankings per page
- A/B test meta descriptions
- Update content based on performance
- Add new cities as needed

## Expected Results

### SEO Metrics
- 180+ indexed pages within 30 days
- Target: 50+ keywords ranking in top 10
- 500+ organic clicks per month (Month 3)
- Local pack appearance for all services

## Success Metrics
- Google Search Console impressions
- Organic traffic growth
- Phone calls from organic search
- "Near me" query rankings

## Maintenance Plan
- Quarterly content refreshes
- Monthly ranking reports
- Add seasonal promotions
- Expand to new service areas
