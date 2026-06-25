// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por tu dominio real. Se usa para canonical, sitemap y Open Graph.
  site: 'https://eduardostorres.DEV',

  // Tailwind CSS v4 se integra mediante su plugin oficial de Vite.
  vite: {
    plugins: [tailwindcss()],
  },
});
