import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import type { Dictionary } from '@/i18n/getDictionary'
import SectionDivider from '../SectionDivider'

type Props = {
  dict: Dictionary['hero']
}

const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/Niennis', Icon: FaGithub },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/estefania-osses-vera', Icon: FaLinkedin },
]

const Hero = ({ dict }: Props) => {
  return (
    <section id='about' className='relative w-full pt-[calc(var(--nav-height)+1.5rem)] pb-24 md:pb-32 min-h-screen flex flex-col justify-center
     bg-gradient-to-l from-sage to-lightsage
     dark:bg-gradient-to-r dark:from-darkteal dark:to-gray-900'>
      <div className='w-[90%] sm:w-[80%] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12'>
          {/* Text Content */}
          <div>
            {/* Top Box */}
            <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-darkteal text-white dark:bg-lightsage dark:text-black'>
              <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-lightteal md:text-base sm:text-sm text-xs text-white'>
                {dict.badgeMain}
              </div>
              <p className='text-xs sm:text-sm'>{dict.badgeSecondary}</p>
            </div>
            {/* Heading */}
            <h1
              data-aos='fade-up'
              className='text-3xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem] playwrite-hu'
            >
              Estefanía Osses Vera
            </h1>
            {/* Description: la presentación destaca y el segundo párrafo la complementa */}
            <p className='text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-gray-900 dark:text-lightsage'>
              {dict.intro}
            </p>
            <p className='mt-4 text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-200'>
              {dict.stack}
            </p>

            {/* Llamados a la acción */}
            <div className='mt-8 flex flex-wrap items-center gap-3'>
              <a
                href='#projects'
                className='inline-flex items-center px-6 py-3 rounded-full font-semibold border-2 border-darkteal bg-darkteal text-white shadow-md transition-colors duration-200 hover:bg-lightteal hover:border-lightteal dark:bg-lightsage dark:border-lightsage dark:text-darkteal dark:hover:bg-white dark:hover:border-white'
              >
                {dict.ctaProjects}
              </a>
              <a
                href='#contact'
                className='inline-flex items-center px-6 py-3 rounded-full font-semibold border-2 border-darkteal text-darkteal transition-colors duration-200 hover:bg-darkteal hover:text-white dark:border-lightsage dark:text-lightsage dark:hover:bg-lightsage dark:hover:text-darkteal'
              >
                {dict.ctaContact}
              </a>
              <ul aria-label={dict.socialLabel} className='flex gap-2 sm:ml-2'>
                {socialLinks.map(({ label, url, Icon }) => (
                  <li key={label}>
                    <a
                      href={url}
                      aria-label={label}
                      className='flex size-11 items-center justify-center rounded-full text-darkteal transition-colors duration-200 hover:bg-darkteal hover:text-white dark:text-lightsage dark:hover:bg-lightsage dark:hover:text-darkteal'
                    >
                      <Icon aria-hidden='true' className='size-6' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Image Content: forma orgánica detrás de la foto para darle profundidad.
              En celular y tablet va arriba del texto y más pequeña; en PC, a la derecha */}
          <div className='order-first lg:order-none' data-aos='fade-up' data-aos-delay='200'>
            <div className='relative ml-2 w-40 sm:w-52 lg:mx-auto lg:w-full lg:max-w-[34rem]'>
              <div
                aria-hidden='true'
                className='absolute -inset-3 translate-x-2 translate-y-2 lg:-inset-6 lg:translate-x-5 lg:translate-y-5 rotate-12 rounded-[58%_42%_47%_53%/45%_55%_45%_55%] bg-darkteal/30 dark:bg-sage/25'
              />
              <div
                aria-hidden='true'
                className='absolute -inset-1.5 lg:-inset-2 -rotate-3 rounded-full border-2 border-dashed border-darkteal/40 dark:border-lightsage/40'
              />
              <Image
                src='/images/me_02.jpg'
                alt={dict.photoAlt}
                width={700}
                height={700}
                priority
                sizes='(min-width: 64em) 34rem, 13rem'
                className='relative rounded-full shadow-2xl ring-4 lg:ring-8 ring-white/60 dark:ring-white/10'
              />
            </div>
          </div>
        </div>
      </div>
      {/* Onda del color de la sección Proyectos */}
      <SectionDivider position='bottom' colorClassName='text-lightsage dark:text-gray-900' />
    </section>
  )
}

export default Hero
