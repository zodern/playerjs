var fs = require('fs');
var webpack = require('webpack');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './entry.js',
  target: 'node',
  output: {
    path: './output',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.proto?$/,
      loader: 'raw'
    },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();',
      { raw: true, entryOnly: false })
  ],
  devtool: 'sourcemap',
  externals: nodeModules
};