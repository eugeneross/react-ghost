var gulp        = require('gulp'),
    //p           = require('p'),
    replace     = require('gulp-replace');

gulp.task('init', ['symlink'], function () { // when you run 'gulp init', the init task triggers, which then triggers 'symlink'
  return gulp
    .src('node_modules/ghost/core/server/data/default-settings.json', {base : './'})
    .pipe(replace(/Casper/g, 'cw-ghost'))
    .pipe(gulp.dest('./'));
});
