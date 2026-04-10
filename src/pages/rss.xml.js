import rss from ‘@astrojs/rss’
import { getCollection } from ‘astro:content’
import { siteConfig } from ‘../data/portfolio’

export async function GET(context) {
  const postsData = await getCollection(‘posts’)
  const posts = postsData
    .filter((p) => p.data.ready)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

  return rss({
    title: `${siteConfig.name}’s Blog`,
    description: ‘Articles about software development, engineering, and things I’m learning.’,
    site: context.site ?? siteConfig.url,
    xmlns: {
      atom: ‘http://www.w3.org/2005/Atom’,
    },
    customData: `<atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />`,
    items: posts.map((po