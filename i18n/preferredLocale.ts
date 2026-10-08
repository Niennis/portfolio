import { defaultLocale, isLocale, type Locale } from './config'

// Elige el idioma según la configuración del navegador (encabezado Accept-Language, por ejemplo "en-US,en;q=0.9,es;q=0.8")
export const preferredLocale = (header: string | null): Locale => {
  if (!header) return defaultLocale

  const languages = header
    .split(',')
    .map((part) => {
      const [tag, quality] = part.trim().split(';q=')
      return { lang: tag.toLowerCase().split('-')[0], q: quality ? parseFloat(quality) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  const match = languages.find(({ lang }) => isLocale(lang))
  return match ? (match.lang as Locale) : defaultLocale
}
