/** QDN Guide — design tokens (shared with the QDN brand system). */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#ece9e2',
        'paper-2': '#e4e0d7',
        surface: '#faf8f3',
        ink: '#1b1c14',
        'ink-2': '#54554a',
        muted: '#6c695e',
        faint: '#a9a599',
        line: '#e0dccf',
        'line-2': '#cdc7b8',
        // Driven by CSS vars so the whole guide reskins from src/config.ts
        accent: { DEFAULT: 'var(--accent)', soft: 'var(--accent-soft)', ink: 'var(--accent-ink)' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        label: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em' }],
        h1: ['clamp(1.9rem, 3.4vw, 2.6rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
      },
      letterSpacing: { tight2: '-0.02em' },
      maxWidth: { wrap: '1240px', prose: '46rem' },
    },
  },
  plugins: [],
};
