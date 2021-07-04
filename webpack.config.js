require("babel-register");

const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
      main: ['core-js/features/promise','./src/index']
    },
    // Loaders
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: '[name].bundle.js'
    }
};
