export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: process.env.NUXT_ENV_PORT || 8093,
  },

  // serverMiddleware: ['~/server-middleware/location', { path: '/app', handler: '~/server-middleware/rest.js' }],
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Virturo | Virtue In Every Trade',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-light.png' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/favicon-dark.png?v=${new Date()}`,
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/favicon-light.png?v=${new Date()}`,
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [`@/assets/css/main.scss`],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/http.js',
    '~/plugins/creditCardValidation.js',
    '~/plugins/clipboard.js',
    '~/plugins/notification.js',
    '~/plugins/vue-the-mask.js',
    '~/plugins/loading.js',
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/device'],

  styleResources: {
    scss: [`@/assets/vars/*.scss`],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http', 'cookie-universal-nuxt', '@nuxtjs/svg'],
  http: {
    // baseURL: 'http://194.242.45.55:8002',
    // browserBaseURL: 'http://194.242.45.55:8002',
  },

  router: {
    middleware: ['token'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
