'use client'
import React, { useEffect, useState } from 'react'
import { navLinks } from '@/constant/Constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import ThemeSwitch from '@/components/ThemeSwitch'
import type { Dictionary } from '@/i18n/getDictionary'

type Props = {
  openNav: () => void,
  showNav: boolean,
  dict: Dictionary['nav'],
  menuButtonRef: React.RefObject<HTMLButtonElement | null>
}

const Nav = ({ openNav, showNav, menuButtonRef, dict }: Props) => {

  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) { setNavBg(true) }
      if (window.scrollY < 90) { setNavBg(false) }
    }

    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return (
    <div className={`fixed ${navBg ? 'bg-white shadow-md dark:bg-darkteal' : 'fixed'} w-full transition-all duration-200 h-[var(--nav-height)] z-[1000]`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* LOGO: con letra muy grande se recorta para que los botones siempre quepan */}
        <p className='min-w-0 overflow-x-clip whitespace-nowrap text-ellipsis text-xl md:text-2xl font-bold playwrite-hu'>
          <span className='text-3xl md:text-4xl text-sage font-normal tracking-wide '>E</span>stefania
        </p>
        {/* NavLinks */}
        <div className='flex shrink-0 items-center space-x-3 sm:space-x-6 lg:space-x-10'>
          <nav aria-label={dict.ariaLabel} className='hidden lg:block'>
            <ul className='flex items-center space-x-10'>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className='nav__link'>
                    {dict.links[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Cambio de idioma: lang hace que el lector de pantalla lo pronuncie en ese idioma */}
          <Link
            href={`/${dict.switchLanguage.locale}`}
            lang={dict.switchLanguage.locale}
            hrefLang={dict.switchLanguage.locale}
            aria-label={dict.switchLanguage.label}
            className='nav__link font-semibold'
          >
            {dict.switchLanguage.short}
          </Link>
          <ThemeSwitch labels={{ toLight: dict.themeToLight, toDark: dict.themeToDark }} />
          {/* Burger menu */}
          <button
            ref={menuButtonRef}
            type='button'
            onClick={openNav}
            aria-label={dict.openMenu}
            aria-expanded={showNav}
            aria-controls='menu-movil'
            className='lg:hidden rounded-md'
          >
            <HiBars3BottomRight aria-hidden='true' className='w-8 h-8' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
