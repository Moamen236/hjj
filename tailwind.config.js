/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {},
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

