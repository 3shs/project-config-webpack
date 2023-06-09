const { Configuration } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const { title } = require('process')

/**
 * @type {Configuration} // 配置提醒
 */
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'static/js/[name].js',
    path: resolve(__dirname, '../dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: '/',
      template: './public/index.html'
    })
  ]
}
