import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: true,
    })
  ],
  site: 'https://andrescgaehd97.github.io/',
  base: '/',
  output: 'static',
  build: {
    assets: '_astro',
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: '_astro/[name].[hash][extname]'
        }
      }
    }
  }
});
