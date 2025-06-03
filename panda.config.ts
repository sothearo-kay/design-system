import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: [
    './app.vue',
    './**/components/**/*.{js,jsx,ts,tsx,vue}',
    './**/pages/**/*.{js,jsx,ts,tsx,vue}',
    './**/layouts/**/*.{js,jsx,ts,tsx,vue}'
  ],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        fontSizes: {
          xs: { value: '0.75rem' },
          sm: { value: '0.875rem' },
          md: { value: '1rem' },
          lg: { value: '1.125rem' },
          xl: { value: '1.25rem' },
          '2xl': { value: '1.5rem' },
          '3xl': { value: '1.875rem' },
          '4xl': { value: '2.25rem' },
          '5xl': { value: '3rem' }
        },
        fontWeights: {
          normal: { value: '400' },
          medium: { value: '500' },
          semibold: { value: '600' },
          bold: { value: '700' }
        },
        lineHeights: {
          none: { value: '1' },
          tight: { value: '1.25' },
          snug: { value: '1.375' },
          normal: { value: '1.5' },
          relaxed: { value: '1.625' },
          loose: { value: '2' }
        }
      }
    }
  },
  outdir: 'styled-system'
});
