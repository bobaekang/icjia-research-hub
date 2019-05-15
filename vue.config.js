const BrotliPlugin = require('brotli-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const zopfli = require('@gfx/zopfli')

let plugins = [new BundleAnalyzerPlugin()]

if (process.env.NODE_ENV === 'production') {
  const compressionTest = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
  plugins.push(
    ...[
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
  )
}

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === `production`) {
      config.plugins.push(...plugins)
    }
  }
}
