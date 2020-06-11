
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'FULEDA',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width,initial-scale=0.3,minimum-scale=0.3,maximum-scale=0.3,user-scalable=no' },
      { hid: 'description', name: 'description', content: 'High-quality semiconductor products provider' },
      {name: 'baidu-site-verification', content: "JOVc29aSEV"},
      {name: 'google-site-verification', content: "OrJbGio1EtsulKr1cEXtPe4nKVxkhg7Vj3S4qF3jaqo"},
      {name: 'keywords', content: 'Semiconductor silicon wafer,1inch silicon wafer,2inch silicon wafer,3inch silicon wafer,4inch silicon wafer,5inch silicon wafer,6inch silicon wafer,8inch silicon wafer,12inch silicon wafer,FZ wafer,CZ wafer,SiC wafer,dicing wafer,grinding wafer,oxide film wafer,Silicon nitride,solar cell,solar solar panel,used solar panel,solar energy,silicon nitride thermal plate,silicon nitride powder,silicon nitride device,Si3N4,metal film'}
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
    { src: '~/plugins/element-ui', ssr: true },
    { src: '~/plugins/i18n.js', ssr: true }
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
    vendor: ['vue-i18n','element-ui'], // webpack vue-i18n.bundle.js
    maxChunkSize: 300000,
    babel: {
      plugins: [
          [
              'component',
              {
                  'libraryName': 'element-ui',
                  'styleLibraryName': 'theme-chalk'
              }
          ]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
  render: {
    resourceHints: false
  }
  // generate: {
  //   routes: ['/', '/about', '/fr', '/fr/about']
  // }
}
