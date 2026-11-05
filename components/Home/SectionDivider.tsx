import React from 'react'

type Props = {
  // Clases de color (text-*) con el fondo de la sección vecina: la onda se pinta con currentColor
  colorClassName: string
  // 'bottom': la onda sube desde el borde inferior; 'top': cuelga desde el borde superior
  position: 'top' | 'bottom'
}

// Onda decorativa para unir una sección con la siguiente sin un corte recto
const SectionDivider = ({ colorClassName, position }: Props) => (
  <svg
    aria-hidden='true'
    focusable='false'
    viewBox='0 0 1440 120'
    preserveAspectRatio='none'
    className={`pointer-events-none absolute inset-x-0 block h-10 w-full sm:h-16 md:h-20 ${position === 'bottom' ? 'bottom-0' : 'top-0 rotate-180'} ${colorClassName}`}
  >
    <path fill='currentColor' d='M0,64 C240,112 480,8 720,40 C960,72 1200,112 1440,56 L1440,120 L0,120 Z' />
  </svg>
)

export default SectionDivider
