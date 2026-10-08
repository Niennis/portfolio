'use client'
import React, { useCallback, useRef, useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import type { Dictionary } from '@/i18n/getDictionary'

type Props = {
  dict: Dictionary['nav']
}

const ResponsiveNav = ({ dict }: Props) => {
  const [showNav, setShowNav] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const handleNavShow = () => {
    setShowNav(true)
  }

  // Al cerrar sin elegir un link, el foco vuelve al botón del menú
  const handleNavHide = useCallback((returnFocus = true) => {
    setShowNav(false)
    if (returnFocus) menuButtonRef.current?.focus()
  }, [])

  return (
    <header>
      <Nav openNav={handleNavShow} showNav={showNav} menuButtonRef={menuButtonRef} dict={dict} />
      <MobileNav showNav={showNav} closeNav={handleNavHide} dict={dict} />
    </header>
  )
}

export default ResponsiveNav
