var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // cache: true,
  entry: {
    index: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/js/index.js'],
    message: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/js/message.js'],
    fill: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/js/fill.js'],
    admin: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/js/admin.js']
  },
  output: {
    path: '/',
    publicPath: '/',
    filename: 'js/[name].js',
  },
  externals: [
    {
      jquery: 'window.jQuery'
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
         }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['url?limit=10000&name=img/uc/[name].[ext]?[hash:7]']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
