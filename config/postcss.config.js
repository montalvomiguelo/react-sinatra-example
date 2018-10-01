const path = require('path');
const postcssImportResolve = require('postcss-import/lib/resolve-id');
const globby = require('globby');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      preserve: false,
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
    }
  }
}
