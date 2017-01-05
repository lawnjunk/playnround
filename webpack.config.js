'use strict';

const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/entry.js`,
  devtool: 'eval',
  plugins: [
    new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
    new ExtractText('[hash].css'),
  ],
  output: {
    path: 'build',
    filename: '[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass!'),
      },
    ],
  },
  
};
