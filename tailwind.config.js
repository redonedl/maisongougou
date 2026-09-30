/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crave: {
          brown: '#3e2723',
          orange: '#ff6e40',
          yellow: '#f4f9a0',
          red: '#e64a19',
          light: '#fbf9f6',
          gray: '#8d8d8d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
