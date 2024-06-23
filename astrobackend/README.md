# Astro Blog Sanity BackEnd In TypeScript

- Back End
- Add Your Own Sanity Project ID. in sanity.config.ts

```ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
  name: "default",
  title: "astroBackEnd",

  projectId: "", // Add Project ID Here
  dataset: "production",

  plugins: [deskTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
});
```

- Also in sanity.cli.ts

```ts
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "",
    dataset: "production",
  },
});
```


- Start by

```bash
yarn run dev
```

- Deployed Already on Sanity Just Make Sure to Make it production and also add the url of the website you deployed as authenticated to use.



1. [Markdown input dashboard](https://www.sanity.io/plugins/sanity-plugin-markdown)

2. [X-Content-Type-Options - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)

3. [schema-types-template for project](https://github.com/omarashzeinhom/astro-js-sanity-blog-backend/tree/main/schemas)