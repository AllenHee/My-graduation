var webpack = require('webpack');
var path = require('path');
module.exports = {
  cache: true,
  entry: {
    index: './js/index.js',
    message: './js/message.js',
    fill: './js/fill.js',
  },
  output: {
    path: './',
    filename: 'js/[name].js',
  },
  devServer: {
      inline: true,
      port: 7000
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