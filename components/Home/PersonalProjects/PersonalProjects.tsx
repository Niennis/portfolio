'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const personalProjectsData = [
  {
    img: '/images/convidatuespacio.jpeg',
    title: 'Convida tu Espacio',
    subtitle: 'Sitio web para emprendimiento de plantas.',
    desc: 'Sitio web completo para un emprendimiento local de plantas, construido con Next.js 15, TypeScript y Tailwind CSS; incluye catálogo navegable con rutas dinámicas, galería de diseños y formulario de contacto.',
    features: [
      'Catálogo navegable con rutas dinámicas',
      'Galería de diseños',
      'Formulario de contacto',
      'Next.js 15 + TypeScript + Tailwind CSS',
    ],
    links: [
      {
        label: 'Ver despliegue',
        url: 'https://convida-tu-espacio.vercel.app/',
      },
      {
        label: 'Código en GitHub',
        url: 'https://github.com/Niennis/convida_tu_espacio',
      },
    ],
  },
  {
    img: '/images/amigurumi.jpeg',
    title: 'Generador de patrones de amigurumi',
    subtitle: 'Calculadora de patrones de crochet.',
    desc: 'Generador de patrones de amigurumi (crochet) que calcula aumentos y disminuciones a partir de formas geométricas y datos de muestra.',
    features: [
      'Cálculo de aumentos y disminuciones',
      'Formas geométricas configurables',
      'React 19 + TypeScript + Vite + Tailwind CSS v4',
      'Tests en Vitest',
    ],
    links: [
      {
        label: 'Ver despliegue',
        url: 'https://amigurumi-pattern-generator.vercel.app/',
      },
      {
        label: 'Código en GitHub',
        url: 'https://github.com/Niennis/amigurumi-pattern-generator',
      },
    ],
  },
  {
    img: '/images/mibiblioteca.jpeg',
    title: 'Mi Biblioteca',
    subtitle: 'App fullstack para gestionar libros.',
    desc: 'App fullstack para gestionar una biblioteca personal de libros, con autenticación, frontend en React 19 + TypeScript (Vite) y backend en Express + TypeScript con Prisma y Supabase.',
    features: [
      'CRUD de biblioteca personal con autenticación',
      'Frontend: React 19 + TypeScript + Tailwind CSS',
      'Backend: Express + TypeScript + Prisma + Supabase',
      'Tests en Vitest en frontend y backend',
    ],
    links: [
      {
        label: 'Ver despliegue',
        url: 'https://mi-biblioteca-web.vercel.app/',
      },
      {
        label: 'Código en GitHub',
        url: 'https://github.com/Niennis/mi-biblioteca',
      },
    ],
  },
]

const PersonalProjects = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='pt-24 pb-16 dark:bg-gray-900 bg-lightsage'>
      <div className='w-[80%] mx-auto text-center'>
        <h2 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center dark:text-white playwrite-hu'>
          Proyectos Personales
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-sage hover:text-white transition-all duration-200'
        >
          {isOpen ? 'Ocultar proyectos' : 'Mostrar proyectos personales'}
        </button>
      </div>
      {isOpen && <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>
        {personalProjectsData.map((project, idx) => {
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-lightsage playwrite-hu">
                  {project.title}
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
                {project.links && project.links.map((link, lidx) => (
                  <a
                    key={lidx}
                    href={link.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 mr-4 inline-block px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-sage transition-all duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
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
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>}
    </div>
  )
}

export default PersonalProjects
