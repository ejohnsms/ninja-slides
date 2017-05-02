const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: {
    app: './src/app.js',
    spec: './test/app.Spec.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'test')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
            options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: 'eslint-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],
  resolve: {
      extensions: [".js"],
      modules: [
          __dirname,
          path.resolve(__dirname, "./node_modules")
      ]
  }
  // this works but do we need this if karma is watching
  // watch: true
};

module.exports = config;
