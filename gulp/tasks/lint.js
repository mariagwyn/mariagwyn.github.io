var $             = require('gulp-load-plugins')();
var browserSync   = require('browser-sync');
var config        = require('../util/loadConfig').sass;
var gulp          = require('gulp');
var isProduction  = require('../util/isProduction');
var sassLint = require('gulp-sass-lint');


// Lint Sass.
browserSync.notify(config.notification);

gulp.task('lint', function() {
  return gulp.src(config.src)
    .pipe($.sourcemaps.init())
    .pipe($.sassLint())
    .pipe(sassLint.format())
});
