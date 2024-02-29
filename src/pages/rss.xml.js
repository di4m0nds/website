import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const postsData = await getCollection('posts')
  const posts = postsData
    .sort((a, b) => a.data.pubDate.valueOf() + b.data.pubDate.valueOf())
    .filter(item => item.data.ready) // Only ready posts

  return rss({
    title: 'Javi’s Blog',
    description: 'Posts about topics that I currently learning.',
    site: 'https://javiersilvestri.vercel.app',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      tags: `${post.data.tags}`,
      ready: `${post.data.ready}`,
      pubDate: post.data.pubDate,
      link: `/posts/${post.slug}/`,
    })),
  });
}

