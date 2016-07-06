'use strict';

let gulp              = require('gulp'),
    gutil             = require('gulp-util'),
    webpack           = require('webpack'),
    webpackProdConfig = require('./../../webpack.prod.config.js');

gulp.task('webpack:build', ['styles'], function(callback) {
  return webpack(webpackProdConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});
