const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js',  // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Apply babel-loader to .js and .jsx files
        exclude: /node_modules/,  // Exclude node_modules directory
        use: {
          loader: 'babel-loader',  // Use Babel loader
        },
      },
      {
        test: /\.css$/,  // CSS handling for style-loader and css-loader
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Auto-resolve file extensions for .js and .jsx
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Path to your HTML template
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),  // Dev server will serve files from 'dist'
    hot: true,  // Enable hot reloading
  },
};
