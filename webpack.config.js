const webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './scripts/app.js',
      './scss/style.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, './public/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./style.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      options: {
        context: __dirname
      }
    })
  ]
};
