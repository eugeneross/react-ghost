'use strict';

let gulp  = require('gulp'),

    gutil = require('gulp-util');


gulp.task('default', function() {
  return gulp.start('build');
});

gulp.task('build', ['webpack:build']);

gulp.task('watch', ['ghost'],
  function() {
    gulp.watch(['src/styles/**'], ['styles']);
  gulp.watch(['./public' + '/**/*.hbs'], ['webpack-dev-server']);//['ghost']); might need to be in the symlink task?
});
