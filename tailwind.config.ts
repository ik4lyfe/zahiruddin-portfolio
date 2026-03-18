import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669',
          light: '#34d399',
          dark: '#047857',
        },
        accent: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
        },
        info: {
          DEFAULT: '#0ea5e9',
        },
        surface: {
          dark: '#111917',
          darker: '#0a0f0d',
          card: '#1a2e25',
          border: '#1f3d2e',
        },
        'surface-light': {
          DEFAULT: '#f0fdf4',
          card: '#ffffff',
          border: '#d1fae5',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
