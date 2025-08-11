import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        muted: '#1a1a1a',
        accent: '#5B8AA8'
      }
    },
  },
  plugins: [],
} satisfies Config 