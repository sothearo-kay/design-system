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

/**
 * Modules
 */
const modules = defineNuxtConfig({
  modules: []
});

/**
 * Build
 */
const build = defineNuxtConfig({
  pages: true,

  typescript: {
    includeWorkspace: true
  }
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

  components: {
    dirs: [
      {
        path: 'components',
        pathPrefix: false
      }
    ]
  },

  css: [resolve('./assets/css/main.css')],

  alias: {
    'styled-system': resolve('../styled-system')
  },

  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {}
    }
  }
});

export default defu(config, modules, build, app);
