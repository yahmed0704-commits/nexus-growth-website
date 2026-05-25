/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#080f18',
          DEFAULT: '#0d1825',
          mid: '#111e2c',
          light: '#1B2B4B',
          accent: '#243d60',
        },
        gold: {
          DEFAULT: '#C9912A',
          light: '#e8b84b',
          dim: 'rgba(201,145,42,0.2)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
