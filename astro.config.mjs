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

  // Content Security Policy. Astro genera, en build, los hashes SHA-256 de cada
  // script y `<style>` inline (incluido el script anti-FOUC, que debe ser inline
  // y bloqueante) y los inyecta en `script-src`/`style-src`, evitando recurrir a
  // `'unsafe-inline'`. Aquí completamos el resto de directivas para un origen
  // propio y cerrado. `frame-ancestors` no es aplicable vía <meta> (lo cubre la
  // cabecera HTTP `X-Frame-Options: DENY`, ver `public/_headers` / `vercel.json`).
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
      ],
    },
  },
});
