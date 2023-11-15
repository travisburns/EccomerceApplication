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
      boxShadow: {
        'shadow-black': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
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



