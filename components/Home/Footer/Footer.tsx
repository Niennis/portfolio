import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import type { Dictionary } from '@/i18n/getDictionary'

type Props = {
  dict: Dictionary['footer']
}

const links = [
  { label: 'estefania.osses.v@gmail.com', url: 'mailto:estefania.osses.v@gmail.com', Icon: IoMdMail },
  { label: 'linkedin/estefania-osses-vera', url: 'https://www.linkedin.com/in/estefania-osses-vera', Icon: FaLinkedin },
  { label: 'github/Niennis', url: 'https://github.com/Niennis', Icon: FaGithub },
]

const Footer = ({ dict }: Props) => {
  // El año se calcula al generar la página, así el aviso no queda desactualizado
  const year = new Date().getFullYear()

  return (
    <footer className='bg-deepteal py-10 text-lightsage'>
      <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          {/* Logo y rol */}
          <div>
            <p className='text-xl md:text-2xl font-bold text-white playwrite-hu'>
              <span className='text-3xl md:text-4xl text-sage'>E</span>stefania
            </p>
            <p className='mt-2 text-sm font-medium'>
              {dict.role}
            </p>
          </div>
          {/* Links */}
          <ul aria-label={dict.linksLabel} className='flex flex-col gap-3 text-sm font-semibold md:flex-row md:flex-wrap md:gap-6'>
            {links.map(({ label, url, Icon }) => (
              <li key={url}>
                <a href={url} className='inline-flex items-center gap-2 underline-offset-4 hover:text-white hover:underline [overflow-wrap:anywhere]'>
                  <Icon aria-hidden='true' className='size-4 shrink-0' />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Bottom section */}
        <div className='mt-8 border-t border-lightsage/20 pt-6 text-sm text-center md:text-left'>
          <p>
            Copyright © {year} Estefania Osses Vera. {dict.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
