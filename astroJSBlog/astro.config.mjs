import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    smartypants: false,
    gfm: false
  },
  integrations: [sanity({
    projectId: 'tojmg0db',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
  }),]
},[react()]);