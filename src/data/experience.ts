import type { Lang } from '../i18n';

/**
 * Trayectoria profesional para la línea de tiempo de la portada.
 *
 * Contenido editable: ajusta periodos, cargos y descripciones a tu historia
 * real. `to: null` marca el puesto actual (se renderiza con la palabra
 * «Hoy»/«Present» del diccionario, por idioma).
 */
export interface ExperienceEntry {
  /** Año de inicio (texto, para libertad de formato). */
  from: string;
  /** Año de fin, o `null` si es el puesto actual. */
  to: string | null;
  /** Cargo o título por idioma. */
  role: Record<Lang, string>;
  /** Contexto / organización (opcional). */
  org?: Record<Lang, string>;
  /** Descripción breve del rol. */
  description: Record<Lang, string>;
}

/** Más reciente primero. */
export const experience: ExperienceEntry[] = [
  {
    from: '2024',
    to: null,
    role: {
      es: 'Ingeniero backend & full-stack',
      en: 'Backend & full-stack engineer',
    },
    description: {
      es: 'Diseño de APIs REST y SOAP, módulos para sistemas ERP e integraciones empresariales, con foco en estabilidad, seguridad y mantenibilidad a largo plazo.',
      en: 'Designing REST and SOAP APIs, ERP modules and enterprise integrations, focused on long-term stability, security and maintainability.',
    },
  },
  {
    from: '2022',
    to: '2024',
    role: {
      es: 'Desarrollador full-stack',
      en: 'Full-stack developer',
    },
    description: {
      es: 'Aplicaciones web y plataformas administrativas; autenticación, autorización y automatización de procesos de negocio.',
      en: 'Web applications and admin platforms; authentication, authorization and business-process automation.',
    },
  },
  {
    from: '2021',
    to: '2022',
    role: {
      es: 'Desarrollador web',
      en: 'Web developer',
    },
    description: {
      es: 'Primeros módulos e integraciones en producción, construidos con PHP, Laravel y JavaScript.',
      en: 'First production modules and integrations, built with PHP, Laravel and JavaScript.',
    },
  },
  {
    from: '2021',
    to: '2021',
    role: {
      es: 'Ingeniería en Redes y Software',
      en: 'B.Eng. in Networks & Software',
    },
    org: {
      es: 'Formación',
      en: 'Education',
    },
    description: {
      es: 'Fundamentos de redes, sistemas operativos, bases de datos y desarrollo de software.',
      en: 'Foundations in networking, operating systems, databases and software development.',
    },
  },
];
