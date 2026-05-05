// app/sitemap.ts
import { MetadataRoute } from 'next';

// Add this line to force static generation
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://github.com/ayyan420',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add other URLs as needed
  ];
}