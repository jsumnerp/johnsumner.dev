// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://johnsumner.dev',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), playformCompress()]
});