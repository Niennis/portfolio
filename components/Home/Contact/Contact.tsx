import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import type { Dictionary } from '@/i18n/getDictionary'

type Props = {
  dict: Dictionary['contact']
}

const email = 'estefania.osses.v@gmail.com'

const Contact = ({ dict }: Props) => {
  return (
    <section id='contact' aria-labelledby='contact-heading' className='bg-darkteal pt-12 pb-20 text-lightsage'>
      <div className='w-[90%] sm:w-[80%] max-w-3xl mx-auto text-center'>
        <h2 id='contact-heading' className='text-3xl md:text-4xl font-bold text-white playwrite-hu'>
          {dict.heading}
        </h2>
        <p className='mt-6 text-lg leading-relaxed'>
          {dict.message}
        </p>
        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          <a
            href={`mailto:${email}`}
            className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-lightsage bg-lightsage text-darkteal shadow-md transition-colors duration-200 hover:bg-white hover:border-white'
          >
            <IoMdMail aria-hidden='true' className='size-5 shrink-0' />
            {dict.emailButton}
          </a>
          <a
            href='https://www.linkedin.com/in/estefania-osses-vera'
            className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-lightsage text-lightsage transition-colors duration-200 hover:bg-lightsage hover:text-darkteal'
          >
            <FaLinkedin aria-hidden='true' className='size-5 shrink-0' />
            LinkedIn
          </a>
        </div>
        <p className='mt-6 text-sm [overflow-wrap:anywhere]'>
          {email}
        </p>
      </div>
    </section>
  )
}

export default Contact
