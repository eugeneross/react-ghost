'use strict';

let gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass  = require('gulp-sass');


gulp.task('styles', function () {
  return gulp
    .src(['src/styles/*.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
});
