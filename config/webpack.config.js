const path = require('path');

module.exports = {
  entry: './javascript/packs/application.js',
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, '../public/packs')
  }
};
