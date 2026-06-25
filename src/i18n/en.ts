import type { Translation } from './index';

/**
 * English. Must satisfy the canonical `Translation` shape defined by `es`,
 * so missing or misnamed keys are caught at build time.
 */
export const en = {
  meta: {
    title: 'Eduardo S. | Portfolio',
    description:
      'Personal website of Eduardo S. | Currently under construction.',
  },
  hero: {
    subtitle: 'My Portfolio',
    status: 'Currently under construction.',
  },
  footer: {
    rights: 'All rights reserved.',
  },
  a11y: {
    home: 'Go to home',
    theme: 'Toggle theme',
    language: 'Change language',
    social: 'Social links',
  },
} satisfies Translation;
