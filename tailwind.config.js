/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'super-black': '#000000', // You can adjust this if needed
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: 0 },
          '10%, 90%': { opacity: 0.7 },
          '50%': { transform: 'translate(100px, 100px)' },
        },
      },
    },
  },
  plugins: [],
}