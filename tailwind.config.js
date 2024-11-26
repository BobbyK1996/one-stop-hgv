/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: {
          50: '#f4f9ec',
          100: '#e6f2d5',
          200: '#cee7af',
          300: '#aed680',
          400: '#90c358',
          500: '#71a83a',
          600: '#629630',
          700: '#446625',
          800: '#385222',
          900: '#314720',
          950: '#18260d',
        },
      },
    },
  },
  plugins: [],
};
