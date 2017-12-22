const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const ENV = process.env.APP_ENV;
const isProd = ENV === 'prod';

const config = {
  devtool: 'source-map',
  entry: __dirname + '/src/app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          'eslint-loader'
        ],
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
    new ExtractTextPlugin('[name].[hash].css')
  ],
  devServer: {
    contentBase: './src/public',
    port: 7700,
    open: true
  }
};

if (isProd) {
  config.plugins.push(
    new UglifyJSPlugin()
  );
} else {
  config.plugins.push(
    new DashboardPlugin()
  )
}

module.exports = config;
