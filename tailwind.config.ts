import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkteal: '#16404D',
        /* darkteal: '#243642? */
        lightteal: '#387478',
        sage: '#629584',
        lightsage: '#E2F1E7',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
