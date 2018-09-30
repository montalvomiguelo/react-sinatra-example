const path = require('path');

module.exports = {
  mode: 'development',
  entry: './javascript/packs/application.js',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, '../public/packs')
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
