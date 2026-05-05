import { MetadataRoute } from 'next';

// Add this line to force static generation
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://github.com/ayyan420/sitemap.xml',
  };
}