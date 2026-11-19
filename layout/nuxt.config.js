const axios = require('axios');

const category = {
  async getAll(params = {}) {
    try {
      const response = await axios.get(`${process.env.NUXT_ENV_API_URL}/api/categories`, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return null;
    }
  },
};

const blog = {
  async getAll(params = {}) {
    try {
      const response = await axios.get(`${process.env.NUXT_ENV_API_URL}/api/blog`, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return null;
    }
  },
};

const API = {
  category,
  blog,
};

export default {

  env: {
    // NUXT_ENV_API_URL: 'http://194.242.45.55:8001',
  },

  server: {
    port: 8090, // default: 3000
  },

  // serverMiddleware: ['~/server-middleware/location', { path: '/app', handler: '~/server-middleware/rest.js' }],

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'GRsWyXGx3vDF9aABtMO6BnQJNSKyvTe5EUzDz37OGsY' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/global.css',
    '@/assets/css/global.scss',
    '@/assets/css/fonts.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/apexCharts.js', mode: 'client' },
    { src: '~/plugins/swiper.js', mode: 'client' },
    { src: '~/plugins/lineChart.js', mode: 'client' },
    '~/plugins/element-ui.js',
    '~/plugins/fontawesome.js',
  ],

  router: {
    trailingSlash: true,
    middleware: ['trailingSlashMiddleware'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'G-R814CD7FR6', // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'G-R814CD7FR6',
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-analytics',
    ['@nuxtjs/robots', {
      UserAgent: '*',
      // Disallow: '/admin',
      Disallow: ['/admin/**', '/login', '/sign-up', '/glossary/'],
      Allow: '/',
      BlankLine: true,
      // { Comment: 'Comment here' },
      // Be aware that this will NOT work on target: 'static' mode
      Sitemap: `${process.env.NUXT_ENV_API_URL || 'http://localhost:8001'}/sitemap.xml`,
    }],
    // '@nuxtjs/sitemap' show be in the end of array
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: `${process.env.NUXT_ENV_API_URL || 'http://localhost:8001'}`,
    gzip: true,
    exclude: [
      '/restricted',
      '/glossary/',
      '/error/',
      '/admin/**',
    ],
    routes: async () => {
      const blogListRes = await API.blog.getAll({ limit: 1000 });
      const categoryListRes = await API.category.getAll();

      const normalizeUrl = (url) => (url.endsWith('/') ? url : `${url}/`);

      const blogListUrl = blogListRes?.blogs?.data?.map((b) => normalizeUrl(`/blog/${b.slug}`)) || [];
      const categoryListUrl = categoryListRes?.categories?.map((c) => normalizeUrl(`/blog/category/${c.slug}`));
      return [...categoryListUrl, ...blogListUrl];
    },
  },
  // bridge : {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      if (isClient && !isDev) {
        // eslint-disable-next-line no-param-reassign
        config.optimization.splitChunks.maxSize = 500000;
      }
    },
  },
};
