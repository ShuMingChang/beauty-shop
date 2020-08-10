/**
 * 開發用 webpack.dev.server 設定
 */
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    host: '0.0.0.0',
    port: 9797,
    https: false,
    open: true,
    hotOnly: true,
    // proxy: {
    //   '/api/bettor': {
    //     target: 'https://memapi.ibocity9.com',
    //     secure: true,
    //     changeOrigin: true,
    //     logLevel: 'debug',
    //     pathRewrite: {
    //       '/api/bettor': ''
    //     }
    //   },
    //   '/api/base': {
    //     target: 'http://localhost:3889',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/api/base': ''
    //     }
    //   },
    //   '/api/smtv': {
    //     target: 'https://smtv.io',
    //     secure: true,
    //     changeOrigin: true,
    //     logLevel: 'debug',
    //     pathRewrite: {
    //       '/api/smtv': ''
    //     }
    //   },
    //   '/express-mock': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     logLevel: 'debug',
    //     pathRewrite: {
    //       '/express-mock': ''
    //     }
    //   },
    //   '/api/smbf': {
    //     target: 'https://smbf.zanxingtv.com',
    //     secure: true,
    //     changeOrigin: true,
    //     logLevel: 'debug'
    //   },
    //   '/api/smdj': {
    //     target: 'https://smbf.zanxingtv.com',
    //     secure: true,
    //     changeOrigin: true,
    //     logLevel: 'debug'
    //   }
    // }
  }
}
