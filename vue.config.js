// 'use strict'
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: productionGzipExtensions, // 需要压缩的文件正则
        threshold: 10240, // 文件大小大于这个值时启用压缩
        deleteOriginalAssets: true // 压缩后保留原文件
      })
    ]
  },
  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/prod_env.js')
      config.set('externals', {
        vue: 'vue',
        axios: 'axios',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
      })
    })
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/dev_env.js')
    })
  }
}
