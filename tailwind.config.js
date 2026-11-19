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
        // 60% Dominant Color (#0e1728 & harmonic deep midnight navy tones)
        dark: {
          950: '#0e1728', // Exact 60% Dominant Canvas
          900: '#131f35', // Main Card & Panel Surface
          850: '#182640', // Elevated Surfaces & Toolbars
          800: '#1e2f4e', // Borders & Active Panels
          750: '#253a5e',
          700: '#2d456f',
          600: '#3d5a8c',
        },
        // 30% Secondary Neutral (#d9d0c9 & warm sandstone / pearl tints)
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
        // 10% Accent Color (#f58517 & vibrant amber/tangerine orange)
        accent: {
          DEFAULT: '#f58517', // Exact 10% Accent
          light: '#fb923c',
          dark: '#ea580c',
          glow: '#ff9838',
          subtle: 'rgba(245, 133, 23, 0.15)',
        },
        // Brand alias for unified tokens
        brand: {
          DEFAULT: '#f58517',
          orange: '#f58517',
          amber: '#fb923c',
          dark: '#ea580c',
          glow: '#ff9838',
          sand: '#d9d0c9',
          navy: '#0e1728',
          cyan: '#f58517', // aliased to accent for backwards compatibility
          blue: '#ea580c',
          light: '#fed7aa',
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
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(245, 133, 23, 0.25))' },
          '100%': { filter: 'drop-shadow(0 0 35px rgba(234, 88, 12, 0.5))' },
        }
      }
    },
  },
  plugins: [],
}
