const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './src/2017/day8/graph'),
  target: 'web',
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  }
}