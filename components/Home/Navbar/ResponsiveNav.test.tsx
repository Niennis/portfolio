import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import ResponsiveNav from './ResponsiveNav'

describe('ResponsiveNav', () => {
  const getMobileMenu = () => document.getElementById('menu-movil')

  it('keeps the closed mobile menu out of keyboard and screen reader reach', () => {
    render(<ResponsiveNav />)

    expect(screen.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute('aria-expanded', 'false')
    expect(getMobileMenu()).toHaveAttribute('inert')
  })

  it('opens the menu and moves focus into it', () => {
    render(<ResponsiveNav />)

    const menuButton = screen.getByRole('button', { name: 'Abrir menú' })
    fireEvent.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(getMobileMenu()).not.toHaveAttribute('inert')
    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveFocus()
  })

  it('closes with Escape and returns focus to the menu button', () => {
    render(<ResponsiveNav />)

    const menuButton = screen.getByRole('button', { name: 'Abrir menú' })
    fireEvent.click(menuButton)
    fireEvent.keyDown(document, { key: 'Escape' })

    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(getMobileMenu()).toHaveAttribute('inert')
    expect(menuButton).toHaveFocus()
  })

  it('keeps Tab focus inside the open menu', () => {
    render(<ResponsiveNav />)

    fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }))
    const closeButton = screen.getByRole('button', { name: 'Cerrar menú' })
    const links = getMobileMenu()!.querySelectorAll('a')
    const lastLink = links[links.length - 1]

    lastLink.focus()
    fireEvent.keyDown(document, { key: 'Tab' })
    expect(closeButton).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(lastLink).toHaveFocus()
  })
})
