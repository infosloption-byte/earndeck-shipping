import type { MetadataRoute } from 'next';
import { site, services } from '@/lib/site';

// Include only intended indexable pages. Avoid inaccurate generated change dates.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/team', '/ports', '/services', '/contact', '/careers', '/certifications', '/privacy'];
  return [...pages, ...services.map(service => '/services/' + service.slug)].map(path => ({
    url: site.url + path,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : path === '/services' ? 0.9 : 0.7,
  }));
}
