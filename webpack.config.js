const webpack = require('webpack');
const path = require('path');
const CLIENT_DIR = path.resolve(__dirname, './client'); // created to seperate web app css from monaco css
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve('./client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,

        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        include: CLIENT_DIR,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        include: MONACO_DIR,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  devServer: {
    publicPath: '/build',
    contentBase: './',
    proxy: {
      context: ['/api/user', '/login', '/signup', '/logout'],
      target: 'http://localhost:3000',
      secure: false,
      port: 8080,
      hot: true
    }
  }
};