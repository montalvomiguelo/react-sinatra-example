const paths = require('./paths');

const jsFilename = 'application.js';

module.exports = {
  entry: paths.appIndexJs,
  output: {
    filename: jsFilename,
    path: paths.appBuild,
    publicPath: paths.servedPath
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  }
};
