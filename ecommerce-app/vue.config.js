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
  },
  outputDir: 'dist',
  configureWebpack: {
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
    },
  },
  chainWebpack: config => {
    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    });
  },
});
