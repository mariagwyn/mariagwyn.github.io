var browserSync = require('browser-sync');
var config      = require('../util/loadConfig').watch;
var gulp        = require('gulp');

// Watch files for changes, recompile/rebuild and reload the browser
gulp.task('watch', function() {
  gulp.watch(config.pages, ['build', browserSync.reload]);
//  gulp.watch(config.javascript, ['javascript', browserSync.reload]);
  // No browser reload needed here, browserSync injects the stylesheet into browsers
  gulp.watch(config.sass, ['lint', 'sass']);
  gulp.watch(config.media, ['optimize-images', 'copy', browserSync.reload]);
});
