var WebpackConfig = require('webpack-config');

// Get the configuration exposed by the dev-tools package.
var config = new WebpackConfig().extend('bitmade-dev-tools/config');

// If keys need to be deleted from the original configuration use a code like this.
//
// var config = new WebpackConfig().extend('bitmade-dev-tools/config', {
//   'bitmade-dev-tools/config': function (config) {
//     delete config.entry;
//     return config;
//   }
// });

// To add or overwrite options use the merge() function like this.
//
// config.merge({
//   entry: 'path/to/app.js'
// });

module.exports = config;
