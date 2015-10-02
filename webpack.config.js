var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/js/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname, 'client/css')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
};