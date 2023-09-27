/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000213',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        
        '4k': '2560px',
        // => @media (min-width: 2560px) { ... }
      },
    },
    plugins: [],
  }
}
