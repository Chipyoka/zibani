/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5A35',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
// This Tailwind CSS configuration file sets up a custom color palette and font family for the Zeet project, focusing on a nature-inspired theme with greens, yellows, and warm neutrals. It also includes the necessary content paths for purging unused styles.
// The colors are designed to evoke the natural landscapes of Zambia, with a focus on usability and