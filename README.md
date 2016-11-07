# Bitmade Boilerplate 3.0

The boilerplate includes SCSS compiling, ES6 and React support for compiling assets.
It also compiles Twig templates and serves them via a local Express server.

## Scripts

- `npm run dev` - Start development server and serve temporary assets
- `npm run dev-fs` - Start development server and write assets to filesystem
- `npm run build` - Compile and minify assets to filesystem
- `npm run export` - Compile and minify assets and templates to filesystem

## Overwrite or extend webpack.config.js

To change the Webpack configuration use `webpack-config` or similar packages.

Here is an example using `webpack-config` version 4.

```
var WebpackConfig = require('webpack-config').default;

// Get the configuration exposed by the dev-tools package.
var config = new WebpackConfig().extend('@bitmade/dev-tools/webpack.config.js');

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
```
