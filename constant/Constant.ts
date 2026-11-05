import type { Dictionary } from '@/i18n/getDictionary'

// Links del menú. El texto de cada uno está en los diccionarios (i18n/dictionaries), en nav.links
export const navLinks: { id: number; url: string; key: keyof Dictionary['nav']['links'] }[] = [
  { id: 1, url: '#about', key: 'about' },
  { id: 2, url: '#projects', key: 'projects' },
  { id: 3, url: '#skills', key: 'skills' },
  { id: 4, url: '#contact', key: 'contact' },
]
