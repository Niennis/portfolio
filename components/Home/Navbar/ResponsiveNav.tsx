'use client'
import React, { useCallback, useRef, useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
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
      <Nav openNav={handleNavShow} showNav={showNav} menuButtonRef={menuButtonRef} />
      <MobileNav showNav={showNav} closeNav={handleNavHide} />
    </header>
  )
}

export default ResponsiveNav
