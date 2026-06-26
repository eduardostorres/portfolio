import type { Translation } from './index';

/**
 * English. Must satisfy the canonical `Translation` shape defined by `es`,
 * so missing or misnamed keys are caught at build time.
 */
export const en = {
  meta: {
    title: 'Eduardo S. | Portfolio',
    description:
      "Eduardo S.'s personal site. Still building it, but almost there.",
  },
  hero: {
    subtitle: 'My Portfolio',
    status: 'Under construction',
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
    cv: 'CV',
    contact: 'Contact',
  },
  pages: {
    about: {
      title: 'About',
      meta: 'About · Eduardo S.',
      intro: 'A bit about me, my background and what drives me.',
    },
    projects: {
      title: 'Projects',
      meta: 'Projects · Eduardo S.',
      intro: 'A selection of projects I have worked on.',
    },
    blog: {
      title: 'Blog',
      meta: 'Blog · Eduardo S.',
      intro: 'Notes and articles about development, design and tech.',
    },
    cv: {
      title: 'CV',
      meta: 'CV · Eduardo S.',
      intro: 'My experience, education and skills at a glance.',
    },
    contact: {
      title: 'Contact',
      meta: 'Contact · Eduardo S.',
      intro: 'Want to talk? Drop me a line and I will gladly reply.',
    },
  },
  footer: {
    rights: 'All rights reserved.',
  },
  common: {
    soon: 'Coming soon',
  },
  a11y: {
    home: 'Back to home',
    theme: 'Toggle theme',
    language: 'Change language',
    nav: 'Main navigation',
    menu: 'Open menu',
  },
  social: {
    work: 'Work',
    personal: 'Personal',
  },
} satisfies Translation;
