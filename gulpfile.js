var gulp = require('gulp');
var baked = require('baked/gulp');
var potato = require('potato.js');
require('./helpers.js');
helpers.potato = potato;

baked.init({
  options: {
    srcDir: 'src'
  }
});

gulp.task('serve', ['baked:serve']);
gulp.task('default', ['baked:default']);
gulp.task('clean', ['baked:clean']);
