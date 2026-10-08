'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import type { Project, ProjectGroup } from '@/constant/projects'
import type { Dictionary } from '@/i18n/getDictionary'

type Props = {
  groups: ProjectGroup[]
  dict: Dictionary['projects']
}

const Projects = ({ groups, dict }: Props) => {
  const allProjects = groups.flatMap((group) => group.projects)
  const [selectedId, setSelectedId] = useState(allProjects[0].id)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const detailRef = useRef<HTMLDivElement>(null)
  const scrollOnChange = useRef(false)

  const selected = allProjects.find((project) => project.id === selectedId) ?? allProjects[0]

  // Al elegir un proyecto con clic o toque, si su inicio no se ve en pantalla, se desplaza hasta él.
  // Con las flechas del teclado no se desplaza, para no mover la página mientras se recorren las pestañas.
  useEffect(() => {
    if (!scrollOnChange.current) return
    scrollOnChange.current = false

    const detail = detailRef.current
    if (!detail) return

    // Se considera visible si empieza bajo el menú fijo y deja al menos ~150px para leer el comienzo
    const navBottom = document.querySelector('header')?.firstElementChild?.getBoundingClientRect().bottom ?? 0
    const { top } = detail.getBoundingClientRect()
    if (top >= navBottom && top <= window.innerHeight - 150) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    detail.scrollIntoView?.({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [selectedId])

  const handleSelect = (id: string) => {
    scrollOnChange.current = true
    setSelectedId(id)
  }

  // Patrón de pestañas: las flechas recorren los proyectos del grupo, Inicio y Fin van al primero y al último
  const handleKeyDown = (e: React.KeyboardEvent, projects: Project[], index: number) => {
    let next: number
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        next = (index + 1) % projects.length
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        next = (index - 1 + projects.length) % projects.length
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = projects.length - 1
        break
      default:
        return
    }
    e.preventDefault()
    const project = projects[next]
    setSelectedId(project.id)
    tabRefs.current[project.id]?.focus()
  }

  return (
    <section className='pt-24 pb-16 dark:bg-gray-900 bg-lightsage' id='projects' aria-labelledby='projects-heading'>
      <div className='w-[95%] sm:w-[80%] mx-auto'>
        <h2 id='projects-heading' className='text-2xl md:text-3xl font-bold text-center dark:text-white playwrite-hu'>
          {dict.heading}
        </h2>

        {/* PESTAÑAS: un grupo por categoría */}
        <div className='mt-12 space-y-6'>
          {groups.map((group) => {
            const groupHasSelection = group.projects.some((project) => project.id === selectedId)

            return (
              <div key={group.id} className='md:flex md:items-start md:gap-6'>
                <p
                  id={`tabs-${group.id}`}
                  className='mb-1 md:mb-0 md:w-48 md:pt-4 shrink-0 text-sm font-semibold text-lightteal dark:text-sage'
                >
                  {group.label}
                </p>
                {/* En celular: una fila que se desliza hacia el lado. El padding deja espacio para el indicador de foco */}
                <div
                  role='tablist'
                  aria-labelledby={`tabs-${group.id}`}
                  className='flex gap-3 overflow-x-auto -mx-[6px] px-[6px] py-2 sm:flex-wrap sm:overflow-visible'
                >
                  {group.projects.map((project, index) => {
                    const isSelected = project.id === selectedId
                    // Solo una pestaña por grupo recibe foco con Tab: la seleccionada o, si no hay, la primera
                    const isTabStop = isSelected || (!groupHasSelection && index === 0)

                    return (
                      <button
                        key={project.id}
                        ref={(el) => { tabRefs.current[project.id] = el }}
                        type='button'
                        role='tab'
                        id={`tab-${project.id}`}
                        aria-selected={isSelected}
                        aria-controls='project-panel'
                        tabIndex={isTabStop ? 0 : -1}
                        onClick={() => handleSelect(project.id)}
                        onKeyDown={(e) => handleKeyDown(e, group.projects, index)}
                        className={`shrink-0 whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${isSelected
                          ? 'bg-lightteal text-white shadow-md'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                      >
                        {project.tabLabel ?? project.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* PROYECTO SELECCIONADO */}
        <div
          role='tabpanel'
          id='project-panel'
          aria-labelledby={`tab-${selected.id}`}
          className='mt-12 grid grid-cols-1 md:grid-cols-2 items-start gap-6'
        >
          {/* TEXTO */}
          <div ref={detailRef} className='p-6 md:order-2'>
            {selected.org && (
              <p className='text-base font-semibold text-lightteal dark:text-sage'>
                {selected.org}
              </p>
            )}
            <h3 className={`${selected.org ? 'mt-4' : ''} text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-lightsage playwrite-hu`}>
              {selected.name}
            </h3>
            {selected.subtitle && (
              <p className='mt-4 text-gray-800 font-semibold dark:text-lightsage'>
                {selected.subtitle}
              </p>
            )}
            <p className='mt-4 text-gray-600 text-sm font-medium leading-[2rem] dark:text-lightsage'>
              {selected.desc}
            </p>
            <ul className='mt-7 space-y-2 text-gray-800 dark:text-sage'>
              {selected.features.filter(Boolean).map((feature) => (
                <li key={feature} className='flex items-center font-semibold'>
                  <FaCheckCircle aria-hidden='true' className='text-sage mr-2 shrink-0' />
                  {feature}
                </li>
              ))}
            </ul>
            {/* BOTONES DE LINKS */}
            {selected.links.map((link) => (
              link.url && (
                <a
                  key={link.label}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-8 mr-4 inline-block px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-lightteal transition-all duration-200 hover:text-white'
                >
                  {link.label}
                  <span className='sr-only'> {dict.newTab}</span>
                </a>
              )
            ))}
          </div>

          {/* IMAGEN */}
          <div className='md:order-1 md:mt-6 relative w-full h-[350px] md:h-[450px]'>
            <Image
              key={selected.id}
              src={selected.img}
              alt={`${dict.screenshotAlt} ${selected.name}`}
              fill
              className='object-contain md:object-top'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
