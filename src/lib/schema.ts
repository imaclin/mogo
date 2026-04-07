// src/lib/schema.ts
// Schema.org structured data generators for local SEO

import { SITE } from '@/lib/content';
import type { SEOService, ServiceArea } from './seo-data';

export interface SchemaFAQ {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface SchemaFAQPage {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: SchemaFAQ[];
}

export interface SchemaLocalBusiness {
  '@context': 'https://schema.org';
  '@type': 'AutoRepair';
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': 'GeoCoordinates';
    latitude: string;
    longitude: string;
  };
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification';
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }[];
  priceRange: string;
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: string;
    reviewCount: string;
  };
  areaServed: {
    '@type': 'City';
    name: string;
    containedInPlace?: {
      '@type': 'State';
      name: string;
    };
  };
  serviceType: string[];
}

export interface SchemaService {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  description: string;
  provider: {
    '@type': 'AutoRepair';
    name: string;
    telephone: string;
    address: {
      '@type': 'PostalAddress';
      addressLocality: string;
      addressRegion: string;
    };
  };
  areaServed: {
    '@type': 'City';
    name: string;
  };
  serviceType: string;
  offers?: {
    '@type': 'Offer';
    priceCurrency: string;
    availability: string;
    validFrom: string;
  };
}

export interface SchemaBreadcrumbList {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }[];
}

export interface SchemaWebPage {
  '@context': 'https://schema.org';
  '@type': 'WebPage';
  name: string;
  description: string;
  url: string;
  mainEntity?: unknown;
}

// Generate LocalBusiness schema with area targeting
export function generateLocalBusinessSchema(city: ServiceArea): SchemaLocalBusiness {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: SITE.name,
    description: `${SITE.name} - ASE certified auto repair serving ${city.name}, ${city.state} and surrounding areas. ${SITE.tagline}`,
    url: 'https://mogoautoservices.com',
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '27303 Detroit Rd',
      addressLocality: 'Westlake',
      addressRegion: 'OH',
      postalCode: '44145',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.455',
      longitude: '-81.917',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: city.state,
      },
    },
    serviceType: [
      'Brake Repair',
      'Muffler Repair',
      'Oil Change',
      'Tire Service',
      'Car Diagnostics',
      'Battery Replacement',
      'Suspension Repair',
      'Cooling System Service',
      'Alternator & Starter',
      'Transmission Service',
      'Preventive Maintenance',
      'Emergency Repairs',
    ],
  };
}

// Generate Service schema for specific service + city
export function generateServiceSchema(service: SEOService, city: ServiceArea): SchemaService {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in ${city.name}, ${city.state}`,
    description: `Professional ${service.shortTitle.toLowerCase()} in ${city.name}, Ohio. ${service.description}`,
    provider: {
      '@type': 'AutoRepair',
      name: SITE.name,
      telephone: SITE.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Westlake',
        addressRegion: 'OH',
      },
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    serviceType: service.shortTitle,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
    },
  };
}

// Generate FAQ schema for service pages
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
): SchemaFAQPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(
  items: { name: string; url?: string }[]
): SchemaBreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate WebPage schema
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
  mainEntity?: unknown
): SchemaWebPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    mainEntity,
  };
}

// Generate full page schema combining multiple types
export function generateFullPageSchema(
  service: SEOService,
  city: ServiceArea,
  pageUrl: string
): unknown[] {
  return [
    generateLocalBusinessSchema(city),
    generateServiceSchema(service, city),
    generateFAQSchema(service.faqs),
    generateWebPageSchema(
      `${service.title} in ${city.name}, ${city.state}`,
      service.description,
      pageUrl
    ),
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://mogoautoservices.com/' },
      { name: 'Services', url: 'https://mogoautoservices.com/services/' },
      { name: service.shortTitle, url: `https://mogoautoservices.com/services/${service.slug}/` },
      { name: city.name },
    ]),
  ];
}
