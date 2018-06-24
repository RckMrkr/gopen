const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    cli: './src/cli.js'
  },
  target: 'node',
  mode: "production",
  devtool: false,
  plugins: [
    new webpack.BannerPlugin({
      banner: "#! /usr/bin/env node",
      raw: true,
      entryOnly: true
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};