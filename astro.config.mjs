// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por tu dominio real. Se usa para canonical, sitemap y Open Graph.
  site: 'https://eduardostorres.dev',

  // Internacionalización por ruta. El español (por defecto) vive sin prefijo
  // (`/`, `/acerca`…); el inglés bajo `/en` con slugs traducidos. Los slugs
  // por idioma se definen en `src/i18n` (mapa `routes`), ya que Astro prefija
  // por locale pero no traduce el slug de cada página.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Tailwind CSS v4 se integra mediante su plugin oficial de Vite.
  vite: {
    plugins: [tailwindcss()],
  },
});
