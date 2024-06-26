export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      titleTemplate: '%s - App Template',
    },
  },

  css: ['@/assets/styles/main.css'],

  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@pinia/nuxt'],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en/index.ts',
      },
      {
        code: 'th',
        name: 'ไทย',
        file: 'th/index.ts',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
  },
});
