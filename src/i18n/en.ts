import type { Translation } from './index';

/**
 * English. Must satisfy the canonical `Translation` shape defined by `es`,
 * so missing or misnamed keys are caught at build time.
 */
export const en = {
  meta: {
    title: 'Eduardo Sánchez | Portfolio',
    description:
      'Portfolio of Eduardo Sebastián Sánchez Torres, a backend and full-stack engineer. I build software that stays useful as technology changes: APIs, ERP systems and enterprise integrations.',
  },

  nav: {
    about: 'Profile',
    work: 'Work',
    stack: 'Stack',
    experience: 'Experience',
    contact: 'Contact',
  },

  hero: {
    status: 'Available for new projects',
    role: 'Backend & full-stack engineer',
    tagline:
      'I build software that stays useful long after the last line of code is written.',
    ctaPrimary: 'View work',
    ctaSecondary: 'Get in touch',
  },

  about: {
    eyebrow: 'Profile',
    title: 'Engineering with judgment, not just code.',
    lead: "I'm Eduardo, a Network and Software Engineer focused on the backend, with more than four years designing applications, ERP systems, REST and SOAP APIs and integrations where stability and reliability are requirements, not nice-to-haves.",
    body: 'I learned early that writing code is only part of the job. The hard part begins when that code has to be maintained for years, grow with the product and stay clear for whoever reads it next. So I stopped asking only "does it work?" and started asking whether it is maintainable, whether it scales and whether it solves the right problem.',
    cta: 'Read the full essay',
  },

  work: {
    eyebrow: 'Work',
    title: 'Selected work.',
    intro:
      'A short selection. Each project framed as a case study: the problem, the technical decision and the outcome.',
    problem: 'Problem',
    solution: 'Solution',
    result: 'Outcome',
    stack: 'Stack',
    demo: 'View demo',
    code: 'Code',
    inProgress: 'In progress',
  },

  stack: {
    eyebrow: 'Stack',
    title: 'Tools, not goals.',
    intro:
      'Technologies change; fundamentals stay. These are the ones I reach for every day to build things that last.',
    groups: {
      languages: 'Languages',
      backend: 'Backend',
      frontend: 'Frontend',
      infra: 'Data & Infra',
    },
  },

  experience: {
    eyebrow: 'Experience',
    title: 'Path so far.',
    intro: 'Four years building software that gets used every day.',
    present: 'Present',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Shall we build something that lasts?',
    lead: "If you have a project in mind or just want to talk engineering, let's connect on LinkedIn.",
    cta: 'Connect on LinkedIn',
  },

  pages: {
    about: {
      title: 'About me',
      meta: 'Eduardo Sánchez — About',
      intro: 'A bit about me, my background and what drives me.',
      description:
        'Meet Eduardo Sebastián Sánchez Torres: his path as a backend and full-stack engineer, how he works and what drives him.',
    },
  },

  about_essay: {
    heading: 'About me',
    p1: `There is an idea that has stayed with me since I wrote my first lines of code: software can turn an idea into a tool that transforms the way people work, communicate and solve problems. That possibility is what sparked my interest in software development and, over time, grew into a profession I enjoy practicing every day.`,
    p2: `Hi! My name is Eduardo Sebastián Sánchez Torres. I am a Network and Software Engineer specializing in full-stack development with a strong focus on backend technologies, with more than four years of professional experience, I have designed and built web applications, ERP systems, REST and SOAP APIs, and enterprise integrations. Throughout my career, I have focused on delivering solutions where stability, security, and reliability are not optional but fundamental requirements.`,
    p3: `Early in my career I discovered that writing code is only part of the job. The real difficulty begins when that code has to be maintained for years, grow alongside a product and stay understandable for whoever will work on it in the future. That is when I stopped asking only "does it work?" and began asking different questions: is it easy to maintain? Is it scalable? Does it clearly express its intent? Does it solve the right problem?`,
    p4: `Those questions still guide every project I take part in.`,
    p5: `Over time I understood that technologies are tools, not goals. Today I can build with PHP, Laravel, CodeIgniter, Node.js, Express, Python, React, Astro or TypeScript, but none of them defines my work. What I really try to build are solutions that stay useful when technology inevitably evolves.`,
    p6: `That is why I especially enjoy the backend and software architecture. I am drawn to understanding how the different components of a system relate to one another, how information travels between services, how to design APIs that can evolve without breaking integrations, and how to turn complex business rules into solutions that are simple to understand. I care about software that keeps working when a project stops being small and starts facing new users, new features and new challenges.`,
    p7: `Over these years I have taken part in real projects used daily by companies and users. I have built modules for ERP systems, administrative platforms, authentication and authorization mechanisms, API integrations, process automation, and interfaces that connect different business areas. Each of those projects reminded me that behind every requirement there is a human need, and that very often the real value of an application lies not in the technology it uses, but in the time it saves, the mistakes it prevents and the decisions it makes easier.`,
    p8: `With that perspective I learned to look at software development from a broader angle. Before thinking about classes, functions or databases, I try to understand the context of the problem. Understanding how a company works, what its processes are, and what the people who will use the system expect tends to lead to better technical decisions than starting straight from the implementation.`,
    p9: `I also discovered that simplicity is one of the hardest qualities to achieve. It is relatively easy to write code that works; it is far harder to build systems that any member of the team can understand months later. That is why I try to give each module a clear responsibility, each architectural decision a purpose, and to make the code communicate as much as it executes.`,
    p10: `That constant pursuit of clarity led me to take an interest in principles such as Clean Code, SOLID, object-oriented design and design patterns. With time, however, I came to understand that even these good practices must be applied with judgment. There are no universal recipes or perfect architectures; there are different problems that call for different solutions. Experience is not about memorizing patterns, but about knowing when to use them and when to keep things deliberately simple.`,
    p11: `Outside of professional projects, I devote a good part of my time to continuing to learn. I am interested in going deeper into software architecture, distributed systems, cloud computing, Docker, AWS and the modern tooling that strengthens product development. I do not study these areas to accumulate knowledge or follow trends, but because I believe that understanding the fundamentals better makes it possible to build sturdier solutions and make decisions with sounder judgment.`,
    p12: `Learning, however, has never been a solitary activity for me. Much of what I know comes from technical documentation, books, open source projects and other developers who chose to share their experience. That reality constantly reminds me that professional growth also means listening, collaborating, reviewing other people's work and accepting that there is always a better way to solve a problem.`,
    p13: `Over the years I have stopped measuring my growth solely by the number of technologies I know. Today I prefer to measure it by the quality of the decisions I am able to make, by the ability to understand complex problems before proposing solutions, and by the trust I can convey when a team places an important part of a project in my hands.`,
    p14: `In the end, that is what I enjoy most about this profession.`,
    p15: `Not the speed at which new tools appear, nor the thrill of learning a different framework every year, but the chance to build software that stays useful, that makes other people's work easier, and that remains understandable long after the last line of code has been written.`,
    close1: 'Because languages change.',
    close2: 'Frameworks evolve.',
    close3: 'Tools get replaced.',
    close4: 'But good engineering always leaves a mark.',
  },

  footer: {
    tagline: 'Designed and built with intent.',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },

  a11y: {
    home: 'Back to home',
    theme: 'Toggle theme',
    language: 'Change language',
    nav: 'Main navigation',
    menu: 'Open menu',
    close: 'Close menu',
  },
} satisfies Translation;
