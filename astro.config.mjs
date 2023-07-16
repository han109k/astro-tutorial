import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  base: '/',
  integrations: [preact()],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
