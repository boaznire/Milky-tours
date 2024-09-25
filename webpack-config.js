const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,   // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',   // Use babel-loader for JSX and JS
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']   // Resolve .js and .jsx files
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Where dev server serves files from
    hot: true   // Enable Hot Module Replacement
  }
};
