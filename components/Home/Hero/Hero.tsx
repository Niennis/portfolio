import Image from 'next/image'
import React from 'react'
import type { Dictionary } from '@/i18n/getDictionary'

type Props = {
  dict: Dictionary['hero']
}

const Hero = ({ dict }: Props) => {
  return (
    <section id='about' className='w-full pt-[calc(var(--nav-height)+1.5rem)] pb-12 min-h-screen flex flex-col justify-center
     bg-gradient-to-l from-sage to-lightsage
     dark:bg-gradient-to-r dark:from-darkteal dark:to-gray-900'>
      <div className='w-[90%] sm:w-[80%] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
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
              className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem] playwrite-hu'
            >
              Estefanía Osses Vera
            </h1>
            {/* Description */}
            <p className='dark:text-lightsage mb-4  text-size-14 sm:text-xl md:text-2xl font-medium leading-[2.5rem]'>
              {dict.intro}
            </p>
            
            <p className='dark:text-lightsage mb-4  text-size-14 sm:text-xl md:text-2xl font-medium leading-[2.5rem]'>
              {dict.stack}
            </p>
          </div>
          {/* Image Content */}
          <div className='hidden lg:block' data-aos='fade-up' data-aos-delay='200' >
            <Image
              src="/images/me_02.jpg"
              alt={dict.photoAlt}
              width={700}
              height={700}
              style={{borderRadius: '50%'}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero