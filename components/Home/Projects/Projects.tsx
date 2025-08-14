import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const projectsData = [
  {
    img: '/images/a.jpg',
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
        label: 'Sitio público',
        url_deploy: 'https://zerus-udp.vercel.app/',
      },
      {
        label: 'Sitio privado',
        url_deploy: 'https://zerus-udp.vercel.app/',
      }
    ]
  },
  {
    img: '/images/a.jpg',
    title: 'Laboratoria',
    subtitle: 'Burger Queen.',
    desc: 'Desarrollo de una API de toma de pedidos para un restaurant, y su aplicación en un frontal para tablet.',
    features: [
      'Uso de Node y Express para creación de API',
      'CRUD de productos y pedidos',
      'Interfaz de usuario para tablet desarrollada con React',
    ],
  },
  {
    img: '/images/a.jpg',
    title: 'Laboratoria',
    subtitle: 'Create dashboards that fit your workflow perfectly.',
    desc: 'Personalize your analytics experience with widgets, themes, and layouts tailored to your needs.',
    features: [
      'Drag-and-drop widgets',
      'Theme support',
      'Exportable reports',
    ],
  },
]

const Projects = () => {
  return (
    <div className='pt-24 pb-16 dark:bg-gray-900'>
      <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {projectsData.map((project, idx) => {
          const isImageLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className="col-span-full grid grid-cols-1 md:grid-cols-2 items-center"
            >
              {/* TEXTO */}
              <div
                className={`p-6 order-1 ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}
              >
                <h2 className="text-base font-semibold text-sage">
                  {project.title}
                </h2>
                <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-lightsage">
                  {project.subtitle}
                </h2>
                <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem] dark:text-lightsage">
                  {project.desc}
                </p>
                <ul className="mt-7 space-y-2 text-gray-800 dark:text-sage">
                  {project.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center font-semibold">
                      <FaCheckCircle className="text-sage mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* BOTONES DE LINKS */}
                {project.links && project.links.map((link, lidx) => (
                  (link.url_deploy || link.url) && (
                    <a
                      key={lidx}
                      href={link.url_deploy || link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 mr-4 inline-block px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-sage transition-all duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>

              {/* IMAGEN */}
              <div
                className={`order-2 ${isImageLeft ? 'md:order-1' : 'md:order-2'} mt-6`}
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                <Image
                  src={project.img}
                  alt="image"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Projects;