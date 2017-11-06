require('babel-polyfill');
require('babel-register')({
  "presets": ["env"]
});

require('./index.js');
