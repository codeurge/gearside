import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: './index.js',
  publicPath: './public/',
  output: { path: __dirname + '/', filename: 'bundle.js' },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
};
