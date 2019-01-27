const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dashbird-graph.min.js',
    path: path.resolve(__dirname, 'dist')
  }
};