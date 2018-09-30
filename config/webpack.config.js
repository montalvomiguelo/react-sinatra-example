const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './javascript/packs/application.js',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../public/packs'),
    publicPath: '/packs/',
    compress: true,
    port: 3035,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, '../public/packs'),
    publicPath: '/packs/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
