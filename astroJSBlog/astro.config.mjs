import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';
import markdownIntegration from '@astropub/md';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'tojmg0db',
      dataset: 'production',
      apiVersion: '2021-03-25',
      useCdn: true,
    }),
    [react()],
    tailwind(),
    markdownIntegration(),
  ],
  markdown: {
    smartypants: false,
    gfm: false,
    remarkPlugins: [],
    rehypePlugins: [],
    syntaxHighlight: 'shiki',
  },
  components: {
    types: {
      unknown: './src/pages/article/[...slug].astro',
    },
  },
});
