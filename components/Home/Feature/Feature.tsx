import React from 'react'
import type { IconType } from 'react-icons'
import {
  SiCss3, SiExpress, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs,
  SiPostgresql, SiReact, SiSupabase, SiTailwindcss, SiTauri, SiTypescript, SiVitest,
} from 'react-icons/si'
import type { Dictionary } from '@/i18n/getDictionary'

type Props = {
  dict: Dictionary['skills']
}

type Skill = { name: string; Icon: IconType; color: string }

// Lo que domino: se muestra destacado
const mainSkills: Skill[] = [
  { name: 'React', Icon: SiReact, color: 'text-cyan-500' },
  { name: 'Next.js', Icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'HTML', Icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS', Icon: SiCss3, color: 'text-blue-500' },
]

// Herramientas que he usado en proyectos: se muestran como etiquetas más pequeñas
const otherSkills: Skill[] = [
  { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'text-sky-500' },
  { name: 'Node.js', Icon: SiNodedotjs, color: 'text-lime-600' },
  { name: 'Express', Icon: SiExpress, color: 'text-black dark:text-white' },
  { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-600' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: 'text-sky-700 dark:text-sky-400' },
  { name: 'Supabase', Icon: SiSupabase, color: 'text-emerald-500' },
  { name: 'Firebase', Icon: SiFirebase, color: 'text-amber-500' },
  { name: 'Tauri', Icon: SiTauri, color: 'text-amber-500' },
  { name: 'Vitest', Icon: SiVitest, color: 'text-lime-600' },
]

const Feature = ({ dict }: Props) => {
  return (
    <section
      id='skills'
      aria-labelledby='skills-heading'
      className='pt-20 pb-20 text-black bg-gradient-to-r from-sage to-lightsage dark:from-darkteal dark:to-gray-900 dark:text-lightsage'
    >
      <div className='w-[90%] sm:w-[80%] mx-auto text-center'>
        <h2 id='skills-heading' className='mt-6 text-2xl md:text-3xl font-bold dark:text-white playwrite-hu'>
          {dict.heading}
        </h2>

        {/* STACK PRINCIPAL */}
        <h3 className='mt-12 text-lg font-semibold text-darkteal dark:text-lightsage'>{dict.main}</h3>
        <ul className='mt-6 flex flex-wrap justify-center gap-4 sm:gap-6'>
          {mainSkills.map(({ name, Icon, color }) => (
            <li
              key={name}
              className='flex basis-[calc(50%-0.5rem)] sm:basis-44 lg:basis-0 lg:flex-1 flex-col items-center gap-3 rounded-2xl bg-white px-4 py-6 shadow-md dark:bg-gray-800'
            >
              <span aria-hidden='true' className='flex size-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700'>
                <Icon className={`size-9 ${color}`} />
              </span>
              <span className='font-semibold'>{name}</span>
            </li>
          ))}
        </ul>

        {/* OTRAS HERRAMIENTAS */}
        <h3 className='mt-14 text-lg font-semibold text-darkteal dark:text-lightsage'>{dict.other}</h3>
        <ul className='mt-6 flex flex-wrap justify-center gap-3'>
          {otherSkills.map(({ name, Icon, color }) => (
            <li
              key={name}
              className='flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10'
            >
              <Icon aria-hidden='true' className={`size-4 shrink-0 ${color}`} />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Feature
