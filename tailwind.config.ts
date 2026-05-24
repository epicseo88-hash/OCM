import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#2D0A6B',
        'rich-brown': '#3B1F0A',
        'gas-blue': '#00B4D8',
        'off-white': '#F0EBE3',
        'gold': '#C9A84C',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(4rem, 9vw, 9rem)',
        'display': 'clamp(2.5rem, 5vw, 5rem)',
        'headline': 'clamp(1.8rem, 3vw, 3rem)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 180, 216, 0.4), 0 0 40px rgba(0, 180, 216, 0.15)',
        'glow-blue-sm': '0 0 10px rgba(0, 180, 216, 0.3)',
        'glow-gold': '0 0 20px rgba(201, 168, 76, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 180, 216, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 180, 216, 0.7), 0 0 80px rgba(0, 180, 216, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
