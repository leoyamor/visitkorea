import type { MetadataRoute } from 'next';
import { getAllRoutes, siteUrl } from '../lib/pages';

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllRoutes().map((path) => ({
    url: `${siteUrl}${path === '/' ? '/' : `${path}/`}`,
    lastModified: '2026-02-03'
  }));
}
