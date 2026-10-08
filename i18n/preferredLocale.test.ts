import { preferredLocale } from './preferredLocale'

describe('preferredLocale', () => {
  it('uses Spanish when there is no header or no supported language', () => {
    expect(preferredLocale(null)).toBe('es')
    expect(preferredLocale('fr-FR,de;q=0.8')).toBe('es')
  })

  it('picks the first supported language by quality', () => {
    expect(preferredLocale('en-US,en;q=0.9,es;q=0.8')).toBe('en')
    expect(preferredLocale('es-CL,es;q=0.9,en;q=0.8')).toBe('es')
    expect(preferredLocale('fr;q=1,en;q=0.5,es;q=0.7')).toBe('es')
  })
})
