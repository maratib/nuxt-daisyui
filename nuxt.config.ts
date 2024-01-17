const isDev = process.env.NODE_ENV === 'development'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // APP Config
  app: {
    head: {
      bodyAttrs: {
        class: isDev ? 'debug-screens' : ''
      }
    }
  },


  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-headlessui"],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    injectPosition: 0,
    viewer: false,
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    dataValue: 'theme',
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  headlessui: {
    prefix: 'H'
  },

  plugins: [
    {
      src: '@/plugins/aos',
      ssr: false,
      mode: 'client',
    },
  ],

  runtimeConfig: {
    private: {
      cookieName: process.env.COOKIE_NAME || "__session",
    },
    public: {}
  },




})
