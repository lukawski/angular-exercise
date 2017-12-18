const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: __dirname + '/src/app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/public/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('styles.css'),
    new DashboardPlugin()
  ],
  devServer: {
    contentBase: './src/public',
    port: 7700
  }
};
