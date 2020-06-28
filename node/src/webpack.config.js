const prod = process.env.NODE_ENV === 'production',
  webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: {
    app: [
      './scripts/app.js',
      './scss/style.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, './build/'),
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
      minimize: prod,
      debug: !prod,
      options: {
        context: __dirname
      }
    })
  ],
  watchOptions: {
    aggregateTimeout: 2000,
    poll: 2000
  }
};
