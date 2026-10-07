// Proyectos del portafolio. Cada proyecto aparece como una pestaña en la sección "Proyectos".
// Para agregar uno, copia un objeto en el grupo que corresponda; el orden del arreglo es el orden de las pestañas.

export type ProjectLink = {
  label: string
  url: string // Si queda vacío, el botón no se muestra
}

export type Project = {
  id: string // Identificador único, sin espacios (se usa internamente para las pestañas)
  name: string // Nombre del proyecto: se muestra como título (y en la pestaña, si no hay tabLabel)
  tabLabel?: string // Opcional: nombre más corto para la pestaña, si el nombre es largo
  org?: string // Opcional: empresa, institución o bootcamp (texto pequeño sobre el título)
  subtitle?: string // Opcional: frase corta bajo el título
  img: string // Ruta desde /public, por ejemplo '/images/proyecto.png'
  desc: string
  features: string[]
  links: ProjectLink[]
}

export type ProjectGroup = {
  id: string
  label: string
  projects: Project[]
}

export const projectGroups: ProjectGroup[] = [
  {
    id: 'trabajo',
    label: 'Trabajo y bootcamp',
    projects: [
      {
        id: 'zerus',
        name: 'Zerus',
        org: 'UDP',
        subtitle: 'Landing page pública, y portal privado.',
        img: '/images/psm-publico.jpeg',
        desc: 'Portal público informativo del área de salud mental de la Universidad Diego Portales, y portal privado para toma y gestión de horas de atención del área de salud mental.',
        features: [
          'Gestionar disponibilidad de horas',
          'Gestión de profesionales',
          'Gestión de pacientes',
          'Gestión de horas de atención',
          'Gestión de ficha clínica',
        ],
        links: [
          { label: 'Sitio público despliegue', url: 'https://psm-public.vercel.app/' },
          { label: 'Sitio público código', url: 'https://github.com/Niennis/psm-public' },
          { label: 'Sitio privado despliegue', url: 'https://psm-private.vercel.app/' },
          { label: 'Sitio privado código', url: 'https://github.com/Niennis/psm-private' },
        ],
      },
      {
        id: 'burger-queen',
        name: 'Burger Queen',
        org: 'Laboratoria',
        img: '/images/bakeryqueen.jpeg',
        desc: 'Desarrollo de una API de toma de pedidos para un restaurant, y su aplicación en un frontal para tablet.',
        features: [
          'Uso de Node y Express para creación de API',
          'Guardado de datos en MongoDB',
          'CRUD de productos y pedidos',
          'Interfaz de usuario para tablet desarrollada con React',
        ],
        links: [
          { label: 'Ir a despliegue', url: 'https://bakequeen.vercel.app/' },
          { label: 'Código en github', url: 'https://github.com/Niennis/bqapiclient' },
        ],
      },
      {
        id: 'labnotes',
        name: 'Labnotes',
        org: 'Laboratoria',
        img: '/images/labnotes.jpeg',
        desc: 'Página web para tomar notas, apuntes, crear listas..',
        features: [
          'CRUD de notas, almacenadas en Firebase',
          'Acceso a través de autenticación con Google',
        ],
        links: [
          { label: 'Ir a despliegue', url: 'https://labnotes-beta.vercel.app' },
          { label: 'Código en github', url: 'https://github.com/Niennis/labnotes' },
        ],
      },
    ],
  },
  {
    id: 'personales',
    label: 'Personales',
    projects: [
      {
        id: 'alerta-ofertas',
        name: 'Alerta de ofertas',
        subtitle: 'Seguimiento de precios en tiendas en línea.',
        img: '/images/avisodeofertas.png',
        desc: 'App fullstack que sigue productos de tiendas en línea y avisa por email cuando bajan de precio, cuando la oferta es real o cuando vuelven a tener stock. Construida con Next.js 16, TypeScript, Drizzle ORM y Postgres (Neon), con arquitectura hexagonal.',
        features: [
          'Lectura de precios en tiendas Shopify, WooCommerce y más',
          'Historial de precios y detección de ofertas dudosas',
          'Avisos por email con revisiones programadas (Vercel Cron + GitHub Actions)',
          'Cuentas con invitación y app instalable (PWA)',
          'Next.js 16 + TypeScript + Drizzle ORM + Neon',
          'Tests en Vitest',
        ],
        links: [
          { label: 'Ver despliegue', url: 'https://avisodeofertas.vercel.app' },
          { label: 'Código en GitHub', url: 'https://github.com/Niennis/avisodeofertas' },
        ],
      },
      {
        id: 'una-vuelta-mas',
        name: 'Una vuelta más',
        subtitle: 'Timer Pomodoro personalizable.',
        img: '/images/onemorerow.png',
        desc: 'Timer Pomodoro con fondo personalizable, alarmas configurables y reproductor de Spotify/YouTube embebido, con cuenta opcional para sincronizar la configuración entre dispositivos. Construido con React 19, Vite, Tailwind CSS v4 y Supabase.',
        features: [
          'Ciclos de enfoque y descanso configurables',
          'Fondo personalizable con contraste automático del texto',
          'Alarmas sintetizadas con Web Audio API',
          'Sincronización opcional con Supabase (Auth + Postgres + Storage)',
          'React 19 + Vite + Tailwind CSS v4',
          'Tests en Vitest',
        ],
        links: [
          { label: 'Ver despliegue', url: 'https://onemorerow.vercel.app' },
          { label: 'Código en GitHub', url: 'https://github.com/Niennis/onemorerow' },
        ],
      },
      {
        id: 'convida-tu-espacio',
        name: 'Convida tu Espacio',
        subtitle: 'Sitio web para emprendimiento de plantas.',
        img: '/images/convidatuespacio.jpeg',
        desc: 'Sitio web completo para un emprendimiento local de plantas, construido con Next.js 15, TypeScript y Tailwind CSS; incluye catálogo navegable con rutas dinámicas, galería de diseños y formulario de contacto.',
        features: [
          'Catálogo navegable con rutas dinámicas',
          'Galería de diseños',
          'Formulario de contacto',
          'Next.js 15 + TypeScript + Tailwind CSS',
        ],
        links: [
          { label: 'Ver despliegue', url: 'https://convida-tu-espacio.vercel.app/' },
          { label: 'Código en GitHub', url: 'https://github.com/Niennis/convida_tu_espacio' },
        ],
      },
      {
        id: 'amigurumi',
        name: 'Generador de patrones de amigurumi',
        tabLabel: 'Amigurumi',
        subtitle: 'Calculadora de patrones de crochet.',
        img: '/images/amigurumi.jpeg',
        desc: 'Generador de patrones de amigurumi (crochet) que calcula aumentos y disminuciones a partir de formas geométricas y datos de muestra.',
        features: [
          'Cálculo de aumentos y disminuciones',
          'Formas geométricas configurables',
          'React 19 + TypeScript + Vite + Tailwind CSS v4',
          'Tests en Vitest',
        ],
        links: [
          { label: 'Ver despliegue', url: 'https://amigurumi-pattern-generator.vercel.app/' },
          { label: 'Código en GitHub', url: 'https://github.com/Niennis/amigurumi-pattern-generator' },
        ],
      },
      {
        id: 'mi-biblioteca',
        name: 'Mi Biblioteca',
        subtitle: 'App fullstack para gestionar libros.',
        img: '/images/mibiblioteca.jpeg',
        desc: 'App fullstack para gestionar una biblioteca personal de libros, con autenticación, frontend en React 19 + TypeScript (Vite) y backend en Express + TypeScript con Prisma y Supabase.',
        features: [
          'CRUD de biblioteca personal con autenticación',
          'Frontend: React 19 + TypeScript + Tailwind CSS',
          'Backend: Express + TypeScript + Prisma + Supabase',
          'Tests en Vitest en frontend y backend',
        ],
        links: [
          { label: 'Ver despliegue', url: 'https://mi-biblioteca-web.vercel.app/' },
          { label: 'Código en GitHub', url: 'https://github.com/Niennis/mi-biblioteca' },
        ],
      },
    ],
  },
]
