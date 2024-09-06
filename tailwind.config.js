/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Gray700: '#0D0D0D',
        Gray500: '#262626',
        Gray400: '#333333',
        Gray300: '#808080',
        Gray100: '#F2F2F2',
        Fundo: '#191919',
        BlueDark: '#1E6F9F',
        Blue: '#4EA8DE',
        Purple: '#8284FA'
      },
      fontFamily: {
        Inter: 'Inter'
      }
    },
  },
  plugins: [],
}