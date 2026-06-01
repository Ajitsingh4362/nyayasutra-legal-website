module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#050b18', 900: '#071225', 850: '#0b1d38', 800: '#102846' },
        gold: { 300: '#f7d98b', 400: '#e7bd48', 500: '#d4a72c', 600: '#ad7f18' },
        ivory: '#f7f1df',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0,0,0,.35)',
        gold: '0 0 0 1px rgba(212,167,44,.28), 0 20px 60px rgba(0,0,0,.28)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
