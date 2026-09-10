import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0428',
          surface: '#12132C',
          border: '#2A2C4A',
          primary: '#00ED64',
          primaryDark: '#00C853',
          secondary: '#FFFFFF',
          secondaryDark: '#E6E6E6',
          textPrimary: '#FFFFFF',
          textSecondary: '#9CA3C7',
          success: '#00ED64',
          warning: '#FBBF24',
          error: '#F87171',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #00ED64 0%, #FFFFFF 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
