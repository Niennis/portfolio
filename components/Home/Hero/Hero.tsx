import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen 
     bg-gradient-to-l from-darkteal to-lightsage
     dark:bg-gradient-to-r dark:from-darkteal dark:to-gray-900'>
      <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
          {/* Text Content */}
          <div>
            {/* Top Box */}
            <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-darkteal text-white dark:bg-lightsage dark:text-black'>
              <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-sage md:text-base sm:text-sm text-xs text-white'>
                Front End
              </div>
              <p className='text-xs sm:text-sm'>Developer</p>
            </div>
            {/* Heading */}
            <h1
              data-aos='fade-up'
              className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]'
            >
              Estefanía Osses Vera
            </h1>
            {/* Description */}
            <p className='dark:text-lightsage mb-4  text-size-14 sm:text-xl md:text-2xl font-medium leading-[2.5rem]'>
              ¡Hola! Soy Estefania, desarrolladora Front End con experiencia en crear sitios web atractivos y funcionales. Me gusta con un enfoque en la usabilidad y el diseño, transformando ideas en experiencias digitales que realmente funcionen bien.
            </p>
            
            <p className='dark:text-lightsage mb-4  text-size-14 sm:text-xl md:text-2xl font-medium leading-[2.5rem]'>
              Trabajo principalmente con HTML, CSS, JavaScript y React, y disfruto el proceso de hacer que cada proyecto sea único. ¡Hablemos de tu próximo proyecto!
            </p>
            {/* Play store and app store images */}

          </div>
          {/* Image Content */}
          <div className='hidden lg:block' data-aos='fade-up' data-aos-delay='200' >
            <Image
              src="/images/hero.png"
              alt='hero'
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero