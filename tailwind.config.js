/** @type {import('tailwindcss').Config} */
const { heroui } = require('@heroui/react');
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#002228',
        primary: '#0FF1F6',
        secondary: '#14BCB2',
        foreground: '#ffffff',
      },
      fontFamily: { montserrat: ' "Montserrat", sans-serif' },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

