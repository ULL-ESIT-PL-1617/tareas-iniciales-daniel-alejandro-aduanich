var gulp = require('gulp');
var ghpages = require('gh-pages');
var path = require('path');

gulp.task('gh-pages', function(){
	ghpages.publish(path.join(__dirname, 'dist'), function(err) {});
});

gulp.task('default', [ 'gh-pages' ]);
