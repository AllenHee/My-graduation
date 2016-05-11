const webpack = require('webpack');
const config = require('./webpack.config.js');

config.module.loaders[2].loader = 'file?name=img/uc/[name].[ext]?[hash:7]';

config.devtool = 'source-map';

module.exports = config;
