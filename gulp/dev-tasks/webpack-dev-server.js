'use strict';

let gulp             = require('gulp'),
    gutil            = require('gulp-util'),
    touch            = require('touch'),
    webpack          = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackDevConfig = require('./../../webpack.dev.config.js'),
    path             = require('path');



let devServer = {};

gulp.task('webpack-dev-server', function(callback) {
  touch.sync('./public/main.css', {
    time: new Date(0)
  });

  devServer = new WebpackDevServer(webpack(webpackDevConfig), {
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '../node_modules/ghost/content/data/ghost-dev.db')
      },
      debug: false
    },
    contentBase: path.join(__dirname, 'public/default.hbs'), //serves content from this dir, but that's ok becuase we symlink'd it
    hot: true,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 100,
      poll: 300
    },
    noInfo: true
  });

  devServer.listen(2368, '0.0.0.0', function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://localhost:2368');
    return callback();
  });

});
