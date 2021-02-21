'use strict'
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  externals: {
    vue: 'Vue',
    vuex: 'vuex',
    axios: 'axios',
    'vue-router': 'VueRouter'
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: productionGzipExtensions, // 需要压缩的文件正则
        threshold: 10240, // 文件大小大于这个值时启用压缩
        deleteOriginalAssets: true // 压缩后保留原文件
      })
    ]
  }
}
