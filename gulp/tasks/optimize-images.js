var $             = require('gulp-load-plugins')();
var browserSync   = require('browser-sync');
var config        = require('../util/loadConfig').images;
var gulp          = require('gulp');
var isProduction  = require('../util/isProduction');
var imagemin      = require('gulp-imagemin');


// Optimize Images.
browserSync.notify(config.notification);

gulp.task('optimize-images', function() {
  return gulp.src(config.src)
    .pipe(imagemin())
    // Write the file to source dir and build dir
    .pipe(gulp.dest(config.dest.jekyllRoot))
    .pipe(gulp.dest(config.dest.buildDir));
});
