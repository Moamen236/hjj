/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'main': '#00e1ff',
      },
    },
    theme: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

