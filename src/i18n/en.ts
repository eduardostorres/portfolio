import type { Translation } from './index';

/**
 * English. Must satisfy the canonical `Translation` shape defined by `es`,
 * so missing or misnamed keys are caught at build time.
 */
export const en = {
  meta: {
    title: 'Eduardo S. | Portfolio',
    description:
      'Portfolio of Eduardo Sebastián Sánchez Torres, a backend and full stack developer. Projects, experience and notes on software development, architecture and best practices.',
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
      meta: 'Eduardo S. | About',
      intro: 'A bit about me, my background and what drives me.',
      description:
        'Meet Eduardo Sebastián Sánchez Torres: his path as a backend and full stack developer, how he works and what drives him.',
    },
    projects: {
      title: 'Projects',
      meta: 'Eduardo S. | Projects',
      intro: 'A selection of projects I have worked on.',
      description:
        'Projects by Eduardo S.: web apps, APIs, systems and automations. Filter by technology: TypeScript, Node.js, React, Astro, Python and more.',
    },
    blog: {
      title: 'Blog',
      meta: 'Eduardo S. | Blog',
      intro: 'Notes and articles about development, design and tech.',
      description:
        'Articles and notes by Eduardo S. on software development, architecture, design and technology.',
    },
    cv: {
      title: 'CV',
      meta: 'Eduardo S. | CV',
      intro: 'My experience, education and skills at a glance.',
      description:
        "Eduardo Sebastián Sánchez Torres's résumé: experience, education and skills as a backend and full stack developer.",
    },
    contact: {
      title: 'Contact',
      meta: 'Eduardo S. | Contact',
      intro: 'Want to talk? Drop me a line and I will gladly reply.',
      description:
        'Get in touch with Eduardo S. for projects, collaborations or software development inquiries.',
    },
  },
  projectsFilter: {
    label: 'Filter by technology',
    all: 'All technologies',
  },
  projectsList: {
    code: 'Code',
    demo: 'Demo',
    empty: 'No projects with this technology yet.',
    countSingular: 'project',
    countPlural: 'projects',
  },
  about: {
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
