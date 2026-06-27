import type { APIRoute } from 'astro';
import { routes, routeKeys, supportedLangs, defaultLang } from '../i18n';

/**
 * Sitemap generado a partir del mapa de rutas (`src/i18n`), sin dependencias.
 * Cada página aparece una vez por idioma con sus enlaces alternos `hreflang`,
 * para que los buscadores relacionen las versiones ES/EN de una misma página.
 *
 * Salida estática (`/sitemap.xml`) en el build por defecto de Astro.
 */
export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://eduardostorres.dev/');
  const abs = (path: string): string => new URL(path, base).href;

  const alternatesFor = (key: (typeof routeKeys)[number]): string =>
    [
      ...supportedLangs.map(
        (lang) =>
          `    <xhtml:link rel="alternate" hreflang="${lang}" href="${abs(routes[key][lang])}" />`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(routes[key][defaultLang])}" />`,
    ].join('\n');

  const urls = routeKeys
    .flatMap((key) =>
      supportedLangs.map(
        (lang) =>
          `  <url>\n    <loc>${abs(routes[key][lang])}</loc>\n${alternatesFor(key)}\n  </url>`,
      ),
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
