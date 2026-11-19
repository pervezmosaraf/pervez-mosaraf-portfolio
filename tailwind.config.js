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
        // 60% Dominant Base Color (#100714 & solid deep obsidian tones)
        dark: {
          950: '#100714', // Exact 60% Dominant Canvas
          900: '#1a0d21', // Main Card & Surface
          850: '#23122c', // Elevated Surface
          800: '#2d1738', // Borders & Active Panels
          750: '#381c46',
          700: '#432254',
          600: '#572c6d',
        },
        // 30% Secondary Neutral Color (#d9d0c9 & warm sandstone tones)
        sand: {
          50: '#faf8f6',
          100: '#f5efe8',
          200: '#e8dfd7',
          300: '#d9d0c9', // Exact 30% Secondary Neutral
          400: '#c2b6ac',
          500: '#a7988c',
          600: '#8c7d71',
          700: '#6d6055',
          800: '#4e443c',
        },
        // 10% Accent Solid Color (#f58517 & solid vivid orange)
        accent: {
          DEFAULT: '#f58517', // Exact 10% Accent
          hover: '#e0750e',
          light: '#f79a3b',
          dark: '#d66f0d',
          subtle: 'rgba(245, 133, 23, 0.15)',
        },
        // Brand aliases for solid tokens
        brand: {
          DEFAULT: '#f58517',
          orange: '#f58517',
          hover: '#e0750e',
          sand: '#d9d0c9',
          dark: '#100714',
          cyan: '#f58517',
          blue: '#f58517',
          light: '#d9d0c9',
          accent: '#f58517',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
