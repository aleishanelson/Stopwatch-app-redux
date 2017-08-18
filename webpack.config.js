const path = require('path')

const sourcePath = path.resolve(__dirname, './app')
const outputPath = path.resolve(__dirname, './dist')

module.exports = {
  context: sourcePath,
  entry: {
    app: './index.js'
  },
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    port: 3000
  }
}
