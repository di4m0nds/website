import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    ready:       z.boolean().default(false),
    number:      z.number(),
    title:       z.string(),
    pubDate:     z.coerce.date(),
    author:      z.string().default('Javier Silvestri'),
    description: z.string(),
    tags:        z.array(z.string()).default([]),
    ogImage:     z.string().optional(),
  }),
})

export const collections = { posts }
