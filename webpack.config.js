var webpack = require('webpack');
var path = require('path');
module.exports = {
  cache: true,
  entry: {
    main: './js/main.js',
  },
  output: {
    path: './',
    filename: 'js/[name].js',
  },
  devServer: {
      inline: true,
      port: 8080
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