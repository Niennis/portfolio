import type { Dictionary } from './es'

// Textos fijos del sitio en inglés. Debe tener las mismas claves que es.ts (TypeScript avisa si falta alguna).
const en: Dictionary = {
  meta: {
    title: 'Estefanía Osses Vera',
    description: 'Portfolio of Estefanía Osses Vera, Front End Developer.',
  },
  skipLink: 'Skip to main content',
  nav: {
    ariaLabel: 'Main',
    links: {
      home: 'Home',
      about: 'About me',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    switchLanguage: {
      locale: 'es',
      label: 'Español',
      short: 'ES',
    },
  },
  hero: {
    badgeMain: 'Front End',
    badgeSecondary: 'Developer',
    intro: "Hi! I'm Estefania, a Front End developer with experience building attractive, functional websites. I focus on usability and design, turning ideas into digital experiences that truly work well.",
    stack: "I work mainly with HTML, CSS, JavaScript and React, and I enjoy making every project unique. Let's talk about your next project!",
    photoAlt: 'Photo of Estefanía Osses Vera',
  },
  projects: {
    heading: 'Projects',
    newTab: '(opens in a new tab)',
    screenshotAlt: 'Screenshot of the project',
  },
  skills: {
    heading: 'Tech Skills',
  },
  footer: {
    role: 'Front End Developer',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
}

export default en
