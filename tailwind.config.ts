import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Cortes en em (16px = 1em): con la letra del navegador agrandada,
    // la página pasa antes al diseño de celular, que tiene espacio para letra grande
    screens: {
      sm: '40em',
      md: '48em',
      lg: '64em',
      xl: '80em',
      '2xl': '96em',
    },
    extend: {
      colors: {
        darkteal: '#16404D',
        /* darkteal: '#243642? */
        lightteal: '#387478',
        sage: '#629584',
        lightsage: '#E2F1E7',
      },
      // Entrada suave del proyecto al cambiar de pestaña (se desactiva con "reducir movimiento")
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(0.75rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.35s ease-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
