import { defu } from 'defu';
import { createResolver } from 'nuxt/kit';

const { resolve } = createResolver(import.meta.url);

// debug
console.log('Adding layer: core');

/**
 * Config
 */
const config = defineNuxtConfig({
  runtimeConfig: {
    public: {}
  }
});

const modules = defineNuxtConfig({
  modules: []
});

/**
 * App
 */
const app = defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  css: [resolve('./assets/css/main.css')]
});

export default defu(config, modules, app);
