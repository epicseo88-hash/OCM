import type { MetadataRoute } from 'next'
import { casinos } from '@/content/casinos'
import { posts } from '@/content/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://igaminghub.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base + '/', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: base + '/reviews/', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: base + '/blog/', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: base + '/about/', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  const casinoRoutes: MetadataRoute.Sitemap = casinos.map((c) => ({
    url: `${base}/reviews/${c.slug}/`,
    lastModified: new Date(c.datePublished),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: new Date(p.datePublished),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...casinoRoutes, ...postRoutes]
}
