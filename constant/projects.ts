import type { Locale } from '@/i18n/config'

// Proyectos del portafolio. Cada proyecto aparece como una pestaña en la sección "Proyectos".
// Para agregar uno, copia un objeto en el grupo que corresponda; el orden del arreglo es el orden de las pestañas.
// Los textos van en los dos idiomas (es y en); TypeScript avisa si falta alguno.

type Translated<T> = Record<Locale, T>

type ProjectContent = {
  name: string // Nombre del proyecto: se muestra como título (y en la pestaña, si no hay tabLabel)
  tabLabel?: string // Opcional: nombre más corto para la pestaña, si el nombre es largo
  org?: string // Opcional: empresa, institución o bootcamp (texto pequeño sobre el título)
  subtitle?: string // Opcional: frase corta bajo el título
  desc: string
  features: string[]
}

type ProjectSource = {
  id: string // Identificador único, sin espacios (se usa internamente para las pestañas)
  img: string // Ruta desde /public, por ejemplo '/images/proyecto.png'
  content: Translated<ProjectContent>
  links: {
    label: Translated<string>
    url: string // Si queda vacío, el botón no se muestra
  }[]
}

type ProjectGroupSource = {
  id: string
  label: Translated<string>
  projects: ProjectSource[]
}

// Etiquetas de links que se repiten
const demo = { es: 'Ver despliegue', en: 'Live demo' }
const code = { es: 'Código en GitHub', en: 'Code on GitHub' }

const projectGroups: ProjectGroupSource[] = [
  {
    id: 'trabajo',
    label: { es: 'Trabajo y bootcamp', en: 'Work & bootcamp' },
    projects: [
      {
        id: 'zerus',
        img: '/images/psm-publico.jpeg',
        content: {
          es: {
            name: 'Zerus',
            org: 'UDP',
            subtitle: 'Landing page pública, y portal privado.',
            desc: 'Portal público informativo del área de salud mental de la Universidad Diego Portales, y portal privado para toma y gestión de horas de atención del área de salud mental.',
            features: [
              'Gestionar disponibilidad de horas',
              'Gestión de profesionales',
              'Gestión de pacientes',
              'Gestión de horas de atención',
              'Gestión de ficha clínica',
            ],
          },
          en: {
            name: 'Zerus',
            org: 'UDP',
            subtitle: 'Public landing page and private portal.',
            desc: 'Public information portal for the mental health service of Universidad Diego Portales, and a private portal to book and manage mental health appointments.',
            features: [
              'Appointment availability management',
              'Professional management',
              'Patient management',
              'Appointment management',
              'Clinical record management',
            ],
          },
        },
        links: [
          { label: { es: 'Sitio público despliegue', en: 'Public site demo' }, url: 'https://psm-public.vercel.app/' },
          { label: { es: 'Sitio público código', en: 'Public site code' }, url: 'https://github.com/Niennis/psm-public' },
          { label: { es: 'Sitio privado despliegue', en: 'Private site demo' }, url: 'https://psm-private.vercel.app/' },
          { label: { es: 'Sitio privado código', en: 'Private site code' }, url: 'https://github.com/Niennis/psm-private' },
        ],
      },
      {
        id: 'burger-queen',
        img: '/images/bakeryqueen.jpeg',
        content: {
          es: {
            name: 'Burger Queen',
            org: 'Laboratoria',
            desc: 'Desarrollo de una API de toma de pedidos para un restaurant, y su aplicación en un frontal para tablet.',
            features: [
              'Uso de Node y Express para creación de API',
              'Guardado de datos en MongoDB',
              'CRUD de productos y pedidos',
              'Interfaz de usuario para tablet desarrollada con React',
            ],
          },
          en: {
            name: 'Burger Queen',
            org: 'Laboratoria',
            desc: 'An order-taking API for a restaurant, and a tablet front end that uses it.',
            features: [
              'API built with Node and Express',
              'Data stored in MongoDB',
              'CRUD for products and orders',
              'Tablet user interface built with React',
            ],
          },
        },
        links: [
          { label: demo, url: 'https://bakequeen.vercel.app/' },
          { label: code, url: 'https://github.com/Niennis/bqapiclient' },
        ],
      },
      {
        id: 'labnotes',
        img: '/images/labnotes.jpeg',
        content: {
          es: {
            name: 'Labnotes',
            org: 'Laboratoria',
            desc: 'Página web para tomar notas, apuntes, crear listas..',
            features: [
              'CRUD de notas, almacenadas en Firebase',
              'Acceso a través de autenticación con Google',
            ],
          },
          en: {
            name: 'Labnotes',
            org: 'Laboratoria',
            desc: 'Web app to take notes, jot things down and make lists.',
            features: [
              'Notes CRUD, stored in Firebase',
              'Sign-in with Google',
            ],
          },
        },
        links: [
          { label: demo, url: 'https://labnotes-beta.vercel.app' },
          { label: code, url: 'https://github.com/Niennis/labnotes' },
        ],
      },
    ],
  },
  {
    id: 'personales',
    label: { es: 'Personales', en: 'Personal' },
    projects: [
      {
        id: 'alerta-ofertas',
        img: '/images/avisodeofertas.png',
        content: {
          es: {
            name: 'Alerta de ofertas',
            subtitle: 'Seguimiento de precios en tiendas en línea.',
            desc: 'App fullstack que sigue productos de tiendas en línea y avisa por email cuando bajan de precio, cuando la oferta es real o cuando vuelven a tener stock. Construida con Next.js 16, TypeScript, Drizzle ORM y Postgres (Neon), con arquitectura hexagonal.',
            features: [
              'Lectura de precios en tiendas Shopify, WooCommerce y más',
              'Historial de precios y detección de ofertas dudosas',
              'Avisos por email con revisiones programadas (Vercel Cron + GitHub Actions)',
              'Cuentas con invitación y app instalable (PWA)',
              'Next.js 16 + TypeScript + Drizzle ORM + Neon',
              'Tests en Vitest',
            ],
          },
          en: {
            name: 'Alerta de ofertas',
            subtitle: 'Price tracking for online stores.',
            desc: 'Full-stack app that tracks products from online stores and sends an email when they drop in price, when a sale is genuine or when they are back in stock. Built with Next.js 16, TypeScript, Drizzle ORM and Postgres (Neon), using a hexagonal architecture.',
            features: [
              'Reads prices from Shopify, WooCommerce and other stores',
              'Price history and detection of misleading discounts',
              'Email alerts from scheduled checks (Vercel Cron + GitHub Actions)',
              'Invite-only accounts and installable app (PWA)',
              'Next.js 16 + TypeScript + Drizzle ORM + Neon',
              'Tests with Vitest',
            ],
          },
        },
        links: [
          { label: demo, url: 'https://avisodeofertas.vercel.app' },
          { label: code, url: 'https://github.com/Niennis/avisodeofertas' },
        ],
      },
      {
        id: 'una-vuelta-mas',
        img: '/images/onemorerow.png',
        content: {
          es: {
            name: 'Una vuelta más',
            subtitle: 'Timer Pomodoro personalizable.',
            desc: 'Timer Pomodoro con fondo personalizable, alarmas configurables y reproductor de Spotify/YouTube embebido, con cuenta opcional para sincronizar la configuración entre dispositivos. Construido con React 19, Vite, Tailwind CSS v4 y Supabase.',
            features: [
              'Ciclos de enfoque y descanso configurables',
              'Fondo personalizable con contraste automático del texto',
              'Alarmas sintetizadas con Web Audio API',
              'Sincronización opcional con Supabase (Auth + Postgres + Storage)',
              'React 19 + Vite + Tailwind CSS v4',
              'Tests en Vitest',
            ],
          },
          en: {
            name: 'Una vuelta más',
            subtitle: 'Customizable Pomodoro timer.',
            desc: 'Pomodoro timer with a customizable background, configurable alarms and an embedded Spotify/YouTube player, with an optional account to sync settings across devices. Built with React 19, Vite, Tailwind CSS v4 and Supabase.',
            features: [
              'Configurable focus and break cycles',
              'Custom background with automatic text contrast',
              'Alarms synthesized with the Web Audio API',
              'Optional sync with Supabase (Auth + Postgres + Storage)',
              'React 19 + Vite + Tailwind CSS v4',
              'Tests with Vitest',
            ],
          },
        },
        links: [
          { label: demo, url: 'https://onemorerow.vercel.app' },
          { label: code, url: 'https://github.com/Niennis/onemorerow' },
        ],
      },
      {
        id: 'convida-tu-espacio',
        img: '/images/convidatuespacio.jpeg',
        content: {
          es: {
            name: 'Convida tu Espacio',
            subtitle: 'Sitio web para emprendimiento de plantas.',
            desc: 'Sitio web completo para un emprendimiento local de plantas, construido con Next.js 15, TypeScript y Tailwind CSS; incluye catálogo navegable con rutas dinámicas, galería de diseños y formulario de contacto.',
            features: [
              'Catálogo navegable con rutas dinámicas',
              'Galería de diseños',
              'Formulario de contacto',
              'Next.js 15 + TypeScript + Tailwind CSS',
            ],
          },
          en: {
            name: 'Convida tu Espacio',
            subtitle: 'Website for a local plant business.',
            desc: 'Complete website for a local plant business, built with Next.js 15, TypeScript and Tailwind CSS; it includes a browsable catalog with dynamic routes, a design gallery and a contact form.',
            features: [
              'Browsable catalog with dynamic routes',
              'Design gallery',
              'Contact form',
              'Next.js 15 + TypeScript + Tailwind CSS',
            ],
          },
        },
        links: [
          { label: demo, url: 'https://convida-tu-espacio.vercel.app/' },
          { label: code, url: 'https://github.com/Niennis/convida_tu_espacio' },
        ],
      },
      {
        id: 'amigurumi',
        img: '/images/amigurumi.jpeg',
        content: {
          es: {
            name: 'Generador de patrones de amigurumi',
            tabLabel: 'Amigurumi',
            subtitle: 'Calculadora de patrones de crochet.',
            desc: 'Generador de patrones de amigurumi (crochet) que calcula aumentos y disminuciones a partir de formas geométricas y datos de muestra.',
            features: [
              'Cálculo de aumentos y disminuciones',
              'Formas geométricas configurables',
              'React 19 + TypeScript + Vite + Tailwind CSS v4',
              'Tests en Vitest',
            ],
          },
          en: {
            name: 'Amigurumi pattern generator',
            tabLabel: 'Amigurumi',
            subtitle: 'Crochet pattern calculator.',
            desc: 'Amigurumi (crochet) pattern generator that calculates increases and decreases from geometric shapes and gauge data.',
            features: [
              'Calculates increases and decreases',
              'Configurable geometric shapes',
              'React 19 + TypeScript + Vite + Tailwind CSS v4',
              'Tests with Vitest',
            ],
          },
        },
        links: [
          { label: demo, url: 'https://amigurumi-pattern-generator.vercel.app/' },
          { label: code, url: 'https://github.com/Niennis/amigurumi-pattern-generator' },
        ],
      },
      {
        id: 'mi-biblioteca',
        img: '/images/mibiblioteca.jpeg',
        content: {
          es: {
            name: 'Mi Biblioteca',
            subtitle: 'App fullstack para gestionar libros.',
            desc: 'App fullstack para gestionar una biblioteca personal de libros, con autenticación, frontend en React 19 + TypeScript (Vite) y backend en Express + TypeScript con Prisma y Supabase.',
            features: [
              'CRUD de biblioteca personal con autenticación',
              'Frontend: React 19 + TypeScript + Tailwind CSS',
              'Backend: Express + TypeScript + Prisma + Supabase',
              'Tests en Vitest en frontend y backend',
            ],
          },
          en: {
            name: 'Mi Biblioteca',
            subtitle: 'Full-stack app to manage books.',
            desc: 'Full-stack app to manage a personal book library, with authentication, a React 19 + TypeScript (Vite) front end and an Express + TypeScript back end with Prisma and Supabase.',
            features: [
              'Personal library CRUD with authentication',
              'Frontend: React 19 + TypeScript + Tailwind CSS',
              'Backend: Express + TypeScript + Prisma + Supabase',
              'Tests with Vitest on front end and back end',
            ],
          },
        },
        links: [
          { label: demo, url: 'https://mi-biblioteca-web.vercel.app/' },
          { label: code, url: 'https://github.com/Niennis/mi-biblioteca' },
        ],
      },
    ],
  },
]

// Proyectos ya traducidos a un idioma, con la forma que usa el componente
export type ProjectLink = { label: string; url: string }

export type Project = ProjectContent & {
  id: string
  img: string
  links: ProjectLink[]
}

export type ProjectGroup = {
  id: string
  label: string
  projects: Project[]
}

export const getProjectGroups = (locale: Locale): ProjectGroup[] =>
  projectGroups.map((group) => ({
    id: group.id,
    label: group.label[locale],
    projects: group.projects.map((project) => ({
      id: project.id,
      img: project.img,
      ...project.content[locale],
      links: project.links.map((link) => ({ label: link.label[locale], url: link.url })),
    })),
  }))
