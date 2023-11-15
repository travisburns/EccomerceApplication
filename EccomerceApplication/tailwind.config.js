/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        Lato: ["Lato", "sans-serif"],
        Harrington: ["Harrington", 'serif']
      },
      colors: {
        headerColor: '#F2F2F2',
        navigationColor: '#170206'
      },
      screens: {
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
}



