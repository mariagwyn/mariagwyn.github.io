var gulp          = require('gulp');
var sequence      = require('run-sequence');

gulp.task('default', function(done) {
  sequence('build', 'server', 'browser-sync', 'watch', done);
});
