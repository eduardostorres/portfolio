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
      // Astro hashea automáticamente los scripts y `<style>` que procesa, pero NO
      // los marcados con `is:inline` (los deja intactos a propósito). Nuestros tres
      // scripts inline y bloqueantes —fijar tema antes del primer pintado, detectar
      // idioma y el "reveal" por scroll— deben seguir siendo inline, así que aquí
      // añadimos sus hashes a mano para que el navegador no los bloquee bajo
      // `script-src`/`script-src-elem`. Son estáticos, de modo que el hash es estable.
      //
      // ⚠️ Si editas el cuerpo de cualquiera de esos `<script is:inline>` en
      // `Layout.astro`, regenera su hash. La forma más fiable es leerlo del HTML ya
      // construido (el hash es del contenido EXACTO emitido):
      //   pnpm build && node -e "const{readFileSync}=require('fs'),{createHash}=require('crypto');const h=readFileSync('dist/index.html','utf8');for(const m of h.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)){const t=(m[1].match(/type=\"([^\"]*)\"/)||[])[1];if(t&&t!=='module')continue;if(!m[2].trim())continue;console.log('sha256-'+createHash('sha256').update(m[2]).digest('base64'),'=>',m[2].trim().slice(0,50).replace(/\s+/g,' '))}"
      scriptDirective: {
        hashes: [
          // (() => { ... fijar tema antes del primer pintado ... })()
          'sha256-bRGJunMEyhLU0jJ/7Ou3LwrVEDGGiw0/Uajs6AXwKg0=',
          // (() => { ... detección y redirección de idioma ... })()
          'sha256-VjiMuYVLeTVXParYj7VaDjLgY7Eme899VZM62uy0KEw=',
          // (() => { ... reveal de [data-reveal] por scroll ... })()
          'sha256-OneX4mS4JcxF6tvsPxK3mRHnbzwrvpGOnU0nhKcAf48=',
        ],
      },
    },
  },
});
