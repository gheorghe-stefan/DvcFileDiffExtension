const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const outputPath = 'dist';
module.exports = {
  mode: 'development', // Use 'production' for production builds
  entry: {
    background: path.resolve(__dirname, 'src', 'background.ts'),
    main: path.resolve(__dirname, 'src', 'main.ts'),
  },
  output: {
    path: path.join(__dirname, outputPath),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Match TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' }, // Copy everything from 'public' to 'dist'
        // Adjust the 'from' path according to your project structure
      ],
    }),
  ],
};