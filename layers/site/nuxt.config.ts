// debug
console.log('Adding layer: site');

export default defineNuxtConfig({
  components: [
    {
      path: 'components',
      pathPrefix: false
    }
  ],

  dir: {
    public: 'public'
  }
});
