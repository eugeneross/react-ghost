var gulp        = require('gulp'),
    //p           = require('p'),
    ghost       = require('ghost'),
    runSequence = require('run-sequence').use(gulp);
    path        = require('path');
var    webpack          = require('webpack');
var    WebpackDevServer = require('webpack-dev-server');
var    webpackDevConfig = require('./../../webpack.dev.config.js');


var g;

gulp.task('ghost', function (callback) {

    g = ghost({
        config: path.join(__dirname, '../ghost-dev-config.js')
    });

    g.then(function (ghostServer) {
        ghostServer.start().then(function () {
          runSequence('webpack-dev-server', 'styles');
        });
    });

    callback();
});
