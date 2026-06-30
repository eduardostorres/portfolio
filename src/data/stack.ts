/**
 * Stack técnico, agrupado. Las claves de grupo coinciden con
 * `stack.groups` del diccionario i18n (languages, backend, frontend, infra),
 * de modo que el título visible de cada grupo sale del idioma activo y los
 * ítems —nombres de tecnología, neutros— viven aquí.
 */
export const stack = {
  languages: ['TypeScript', 'JavaScript', 'PHP', 'Python'],
  backend: ['Node.js', 'Express', 'Laravel', 'CodeIgniter', 'REST & SOAP'],
  frontend: ['React', 'Astro', 'Tailwind CSS'],
  infra: ['PostgreSQL', 'MySQL', 'Docker', 'AWS', 'Git'],
} as const;

/** Clave de un grupo del stack (coincide con `stack.groups` en i18n). */
export type StackGroup = keyof typeof stack;

/** Orden de presentación de los grupos. */
export const stackGroupOrder: StackGroup[] = [
  'languages',
  'backend',
  'frontend',
  'infra',
];
