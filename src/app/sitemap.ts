import type { MetadataRoute } from 'next';
import { SEO_SERVICES, SERVICE_AREAS } from '@/lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mogoautoservices.com';
  const lastModified = new Date();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];
  
  // Service pages
  const servicePages = SEO_SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  
  // Location-based service pages (180+ pages)
  const locationServicePages: MetadataRoute.Sitemap = [];
  
  for (const service of SEO_SERVICES) {
    for (const city of SERVICE_AREAS) {
      locationServicePages.push({
        url: `${baseUrl}/services/${service.slug}/${city.slug}/`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      });
    }
  }
  
  return [...staticPages, ...servicePages, ...locationServicePages];
}
