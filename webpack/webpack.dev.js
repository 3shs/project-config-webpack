const webpack = require('webpack')
const { Configuration } = webpack
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('path')

/**
 * @type {Configuration} // 配置提醒
 */

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      // 处理 .css 文件
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 处理 .sass/scss 文件
      {
        test: /\.s[ac]ss$/,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          {
            loader: 'sass-loader',
            // 配置全局可用的scss文件
            options: {
              additionalData: `@import "@/assets/styles/theme.scss";`
            }
          }
        ],
      },
      // 处理.vue 文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // 处理.ts 文件
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader"
        }
      },
      // 处理图片
      {
        test: /\.(png|svg|jpe?g|gif|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于40kb的图片会被base64处理
          }
        }
      },
      // 处理字体图标
      {
        test: /\.(woff2?|ttf)$/,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    // 处理html文件
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // 处理.vue文件
    new VueLoaderPlugin(),
    // 处理控制台 Warning
    new webpack.DefinePlugin({
      // 禁用Vue Options API
      __VUE_OPTIONS_API__: true,
      // 禁用生产环境 DevTools
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  // 本地服务
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 10000
  },
}
