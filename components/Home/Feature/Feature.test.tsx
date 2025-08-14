import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Feature from './Feature'
 
describe('Feature', () => {
  it('renders a heading', () => {
    render(<Feature />)
 
    const heading = screen.getByRole('heading', { level: 2 })
 
    expect(heading).toBeInTheDocument()
  })
})