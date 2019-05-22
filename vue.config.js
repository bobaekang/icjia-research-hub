/* compression */
const BrotliPlugin = require('brotli-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const zopfli = require('@gfx/zopfli')

/* prerender */
const fs = require('fs')
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

/* bundle analyzer */
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

const compressionTest = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const compressionPlugins = [
  new CompressionPlugin({
    algorithm(input, compressionOptions, callback) {
      return zopfli.gzip(input, compressionOptions, callback)
    },
    compressionOptions: {
      numiterations: 15
    },
    minRatio: 0.99,
    test: compressionTest
  }),
  new BrotliPlugin({
    test: compressionTest,
    minRatio: 0.99
  })
]

const prerenderRoutes = JSON.parse(fs.readFileSync('./routes.json'))
const preprenderPlugins = [
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: prerenderRoutes,
    postProcess(renderedRoute) {
      renderedRoute.html = renderedRoute.html
        .replace(/<script (.*?)>/g, `<script $1 defer>`)
        .replace(`id="app"`, `id="app" data-server-rendered="true"`)

      return renderedRoute
    },
    renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
      maxConcurrentRoutes: 16,
      renderAfterDocumentEvent: 'render-event'
    })
  })
]

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === `production`) {
      config.plugins.push(
        // new BundleAnalyzerPlugin(),
        ...compressionPlugins,
        ...preprenderPlugins
      )
    }
  }
}
