const path = require('path')
const siteinfo = require('./.config.js')
const serveStatic = require('serve-static')
const srcDir = 'nuxt'
module.exports = {
  srcDir: srcDir,
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-103598811-1' }],
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/poole.css' },
      { rel: 'stylesheet', href: '/css/syntax.css' },
      { rel: 'stylesheet', href: '/css/hyde.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.resolve.alias.siteinfo = path.join(__dirname, '.site.json')
    }
  },
  serverMiddleware: [
    serveStatic(path.join(siteinfo.root, siteinfo.source_dir, siteinfo.collections.static.path))
  ],
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'PageList',
        path: '/:collection/list',
        component: resolve(__dirname, srcDir, 'components/PageList.vue')
      })
      routes.push({
        name: 'BlogList',
        path: '/blog',
        component: resolve(__dirname, srcDir, 'components/PageList.vue')
      })
      routes.push({
        name: 'Page',
        path: '*',
        component: resolve(__dirname, srcDir, 'components/Page.vue')
      })
    }
  }
}
