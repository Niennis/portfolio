import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const projectsData = [
  {
    img: '/images/psm-publico.jpeg',
    title: 'Zerus - UDP',
    subtitle: 'Landing page pública, y portal privado.',
    desc: 'Portal público informativo del área de salud mental de la Universidad Diego Portales, y portal privado para toma y gestión de horas de atención del área de salud mental.',
    features: [
      'Gestionar disponibilidad de horas',
      'Gestión de profesionales',
      'Gestión de pacientes',
      'Gestión de horas de atención',
      'Gestión de ficha clínica',
    ],
    links: [
      {
        label: 'Sitio público despliegue',
        url: 'https://psm-public.vercel.app/',
      },
      {
        label: 'Sitio público código',
        url: 'https://github.com/Niennis/psm-public',
      },
      {
        label: 'Sitio privado despliegue',
        url: 'https://psm-private.vercel.app/',
      },
      {
        label: 'Sitio privado código',
        url: 'https://github.com/Niennis/psm-private',
      }
    ]
  },
  {
    img: '/images/bakeryqueen.jpeg',
    title: 'Laboratoria',
    subtitle: 'Burger Queen.',
    desc: 'Desarrollo de una API de toma de pedidos para un restaurant, y su aplicación en un frontal para tablet.',
    features: [
      'Uso de Node y Express para creación de API',
      'Guardado de datos en MongoDB',
      'CRUD de productos y pedidos',
      'Interfaz de usuario para tablet desarrollada con React',
    ],
    links: [
      {
        label: 'Ir a despliegue',
        url: 'https://bakequeen.vercel.app/',
      },
      {
        label: 'Código en github',
        url: 'https://github.com/Niennis/bqapiclient',
      },
    ],
  },
  {
    img: '/images/labnotes.jpeg',
    title: 'Laboratoria',
    subtitle: 'Labnotes.',
    desc: 'Página web para tomar notas, apuntes, crear listas..',
    features: [
      'CRUD de notas, almacenadas en Firebase',
      'Acceso a través de autenticación con Google',
    ],
    links: [
      {
        label: 'Ir a despliegue',
        url: 'https://labnotes-beta.vercel.app',
      },
      {
        label: 'Código en github',
        url: 'https://github.com/Niennis/labnotes',
      }
    ],
  },
]

const Projects = () => {
  return (
    <section className='pt-24 pb-16 dark:bg-gray-900 bg-lightsage' id='projects' aria-labelledby='projects-heading'>
      <h2 id='projects-heading' className='sr-only'>Proyectos</h2>
      <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {projectsData.map((project, idx) => {
          const isImageLeft = idx % 2 === 0;

          return (
            <article
              key={idx}
              aria-labelledby={`project-${idx}`}
              className="col-span-full grid grid-cols-1 md:grid-cols-2 items-center"
            >
              {/* TEXTO */}
              <div
                className={`p-6 order-1 ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}
              >
                <h3 id={`project-${idx}`}>
                  <span className="block text-base font-semibold text-lightteal dark:text-sage">
                    {project.title}
                  </span>
                  <span className="block mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-lightsage playwrite-hu">
                    {project.subtitle}
                  </span>
                </h3>
                <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem] dark:text-lightsage">
                  {project.desc}
                </p>
                <ul className="mt-7 space-y-2 text-gray-800 dark:text-sage">
                  {project.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center font-semibold">
                      <FaCheckCircle aria-hidden="true" className="text-sage mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* BOTONES DE LINKS */}
                {project.links && project.links.map((link, lidx) => (
                  (link.url) && (
                    <a
                      key={lidx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 mr-4 inline-block px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-lightteal transition-all duration-200 hover:text-white"
                    >
                      {link.label}
                      <span className="sr-only"> (se abre en una pestaña nueva)</span>
                    </a>
                  )
                ))}
              </div>

              {/* IMAGEN */}
              <div
                className={`order-2 ${isImageLeft ? 'md:order-1' : 'md:order-2'} mt-6 relative w-full h-[350px] md:h-[450px]`}
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                <Image
                  src={project.img}
                  alt={`Captura de pantalla del proyecto ${project.title}: ${project.subtitle}`}
                  fill
                  className="object-contain"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  )
}

export default Projects;