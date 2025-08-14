'use client'
import React, { useEffect, useState } from 'react'
import { navLinks } from '@/constant/Constant'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'

type Props = {
  openNav: () => void
}

const Nav = ({  }: Props) => {

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
        <h1 className='text-xl md:text-2xl font-bold'>
          <span className='text-3xl md:text-4xl text-sage'>E</span>stefania
        </h1>
        {/* NavLinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => {
            return <Link href={link.url} key={link.id}>
              <p className='nav__link'>{link.label}</p>
            </Link>
          })}
          <ThemeSwitch />
        </div>
        {/* Buttons */}
        {/* <div className='flex items-center space-x-4'>
          <button className='md:px-8 md-py-2.5 px-6 py-2 text-white font-semibold text-base bg-sage hover:bg-lightsage hover:text-darkteal transition-all duration-200 rounded-full'>
            Join now
          </button> */}
          {/* Burger menu */}
          {/* <HiBars3BottomRight
            onClick={openNav}
            className='w-8 h-8 cursor-pointer text-black lg:hidden'
          />
        </div> */}
      </div>
    </div>
  )
}

export default Nav