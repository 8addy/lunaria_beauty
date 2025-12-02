/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lunaria-beige': '#F5F1EB',
        'lunaria-rose': '#F4E6E6',
        'lunaria-charcoal': '#2C2C2C',
        'lunaria-cream': '#FAF8F5',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

