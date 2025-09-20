import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/wp-admin/',
        allow: '/wp-admin/admin-ajax.php',
      },
    ],
    sitemap: 'https://bingbangboom.org/sitemap.xml',
  };
}