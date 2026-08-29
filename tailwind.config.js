/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bbs-bg': '#0A0A0A',
        'bbs-surface': '#111111',
        'bbs-raised': '#181818',
        'bbs-hover': '#202020',
        'bbs-border': '#262626',
        'bbs-border-light': '#333333',
        'bbs-border-focus': '#3F3F46',
        'bbs-text': '#F5F5F0',
        'bbs-muted': '#A0A0A0',
        'bbs-dim': '#707070',
        'bbs-accent': '#2563EB',
        'bbs-accent-hover': '#1D4ED8',
        'bbs-accent-light': '#60A5FA',
        'bbs-accent-dim': 'rgba(37, 99, 235, 0.15)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        'container': '1400px',
      },
      keyframes: {
        'marquee-scroll': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.9' },
          '70%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'cursor-blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'marquee': 'marquee-scroll 28s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'cursor-blink': 'cursor-blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
};
