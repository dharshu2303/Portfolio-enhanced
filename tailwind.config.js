/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#0a67a1',
        'neon-pink': '#FF00F5',
        'neon-purple': '#dc81fa',
        'neon-green': '#00FF57',
        'neon-red': '#ec0f0f',
        'neon-dark-blue': '#031a4b',
        'neon-yellow': '#d0ed4d',
        'dark-bg': '#0A0A0A',
        'darker-bg': '#050505',
        'card-bg': '#111111',
      },
      keyframes: {
        'neon-pulse': {
          '0%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor',
          },
          '100%': {
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'neon-pulse-blue': {
          '0%': {
            textShadow: '0 0 5px #0a67a1, 0 0 10px #0a67a1',
          },
          '100%': {
            textShadow: '0 0 10px #0a67a1, 0 0 20px #0a67a1, 0 0 30px #0a67a1',
          },
        },
        'neon-pulse-pink': {
          '0%': {
            textShadow: '0 0 5px #FF00F5, 0 0 10px #FF00F5',
          },
          '100%': {
            textShadow: '0 0 10px #FF00F5, 0 0 20px #FF00F5, 0 0 30px #FF00F5',
          },
        },
        'neon-pulse-green': {
          '0%': {
            textShadow: '0 0 5px #00FF57, 0 0 10px #00FF57',
          },
          '100%': {
            textShadow: '0 0 10px #00FF57, 0 0 20px #00FF57, 0 0 30px #00FF57',
          },
        },
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s infinite alternate',
        'neon-pulse-blue': 'neon-pulse-blue 2s infinite alternate',
        'neon-pulse-pink': 'neon-pulse-pink 2s infinite alternate',
        'neon-pulse-green': 'neon-pulse-green 2s infinite alternate',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
