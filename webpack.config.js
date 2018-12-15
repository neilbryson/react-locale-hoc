const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'react-locale-hoc.js',
    libraryTarget: 'commonjs2',
    path: path.resolve('dist')
  }
};
