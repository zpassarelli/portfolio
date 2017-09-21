var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public/build');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        include: APP_DIR + '/media/',
        options: {
          publicPath: './build/'
        }
      }
    ]
  }
};

module.exports = config;
