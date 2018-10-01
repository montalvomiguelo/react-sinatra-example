const path = require('path');
const postcssImportResolve = require('postcss-import/lib/resolve-id');
const globby = require('globby');

module.exports = {
  plugins: {
    'postcss-preset-env': {},
    'postcss-import': {}
  }
}
