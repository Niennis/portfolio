import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google'
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import { Providers } from "./providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900', '200', '600', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Estefania Osses Vera",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.className}  antialiased`} >
        <Providers>
          {/* Enlace para saltar el menú con teclado; solo aparece al recibir foco */}
          <a
            href='#contenido'
            className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[20000] focus:px-6 focus:py-3 focus:rounded-full focus:bg-white focus:text-gray-900 focus:font-semibold focus:shadow-md'
          >
            Saltar al contenido principal
          </a>
          <ResponsiveNav />
          <main id='contenido'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
