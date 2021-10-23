import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Aurora Launcher` : 'Aurora Launcher'
    },
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft',
      },
      // Icons
      { name: 'msapplication-TileColor', content: '#2d89ef' },
      { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'og:image', content: '/logo.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;700&display=swap',
      },
      // Icons
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    'nuxt-fontawesome',
    '@nuxtjs/markdownit',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '68187730',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      },
    ],
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faPalette',
          'faBook',
          'faBomb',
          'faStar',
          'faAngleLeft',
          'faAngleRight',
          'faRocket',
          'faServer',
          'faCode',
          'faCubes',
        ],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faDiscord', 'faGithub', 'faGitlab'],
      },
    ],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  markdownit: {
    use: ['markdown-it-attrs'],
    highlight(str, lang) {
      const tpl = '<pre><code class="hljs">{code}</code></pre>'
      if (lang && hljs.getLanguage(lang)) {
        try {
          return tpl.replace(
            '{code}',
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
          )
        } catch (_) {}
      }
      return tpl.replace('{code}', new MarkdownIt().utils.escapeHtml(str))
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      if (isClient && !isDev) {
        config.optimization.splitChunks.maxSize = 250000
      }
    },
    babel: {
      compact: true,
    },
    // analyze: {
    //   analyzerMode: 'static',
    // },
  },
}
