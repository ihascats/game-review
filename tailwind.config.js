/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        'screen-nav': 'calc(100vh - 3.5rem)',
      },
    },
  },
  plugins: [],
  'tailwindCSS.includeLanguages': {
    javascript: 'javascript',
    html: 'HTML',
  },
  'editor.quickSuggestions': {
    strings: true,
  },
};
