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
        // 'ms': '320px', //mobile s ==> base
        'mm': '375px',  //mobile m
        'ml': '425px', //mobile L
        'sm': '480px',   // hp 
        'md': '768px',   // tablet
        'lg': '1024px',  // laptop
        'xl': '1280px',  // laptop
      },
      fontFamily: {
        'main': 'Manrope',
        'secondary': 'Poppins',
      },
      colors: {
        'light-green': '#5EB47C',
        'thick-green' : '#007D6E',
        'based': '#FCF8F4',
        'button': '#EC744A'
      }
    },
  },
  plugins: [],
};
