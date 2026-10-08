import { NextResponse, type NextRequest } from 'next/server'
import { isLocale } from './i18n/config'
import { preferredLocale } from './i18n/preferredLocale'

// Toda ruta sin idioma (por ejemplo "/") se redirige a /es o /en
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (isLocale(pathname.split('/')[1])) return

  const locale = preferredLocale(request.headers.get('accept-language'))
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // No aplica a archivos internos de Next.js ni a archivos estáticos (imágenes, favicon, etc.)
  matcher: ['/((?!_next|.*\\..*).*)'],
}
