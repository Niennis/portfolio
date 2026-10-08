import { navLinks } from '@/constant/Constant'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
import type { Dictionary } from '@/i18n/getDictionary'

type Props = {
  showNav: boolean,
  closeNav: (returnFocus?: boolean) => void,
  dict: Dictionary['nav']
}

const MobileNav = ({ showNav, closeNav, dict }: Props) => {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)

  // Al abrir, el foco pasa al menú, Tab no sale de él y la tecla Escape lo cierra
  useEffect(() => {
    if (!showNav) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeNav()
        return
      }

      if (e.key !== 'Tab' || !menuRef.current) return

      const focusables = menuRef.current.querySelectorAll<HTMLElement>('a[href], button')
      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [showNav, closeNav])

  return (
    <div className='lg:hidden'>
      {/* overlay */}
      <div
        aria-hidden='true'
        onClick={() => closeNav()}
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* NavLinks: con "inert" el menú cerrado no recibe foco ni lo leen los lectores de pantalla */}
      <nav
        ref={menuRef}
        id='menu-movil'
        aria-label={dict.ariaLabel}
        inert={!showNav}
        className={`text-white ${navOpen} fixed top-0 left-0 justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-darkteal z-[10006]`}
      >
        {/* Close icon */}
        <button
          ref={closeButtonRef}
          type='button'
          onClick={() => closeNav()}
          aria-label={dict.closeMenu}
          className='absolute top-[0.7rem] right-[1.4rem] rounded-md focus-visible:outline-lightsage'
        >
          <CgClose aria-hidden='true' className='sm:w-8 sm:h-8 w-6 h-6' />
        </button>
        <ul className='space-y-6'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.url}
                onClick={() => closeNav(false)}
                className='nav__link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] focus-visible:outline-lightsage'
              >
                {dict.links[link.key]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav
