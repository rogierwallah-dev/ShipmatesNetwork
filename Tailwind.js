// tailwind.config.js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#0A1931',
        accent: '#00BCD4',
        light: '#F7F7F7',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      animation: {
        'scale-up': 'scaleUp 0.3s ease',
      },
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}