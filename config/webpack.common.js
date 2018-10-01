const path = require('path');

module.exports = {
  entry: './javascript/packs/application.js',
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, '../public/packs'),
    publicPath: '/packs/'
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  }
};
