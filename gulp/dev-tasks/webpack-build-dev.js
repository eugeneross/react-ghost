'use strict';

let gulp             = require('gulp'),
    gutil            = require('gulp-util'),
    webpack          = require('webpack'),
    webpackDevConfig = require('./../../webpack.dev.config.js');

let devCompiler = webpack(webpackDevConfig);

gulp.task('webpack:build-dev', ['styles'], function(callback) {
  devCompiler.run(function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build-dev', err);
    }
    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true
    }));
    callback();
  });
});
