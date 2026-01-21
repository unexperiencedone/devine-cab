import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block folders you don't want on Google
    },
    sitemap: 'https://www.bansaltravels.com/sitemap.xml',
  };
}