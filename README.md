# Astrojs Blog In typescript & react


- Add Your Own Sanity Project ID. in astro.config.mjs
```
export default defineConfig({
  
  integrations: [
    sanity({
      projectId: '',//add your sanity project id here
      dataset: 'production',
      apiVersion: '2021-03-25',
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
      unknown: './src/pages/article/[...slug].astro',
    },
  },
});
```

-
- Add Your Own Sanity Project ID. in sanity.config.ts
```
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { markdownSchema } from "sanity-plugin-markdown";


export default defineConfig({
  name: 'default',
  title: 'astroBackEnd',

  projectId: '', // Add Project ID Here
  dataset: 'production',

  plugins: [deskTool(), visionTool(),    markdownSchema(),],

  schema: {
    types: schemaTypes,
  },
  
})

```

```
import {defineCliConfig} from 'sanity/cli'

- Also in sanity.cli.ts
export default defineCliConfig({
  api: {
    projectId: '',
    dataset: 'production'
  }
})

```
# REUPDATING

- Built in [astro.build](https://astro.build/)
- [Demo](https://andgoedublog.netlify.app/)

## Front End

- Built in [astro.build](https://astro.build/)
- References
- [sanity-astro-blog](https://www.sanity.io/guides/sanity-astro-blog)
- [littlesticks - astro-sanity-minimal-starter](https://github.com/littlesticks/astro-sanity-minimal-starter/tree/graphql)
- [guides/sanity-astro-blog](https://www.sanity.io/guides/sanity-astro-blog)
- Start by ```bash yarn dev```
- References
- [A zero-JavaScript navigation menu for Tailwind CSS](https://www.brycewray.com/posts/2021/09/zero-javascript-navigation-menu-tailwind-css/)
- [ Tailwind CSS Social Media Icons & Buttons ](https://tailwind-elements.com/docs/standard/components/social-buttons/)
- [ Tailwind CSS Footer ](https://tailwind-elements.com/docs/standard/navigation/footer/)

- Deploy by ```bash yarn build``` and upload `./dist/` directory to [netlify](https://app.netlify.com)

### Back End

- Built in [sanity.io](https://www.sanity.io/)
- LOGIN With github
- Start by ```bash yarn start```


[sanity-plugin-markdown](https://www.sanity.io/plugins/sanity-plugin-markdown)