// Textos fijos del sitio en español. en.ts debe tener exactamente las mismas claves.
const es = {
  meta: {
    title: 'Estefanía Osses Vera',
    description: 'Portafolio de Estefanía Osses Vera, desarrolladora Front End.',
  },
  skipLink: 'Saltar al contenido principal',
  nav: {
    ariaLabel: 'Principal',
    links: {
      home: 'Home',
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
    // Enlace al otro idioma
    switchLanguage: {
      locale: 'en',
      label: 'English',
      short: 'EN',
    },
  },
  hero: {
    badgeMain: 'Front End',
    badgeSecondary: 'Developer',
    intro: '¡Hola! Soy Estefania, desarrolladora Front End con experiencia en crear sitios web atractivos y funcionales. Me gusta con un enfoque en la usabilidad y el diseño, transformando ideas en experiencias digitales que realmente funcionen bien.',
    stack: 'Trabajo principalmente con HTML, CSS, JavaScript y React, y disfruto el proceso de hacer que cada proyecto sea único. ¡Hablemos de tu próximo proyecto!',
    photoAlt: 'Fotografía de Estefanía Osses Vera',
  },
  projects: {
    heading: 'Proyectos',
    newTab: '(se abre en una pestaña nueva)',
    screenshotAlt: 'Captura de pantalla del proyecto',
  },
  skills: {
    heading: 'Tech Skills',
  },
  footer: {
    role: 'Front End Developer',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
  },
}

export type Dictionary = typeof es

export default es
