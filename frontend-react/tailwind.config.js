/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',   // hp
        'md': '768px',   // tablet
        'lg': '1024px',  // laptop
        'xl': '1280px',  // laptop
      },
      fontFamily: {
        'main': 'Manrope',
        'secondary': 'Poppins',
      }
    },
  },
  plugins: [],
};
