var gulp = require('gulp');
var ghpages = require('gh-pages');
var path = require('path');
var shell = require('gulp-shell')


gulp.task('gitbook', shell.task('gitbook build'))

gulp.task('gh-pages', ['gitbook'], function(){
	ghpages.publish(path.join(__dirname, '_book'), {
    message: 'Auto update gh-pages branch'
  }, function(err) {});
});

gulp.task('default', ['gitbook', 'gh-pages' ]);
