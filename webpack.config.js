module.exports = {
  entry: './entry.js',
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
  devtool: '#inline-source-map'
};