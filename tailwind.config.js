/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090e',
          900: '#0c1017',
          850: '#111722',
          800: '#161f2e',
          700: '#222f44',
          600: '#334155',
        },
        brand: {
          DEFAULT: '#0284c7',
          cyan: '#38bdf8',
          blue: '#0284c7',
          light: '#7dd3fc',
          dark: '#0369a1',
          glow: '#00b4d8',
          accent: '#0ea5e9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.25))' },
          '100%': { filter: 'drop-shadow(0 0 35px rgba(2, 132, 199, 0.5))' },
        }
      }
    },
  },
  plugins: [],
}
