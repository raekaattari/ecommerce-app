const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/create-payment-intent': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '^/create-payment-intent': '/create-payment-intent' },
      },
    },
  }
})

