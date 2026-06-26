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
  footer: {
    rights: 'All rights reserved.',
  },
  a11y: {
    home: 'Back to home',
    theme: 'Toggle theme',
    language: 'Change language',
  },
  social: {
    work: 'Work',
    personal: 'Personal',
  },
} satisfies Translation;
