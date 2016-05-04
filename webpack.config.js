var webpack = require('webpack');
var path = require('path');

module.exports = {
  // cache: true,
  entry: {
    index: ['webpack-hot-middleware/client?noInfo=true&reload=true', './js/index.js'],
    message: ['webpack-hot-middleware/client?noInfo=true&reload=true', './js/message.js'],
    fill: ['webpack-hot-middleware/client?noInfo=true&reload=true', './js/fill.js']
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
      }
    ]
  },
}
