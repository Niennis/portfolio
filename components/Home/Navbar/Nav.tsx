'use client'
import React, { useEffect, useState } from 'react'
import { navLinks } from '@/constant/Constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import ThemeSwitch from '@/components/ThemeSwitch'

type Props = {
  openNav: () => void,
  showNav: boolean,
  menuButtonRef: React.RefObject<HTMLButtonElement | null>
}

const Nav = ({ openNav, showNav, menuButtonRef }: Props) => {

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
    <div className={`fixed ${navBg ? 'bg-white shadow-md dark:bg-darkteal' : 'fixed'} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* LOGO */}
        <p className='text-xl md:text-2xl font-bold playwrite-hu'>
          <span className='text-3xl md:text-4xl text-sage font-normal tracking-wide '>E</span>stefania
        </p>
        {/* NavLinks */}
        <div className='flex items-center space-x-6 lg:space-x-10'>
          <nav aria-label='Principal' className='hidden lg:block'>
            <ul className='flex items-center space-x-10'>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className='nav__link'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeSwitch />
          {/* Burger menu */}
          <button
            ref={menuButtonRef}
            type='button'
            onClick={openNav}
            aria-label='Abrir menú'
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
