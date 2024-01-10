/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greeting-color': '#ade6ff',
        'title-color': '#ffffff',
      },
    },
    fontFamily: {
      'impact': ['Impact', 'Haettenschweiler', 'sans-serif'],
      'math': ['math', 'serif', 'sans-serif'],
      'monospace': ['monospace', 'math', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

