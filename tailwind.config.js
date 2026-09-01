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
        'bbs-bg': 'var(--bbs-bg)',
        'bbs-surface': 'var(--bbs-surface)',
        'bbs-raised': 'var(--bbs-raised)',
        'bbs-hover': 'var(--bbs-hover)',
        'bbs-border': 'var(--bbs-border)',
        'bbs-border-light': 'var(--bbs-border-light)',
        'bbs-border-focus': 'var(--bbs-border-focus)',
        'bbs-text': 'var(--bbs-text)',
        'bbs-muted': 'var(--bbs-muted)',
        'bbs-dim': 'var(--bbs-dim)',
        'bbs-accent': 'var(--bbs-accent)',
        'bbs-accent-hover': 'var(--bbs-accent-hover)',
        'bbs-accent-light': 'var(--bbs-accent-light)',
        'bbs-accent-dim': 'var(--bbs-accent-dim)',
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
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
