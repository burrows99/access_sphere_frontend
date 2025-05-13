/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sphere: {
          blue: {
            light: '#003153',
            dark: '#003153'
          },
          grey: {
            light: '#F9FAFB',
            dark: '#4B5563'
          },
          green: {
            light: '#ECFDF5',
            dark: '#D1FAE5'
          }
        }
      }
    }
  },
  plugins: [],
}
