var webpack = require('webpack');

var config = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: __dirname + '/src',
        exclude: "/node_modules/",
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.(jpg|png|svg|mp4)$/,
        loader: 'file-loader',
        include: __dirname + '/src/media',
        options: {
          publicPath: '/build/'
        }
      }
    ]
  }
};

module.exports = config;
