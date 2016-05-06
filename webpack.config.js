var webpack = require('webpack');
var path = require('path');

module.exports = {
  // cache: true,
  entry: {
    index: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/js/index.js'],
    message: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/js/message.js'],
    fill: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/js/fill.js']
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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
