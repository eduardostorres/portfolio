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

/** Type guard para validar un código de idioma desconocido. */
export function isLang(value: string | null | undefined): value is Lang {
  return value != null && value in languages;
}

/** Devuelve el diccionario de un idioma. */
export function getTranslation(lang: Lang): Translation {
  return translations[lang];
}

/**
 * Resuelve un valor del diccionario por ruta con puntos
 * (p. ej. `"pages.about.meta"`). Misma forma que el resolutor del runtime
 * en `Layout.astro`, para usarlo en el render del servidor.
 */
export function tPath(lang: Lang, path: string): string | undefined {
  const value = path
    .split('.')
    .reduce<unknown>(
      (acc, key) =>
        acc == null ? acc : (acc as Record<string, unknown>)[key],
      translations[lang],
    );
  return typeof value === 'string' ? value : undefined;
}
