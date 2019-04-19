// var path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  // baseUrl:
  //   process.env.NODE_ENV === 'production'
  //     ? '/icjia-data-portal-proto-dist/'
  //     : '/',
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     config.plugins = [
  //       new PrerenderSPAPlugin({
  //         staticDir: path.join(__dirname, 'dist'),
  //         routes: ['/', '/about'],
  //         renderer: new Renderer({
  //           renderAfterElementExists: '#app',
  //           renderAfterTime: 5000,
  //           headless: true
  //         })
  //       })
  //     ]
  //   }
  // }
}
