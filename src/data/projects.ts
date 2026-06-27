import type { Lang } from '../i18n';

/**
 * Registro de tecnologías: única fuente de verdad para el filtro y las
 * etiquetas de las tarjetas. El `value` es el slug estable usado para filtrar;
 * el `label` es el nombre visible.
 */
export const technologies = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'astro', label: 'Astro' },
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'tailwindcss', label: 'Tailwind CSS' },
  { value: 'docker', label: 'Docker' },
  { value: 'postgresql', label: 'PostgreSQL' },
] as const;

/** Slug de una tecnología conocida. */
export type TechValue = (typeof technologies)[number]['value'];

const techLabels = new Map<string, string>(
  technologies.map((tech) => [tech.value, tech.label]),
);

/** Nombre visible de una tecnología a partir de su slug. */
export function techLabel(value: TechValue): string {
  return techLabels.get(value) ?? value;
}

export interface Project {
  /** Título del proyecto por idioma. */
  title: Record<Lang, string>;
  /** Descripción breve por idioma. */
  description: Record<Lang, string>;
  /** Tecnologías (slugs de `technologies`); definen el filtrado. */
  tech: TechValue[];
  /** Año de referencia: ordena la lista y se muestra en la tarjeta. */
  year: number;
  /** Repositorio (opcional). Un `#` o vacío se omite en la tarjeta. */
  repo?: string;
  /** Demo en vivo (opcional). Un `#` o vacío se omite en la tarjeta. */
  demo?: string;
}

/**
 * Proyectos de ejemplo. Sustituye este arreglo por tus proyectos reales: cada
 * `tech` debe usar un slug de `technologies` para que el filtro funcione. Los
 * enlaces son placeholders (perfil de GitHub / sitio); reemplázalos por la URL
 * real de cada proyecto. Si dejas un `#`, ese enlace no se renderiza.
 */
export const projects: Project[] = [
  {
    title: { es: 'KuxCal', en: 'KuxCal' },
    description: {
      es: 'Calculadoras financieras gratuitas, precisas y fáciles de usar para inversiones, CETES, créditos y ahorro en México.',
      en: 'Free, accurate, and easy-to-use tools for calculating investments, CETES, loans, and savings in Mexico.',
    },
    tech: ['astro', 'typescript'],
    year: 2026,
    repo: 'https://github.com/eduardostorres/kuxcal',
    demo: 'https://kuxcal.vercel.app/',
  },
];
