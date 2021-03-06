const prod = process.env.NODE_ENV === 'production',
  webpack = require('webpack'),
  path = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: {
    app: './scripts/app.js',
  },
  output: {
    path: path.resolve('/app/src/build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    compress: true,
    // hot: true,
    // inline: true,
    port: 8080,
    host: '0.0.0.0',
    overlay: true,
    publicPath: '/build/',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: prod,
      debug: !prod,
      options: {
        context: __dirname
      }
    })
  ],
};
