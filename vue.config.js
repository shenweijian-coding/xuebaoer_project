'use strict'
// const path = require('path')

// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false
  // devServer: {
  //   proxy: {
  //     historyApiFallback: true,
  //     proxy: [{
  //       context: '/video',
  //       target: 'https://m3u8.huke88.com', // 代理跨域目标接口
  //       changeOrigin: true,
  //       secure: false, // 当代理某些https服务报错时用
  //       cookieDomainRewrite: 'm3u8.huke88.com' // 可以为false，表示不修改
  //     }],
  //     noInfo: true
  //   }
  // }
}
