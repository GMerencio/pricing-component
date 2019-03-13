const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/js/index.js'
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
       test: /\.(s*)css$/,
       use: [
         'style-loader',
         'css-loader',
         'postcss-loader',
         'sass-loader'
       ]
     },
     {
       test: /\.(png|svg|jp(e?)g|gif)$/,
       use: [{
        loader: 'file-loader',
        options: {
          name: '[name]test.[ext]',
          outputPath: 'img/',
          publicPath: 'img/'
        }
       }]
     }
    ]
  }
};