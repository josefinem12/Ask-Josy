// Tells Astro where the guides are. Each guide is a Markdown file in
// src/content/guides/en/ or src/content/guides/de/.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(100), // lower numbers are shown first
  }),
});

export const collections = { guides };
