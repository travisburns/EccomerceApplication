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
        primary: '#6D38C4',  // Purple
        secondary: '#F59E0B',  // Gold
        accent: '#1F2937',  // Charcoal
        background: '#111827',  // Dark Blue-Gray
        text: '#F9FAFB',  // White
        success: '#34D399',  // Green
        danger: '#EF4444',  // Red
        info: '#3B82F6',  // Blue
        warning: '#FBBF24',  // Yellow
        brown: {
          500: '#8B4513', // Lighter brown
          600: '#6D3811', // Darker brown
        },
},
      screens: {
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
}



