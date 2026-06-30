import type { Lang } from '../i18n';

/**
 * Registro de tecnologías: única fuente de verdad para las etiquetas de los
 * casos de estudio. El `value` es el slug estable; el `label` es el nombre
 * visible.
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

/** Texto bilingüe. */
type Bilingual = Record<Lang, string>;

export interface Project {
  /** Título del proyecto (no se traduce salvo necesidad). */
  title: Bilingual;
  /** Descripción breve por idioma — resumen de una línea. */
  description: Bilingual;
  /** Caso de estudio: el problema que se resolvía. */
  problem?: Bilingual;
  /** Caso de estudio: la decisión técnica / solución. */
  solution?: Bilingual;
  /** Caso de estudio: el resultado o estado actual. */
  result?: Bilingual;
  /** Tecnologías (slugs de `technologies`). */
  tech: TechValue[];
  /** Año de referencia: ordena la lista y se muestra en el caso de estudio. */
  year: number;
  /** Repositorio (opcional). Un `#` o vacío se omite. */
  repo?: string;
  /** Demo en vivo (opcional). Un `#` o vacío se omite. */
  demo?: string;
  /** Marca el proyecto como aún en desarrollo. */
  inProgress?: boolean;
  /**
   * Captura grande (opcional). Ruta dentro de `/public` (p. ej.
   * `/work/kuxcal.png`). Si se omite, el caso de estudio muestra un panel
   * tipográfico elegante en su lugar, listo para sustituir por la imagen real.
   */
  image?: string;
}

/**
 * Casos de estudio. Sustituye o amplía estos proyectos por los tuyos: cada
 * `tech` usa un slug de `technologies`. Coloca capturas reales en `/public` y
 * apúntalas con `image` para que se muestren en lugar del panel tipográfico.
 */
export const projects: Project[] = [
  {
    title: { es: 'KuxCal', en: 'KuxCal' },
    description: {
      es: 'Calculadoras financieras gratuitas, precisas y fáciles de usar para inversiones, CETES, créditos y ahorro en México.',
      en: 'Free, accurate and easy-to-use financial calculators for investments, CETES, loans and savings in Mexico.',
    },
    problem: {
      es: 'Las calculadoras financieras en México suelen ser imprecisas, lentas y están saturadas de anuncios.',
      en: 'Financial calculators in Mexico are often inaccurate, slow and buried under ads.',
    },
    solution: {
      es: 'Una suite de calculadoras —inversiones, CETES, créditos y ahorro— construida con Astro para servir HTML estático, sin fricción ni distracciones.',
      en: 'A suite of calculators —investments, CETES, loans and savings— built with Astro to ship static HTML, with no friction and no distractions.',
    },
    result: {
      es: 'Una herramienta gratuita, rápida y precisa, enfocada en una sola cosa: ayudar a decidir con claridad.',
      en: 'A free, fast and precise tool focused on one thing: helping people decide with clarity.',
    },
    tech: ['astro', 'typescript'],
    year: 2026,
    repo: 'https://github.com/eduardostorres/kuxcal',
    demo: 'https://kuxcal.vercel.app/',
  },
  {
    title: { es: 'SalonDiEliss', en: 'SalonDiEliss' },
    description: {
      es: 'Sitio estilo Linktree para un salón de belleza: una landing ligera y responsiva enfocada en convertir visitas en citas por WhatsApp.',
      en: 'Linktree-style site for a beauty salon: a lightweight, responsive landing focused on turning visits into WhatsApp appointments.',
    },
    problem: {
      es: 'Un salón de belleza necesitaba convertir visitas en citas sin la fricción de un sitio pesado.',
      en: 'A beauty salon needed to turn visits into appointments without the friction of a heavy website.',
    },
    solution: {
      es: 'Una landing tipo Linktree, ligera y totalmente responsiva, que canaliza cada visita directo a WhatsApp.',
      en: 'A lightweight, fully responsive Linktree-style landing that funnels every visit straight to WhatsApp.',
    },
    result: {
      es: 'Sitio en producción, optimizado para móvil y conversión, con tiempos de carga mínimos.',
      en: 'A live site, optimized for mobile and conversion, with minimal load times.',
    },
    tech: ['astro', 'typescript'],
    year: 2026,
    demo: 'https://salondieliss.com/',
  },
  {
    title: { es: 'Vault', en: 'Vault' },
    description: {
      es: 'Un proyecto personal en desarrollo. Pronto, más detalles.',
      en: 'A personal project in the works. More details soon.',
    },
    tech: ['astro', 'javascript'],
    year: 2026,
    inProgress: true,
  },
];
