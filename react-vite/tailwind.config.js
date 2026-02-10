/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': {
            boxShadow:
              '0 26px 60px rgba(0,0,0,0.45), 0 0 10px rgba(255,79,216,0.15)',
          },
          '50%': {
            boxShadow:
              '0 26px 60px rgba(0,0,0,0.45), 0 0 22px rgba(255,79,216,0.35), 0 0 18px rgba(40,246,255,0.25)',
          },
        },
        'neon-flicker': {
          '0%, 100%': {
            textShadow:
              '0 0 22px rgba(255,79,216,0.45), 0 0 26px rgba(122,92,255,0.4), 0 0 24px rgba(40,246,255,0.35)',
          },
          '45%': {
            textShadow:
              '0 0 26px rgba(255,79,216,0.5), 0 0 30px rgba(122,92,255,0.42), 0 0 26px rgba(40,246,255,0.38)',
          },
          '60%': {
            textShadow:
              '0 0 18px rgba(255,79,216,0.35), 0 0 22px rgba(122,92,255,0.3), 0 0 20px rgba(40,246,255,0.28)',
          },
        },
      },
      animation: {
        'neon-pulse': 'neon-pulse 7s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
