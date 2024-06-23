# Setup
- Front End
- Add Your Own Sanity Project ID. in astro.config.mjs

```mjs
export default defineConfig({
  integrations: [
    sanity({
      projectId: "", //add your sanity project id here
      dataset: "production",
      apiVersion: "2021-03-25",
      useCdn: true,
    }),
    [react()],
    tailwind(),
  ],
  markdown: {
    smartypants: false,
    gfm: false,
    remarkPlugins: [],
    rehypePlugins: [],
    //syntaxHighlight: 'shiki',
  },
  components: {
    types: {
      unknown: "./src/pages/article/[...slug].astro",
    },
  },
});
```

## Start By

- Start by

```bash
yarn run dev
```

- Deploy by `bash yarn build` and upload `./dist/` directory to [netlify](https://app.netlify.com)
