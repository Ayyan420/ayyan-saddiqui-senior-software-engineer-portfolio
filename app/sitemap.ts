import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://github.com/ayyan420',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more URLs as needed
  ];
}
