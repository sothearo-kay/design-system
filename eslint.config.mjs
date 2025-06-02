import nuxtEslintConfig from '@nuxt/eslint-config';

export default {
  root: true,
  extends: [nuxtEslintConfig],
  ignorePatterns: ['dist', 'node_modules', '.output', '.nuxt'],
  rules: {
    // global
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // vue
    indent: ['error', 2],
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0
  }
};
