const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use('/', express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 9000));

const webpackDevMiddleware = require('webpack-dev-middleware');
app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
    chunks: false,
  },
  noInfo: true,
  publicPath: config.output.publicPath
}))

const webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackHotMiddleware(compiler));


app.listen(app.get('port'), (err) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${app.get('port')}`);
});
