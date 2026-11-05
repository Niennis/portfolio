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

  it('separates the main stack from other tools', () => {
    render(<Feature dict={es.skills} />)

    const [main, other] = screen.getAllByRole('list')
    expect(screen.getByRole('heading', { level: 3, name: es.skills.main })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: es.skills.other })).toBeInTheDocument()
    expect(main).toHaveTextContent('React')
    expect(main).not.toHaveTextContent('TypeScript')
    expect(other).toHaveTextContent('TypeScript')
  })
})