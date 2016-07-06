var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
  'webpack-dev-server/client?http://localhost:2368',
    'webpack/hot/only-dev-server',
    './src/router'
  ],
  devtool: 'eval',
  debug: true,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    //publicPath: '/static/'

  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './public/default.hbs',
      //hash: true,
      inject: 'body',
      filename: 'default.hbs'
    })

  ],
  resolve: {
    extensions: ['', '.js', '.sass', '.css', '.hbs']
  },
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    },
    // CSS
    {
      test: /\.sass$/,
      include: path.join(__dirname, 'src'),
      loader: 'style-loader!css-loader!sass-loader'
    },
    // handlebars
    {
      test: /\.hbs$/,
      include: path.join(__dirname, 'public'),
      loader: 'handlebars-template-loader'
    }
    ]
  },
  node: {
    fs: 'empty'
  }
};

//module.exports = config.dev;
