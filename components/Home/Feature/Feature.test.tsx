import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Feature from './Feature'
import es from '@/i18n/dictionaries/es'
 
describe('Feature', () => {
  it('renders a heading', () => {
    render(<Feature dict={es.skills} />)
 
    const heading = screen.getByRole('heading', { level: 2 })
 
    expect(heading).toBeInTheDocument()
  })
})