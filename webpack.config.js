const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}