import { es } from './es';
import { en } from './en';

/**
 * Idiomas disponibles. Para agregar uno nuevo:
 *   1. Crea `src/i18n/<código>.ts` exportando un objeto que cumpla `Translation`.
 *   2. Añádelo a `languages` y a `translations` aquí abajo.
 * Todo lo demás (selector, detección, persistencia) se adapta automáticamente.
 */
export const languages = {
  es: 'Español',
  en: 'English',
} as const;

/** Locale por defecto: se usa en el render del servidor y como respaldo. */
export const defaultLang: Lang = 'es';

export const translations = { es, en } as const;

/** Forma canónica de un diccionario, derivada del locale por defecto. */
export type Translation = typeof es;

export type Lang = keyof typeof languages;

export const supportedLangs = Object.keys(languages) as Lang[];

/** Devuelve el diccionario de un idioma. */
export function getTranslation(lang: Lang): Translation {
  return translations[lang];
}

/**
 * Mapa de rutas por idioma. La clave (`RouteKey`) identifica la página de forma
 * estable; el slug cambia por idioma. El español (por defecto) vive sin prefijo
 * y el inglés bajo `/en` con slugs traducidos.
 *
 * Es la fuente de verdad para:
 *   - Los enlaces del menú (`Header`).
 *   - El selector de idioma (`LanguageSwitcher`), que enlaza a la misma página
 *     en el otro idioma.
 *   - Los `<link rel="alternate" hreflang>` y la canónica (`Layout`).
 *
 * Para añadir una página: agrega una entrada aquí y crea sus archivos en
 * `src/pages` (ES) y `src/pages/en` (EN).
 */
export const routes = {
  home: { es: '/', en: '/en' },
  about: { es: '/acerca', en: '/en/about' },
} as const satisfies Record<string, Record<Lang, string>>;

/** Identificador estable de cada página con ruta propia. */
export type RouteKey = keyof typeof routes;

export const routeKeys = Object.keys(routes) as RouteKey[];
