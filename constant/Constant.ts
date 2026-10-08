import type { Dictionary } from '@/i18n/getDictionary'

// Links del menú. El texto de cada uno está en los diccionarios (i18n/dictionaries), en nav.links
export const navLinks: { id: number; url: string; key: keyof Dictionary['nav']['links'] }[] = [
  { id: 1, url: '#', key: 'home' },
  { id: 2, url: '#about', key: 'about' },
  { id: 3, url: '#projects', key: 'projects' },
  { id: 4, url: '#skills', key: 'skills' },
  { id: 5, url: '#contact', key: 'contact' },
]
