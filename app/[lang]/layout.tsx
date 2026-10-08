import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Poppins } from 'next/font/google'
import "../globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import { Providers } from "../providers";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900', '200', '600', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

type Props = {
  params: Promise<{ lang: string }>
}

// Solo existen las páginas de los idiomas configurados; cualquier otro da 404
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}

  const dict = getDictionary(lang)
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    // Le indica a los buscadores que /es y /en son la misma página en otro idioma
    alternates: {
      canonical: `/${lang}`,
      languages: { es: '/es', en: '/en', 'x-default': '/es' },
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<Props & { children: React.ReactNode }>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const dict = getDictionary(lang)

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${poppins.className}  antialiased`} >
        <Providers>
          {/* Enlace para saltar el menú con teclado; solo aparece al recibir foco */}
          <a
            href='#contenido'
            className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[20000] focus:px-6 focus:py-3 focus:rounded-full focus:bg-white focus:text-gray-900 focus:font-semibold focus:shadow-md'
          >
            {dict.skipLink}
          </a>
          <ResponsiveNav dict={dict.nav} />
          <main id='contenido'>
            {children}
          </main>
          <Footer dict={dict.footer} />
        </Providers>
      </body>
    </html>
  );
}
