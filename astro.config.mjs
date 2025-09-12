import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false,
    })
  ],
  site: 'https://andrescgaehd97.github.io/',
  base: '/',
  output: 'static',
  build: {
    assets: '_astro',
    inlineStylesheets: 'never'
  },
  vite: {
    build: {
      rollupOptions: {
        external: [],
        output: {
          entryFileNames: '_astro/[name].[hash].js',
          chunkFileNames: '_astro/[name].[hash].js',
          assetFileNames: '_astro/[name].[hash].[ext]'
        }
      }
    }
  }
});
