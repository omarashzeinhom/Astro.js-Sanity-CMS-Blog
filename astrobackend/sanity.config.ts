import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
//import { markdownSchema } from "sanity-plugin-markdown";


export default defineConfig({
  name: 'default',
  title: 'astroBackEnd',

  projectId: 'tojmg0db',
  dataset: 'production',

  plugins: [deskTool(), visionTool(),],

  schema: {
    types: schemaTypes,
  },
})
