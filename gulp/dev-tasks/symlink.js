var gulp       = require('gulp'),
    //p          = require('p'),
    symlink    = require('gulp-sym');

gulp.task('symlink', function () {
  return gulp
    .src('./public')
    .pipe(symlink('node_modules/ghost/content/themes/cw-ghost', { force: true }));
});
