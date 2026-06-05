import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://poisonpawn.com'
  const pages = ['', '/how-it-works', '/case-studies', '/bring-it-to-your-team', '/media', '/founder', '/contact']

  return pages.map((path, i) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: i === 0 ? 1 : 0.8,
  }))
}
