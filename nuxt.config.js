
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'FULEDA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { hid: 'description', name: 'description', content: 'fuleda富乐达科技，为成为半导体行业高价值服务商而不断努力' },
      {name: 'baidu-site-verification', content: "GUEX04ANFZ"},
      {name: 'google-site-verification', content: "OrJbGio1EtsulKr1cEXtPe4nKVxkhg7Vj3S4qF3jaqo"},
      {name: 'keywords', content: '半导体,semiconductor,fuleda'}
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i18n.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Simple usage
    'cookie-universal-nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n'], // webpack vue-i18n.bundle.js
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
  // generate: {
  //   routes: ['/', '/about', '/fr', '/fr/about']
  // }
}
