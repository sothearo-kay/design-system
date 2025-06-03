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
    extend: {}
  },
  outdir: 'styled-system'
});
