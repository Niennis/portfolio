import React from 'react'
import { FaGithub } from 'react-icons/fa'
import type { Dictionary } from '@/i18n/getDictionary'

type Props = {
  dict: Dictionary['footer']
}

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
          {/* Correo y LinkedIn están en la sección Contacto, justo arriba; aquí solo queda GitHub */}
          <a href='https://github.com/Niennis' className='inline-flex w-fit items-center gap-2 text-sm font-semibold underline-offset-4 hover:text-white hover:underline'>
            <FaGithub aria-hidden='true' className='size-4 shrink-0' />
            github/Niennis
          </a>
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
