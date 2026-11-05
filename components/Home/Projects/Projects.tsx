'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaCheckCircle, FaDownload, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import type { Project, ProjectGroup, ProjectLink } from '@/constant/projects'
import type { Dictionary } from '@/i18n/getDictionary'

type Props = {
  groups: ProjectGroup[]
  dict: Dictionary['projects']
}

// Ícono del botón según adónde lleva el link
const linkIcon = (url: string) => {
  if (url.includes('github.com') && url.includes('/releases')) return FaDownload
  if (url.includes('github.com')) return FaGithub
  return FaExternalLinkAlt
}

// Dirección del sitio publicado (el primer link que no es de GitHub), para la barra del marco de navegador
const siteHost = (links: ProjectLink[]) => {
  const site = links.find((link) => link.url && !link.url.includes('github.com'))
  return site ? new URL(site.url).host : null
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
          className='mt-12'
        >
          {/* La key reinicia la animación de entrada en cada cambio de proyecto */}
          <div key={selected.id} className='grid grid-cols-1 md:grid-cols-2 items-start gap-6 lg:gap-12 motion-safe:animate-fade-up'>
            {/* TEXTO */}
            <div ref={detailRef} className='p-2 sm:p-6 md:order-2'>
              {selected.org && (
                <p className='text-sm font-semibold uppercase tracking-wider text-lightteal dark:text-sage'>
                  {selected.org}
                </p>
              )}
              <h3 className={`${selected.org ? 'mt-3' : ''} text-2xl md:text-3xl font-bold text-gray-900 dark:text-lightsage playwrite-hu`}>
                {selected.name}
              </h3>
              {selected.subtitle && (
                <p className='mt-4 text-lg font-semibold text-darkteal dark:text-lightsage'>
                  {selected.subtitle}
                </p>
              )}
              <p className='mt-3 text-base leading-relaxed text-gray-800 dark:text-gray-200'>
                {selected.desc}
              </p>

              {/* TECNOLOGÍAS */}
              <ul aria-label={dict.tech} className='mt-5 flex flex-wrap gap-2'>
                {selected.tech.map((tech) => (
                  <li
                    key={tech}
                    className='px-3 py-1 rounded-full text-sm font-medium bg-white text-darkteal ring-1 ring-sage/50 dark:bg-darkteal dark:text-lightsage dark:ring-sage/60'
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <ul className='mt-6 space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300'>
                {selected.features.filter(Boolean).map((feature) => (
                  <li key={feature} className='flex items-start gap-2'>
                    <FaCheckCircle aria-hidden='true' className='mt-1 text-lightteal dark:text-sage shrink-0' />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BOTONES DE LINKS: el primero es el principal */}
              <div className='mt-8 flex flex-wrap gap-3'>
                {selected.links.filter((link) => link.url).map((link, index) => {
                  const Icon = linkIcon(link.url)
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 transition-colors duration-200 ${index === 0
                        ? 'bg-darkteal border-darkteal text-white hover:bg-lightteal hover:border-lightteal dark:bg-lightsage dark:border-lightsage dark:text-darkteal dark:hover:bg-white dark:hover:border-white'
                        : 'border-darkteal text-darkteal hover:bg-darkteal hover:text-white dark:border-lightsage dark:text-lightsage dark:hover:bg-lightsage dark:hover:text-darkteal'
                        }`}
                    >
                      <Icon aria-hidden='true' className='shrink-0' />
                      {link.label}
                      <span className='sr-only'> {dict.newTab}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* IMAGEN, dentro de un marco: tablet vertical, ventana de escritorio o navegador */}
            {selected.kind === 'tablet' ? (
              <figure className='md:order-1 md:mt-6 md:sticky md:top-[calc(var(--nav-height)+1.5rem)] mx-auto w-full max-w-[18rem] sm:max-w-[21rem] rounded-[2rem] bg-gray-900 p-3 sm:p-4 shadow-xl ring-1 ring-black/20 dark:ring-white/15 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 hover:shadow-2xl'>
                {/* Cámara frontal de la tablet */}
                <span aria-hidden='true' className='mx-auto mb-2 sm:mb-3 block size-2 rounded-full bg-gray-600' />
                <Image
                  src={selected.img}
                  alt={`${dict.screenshotAlt} ${selected.name}`}
                  width={1152}
                  height={1676}
                  sizes='(min-width: 40em) 21rem, 18rem'
                  className='w-full h-auto rounded-lg'
                />
              </figure>
            ) : (
              <figure className='md:order-1 md:mt-6 md:sticky md:top-[calc(var(--nav-height)+1.5rem)] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/10 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 hover:shadow-2xl'>
                <div aria-hidden='true' className='flex items-center gap-3 px-4 py-2.5 bg-gray-100 border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
                  {selected.kind === 'desktop' ? (
                    <>
                      <span className='flex-1 truncate text-xs font-medium text-gray-700 dark:text-gray-200'>{selected.name}</span>
                      <span className='flex gap-3 text-xs text-gray-600 dark:text-gray-300'>
                        <span>&#x2013;</span><span>&#x25A1;</span><span>&#x2715;</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className='flex gap-1.5'>
                        <span className='size-3 rounded-full bg-[#ff5f57]' />
                        <span className='size-3 rounded-full bg-[#febc2e]' />
                        <span className='size-3 rounded-full bg-[#28c840]' />
                      </span>
                      {siteHost(selected.links) && (
                        <span className='flex-1 truncate rounded-md bg-white px-3 py-0.5 text-center text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-200'>
                          {siteHost(selected.links)}
                        </span>
                      )}
                    </>
                  )}
                </div>
                <Image
                  src={selected.img}
                  alt={`${dict.screenshotAlt} ${selected.name}`}
                  width={1600}
                  height={1000}
                  sizes='(min-width: 48em) 45vw, 95vw'
                  className='w-full h-auto max-h-[28rem] object-cover object-top'
                />
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
