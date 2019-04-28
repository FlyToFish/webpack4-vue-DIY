const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const webpack = require('webpack');
const projectConfig = require('./project.config')
module.exports = env => ({
  mode: env.production ? 'production' : 'development',
  entry: {
    app: "./src/index.js",
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'] // +++
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: projectConfig.projectsTitle,
      favicon: projectConfig.projectIconPath,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '_.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}); 
