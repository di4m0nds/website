import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '../data/portfolio'

export async function GET(context) {
  const postsData = await getCollection('posts')
  const posts = postsData
    .filter((p) => p.data.ready)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

  return rss({
    title: siteConfig.name + ' — Blog',
    description: 'Articles about software development, mobile engineering, and things I am learning.',
    site: context.site ?? siteConfig.url,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData:
      '<atom:link href="' + (context.site ?? siteConfig.url) + '/rss.xml" rel="self" type="application/rss+xml" />',
    items: posts.map((post) => ({
      title:       post.data.title,
      description: post.data.description,
      pubDate:     post.data.pubDate,
      link:        '/posts/' + post.slug + '/',
      