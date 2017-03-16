// Require all the things
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      gutil = require('gulp-util'),
      plumber = require('gulp-plumber'),
      rename = require('gulp-rename'),
      minifyCSS = require('gulp-clean-css'),
      prefixer = require('gulp-autoprefixer'),
      connect = require('gulp-connect');
      cp = require('child_process');
      sassLint = require('gulp-sass-lint');
      sourcemaps = require('gulp-sourcemaps');
      concat = require('gulp-concat');
      yaml = require('js-yaml');
      fs = require('fs');

// Set the path variables
const base_path = './',
      src = base_path + 'assets/_dev',
      dist = base_path + 'assets',
      paths = {
          js: src + '/js/*.js',
          scss: [ src +'/scss/*.scss',
                  src +'/scss/**/* .scss',
                  src +'/scss/**/**/*.scss'],
          jekyll: ['index.html', '_posts/*', '_layouts/*', '_includes/*' , 'assets/*', 'assets/**/*']
      };

// Load settings from settings.yml
const { INCLUDE } = loadConfig();
function loadConfig() {
  let ymlFile = fs.readFileSync(src + '/includepaths.yml', 'utf8');
  return yaml.load(ymlFile);
}

// Lint Sass.
gulp.task('sass-lint', () => {
    return gulp.src(paths.scss)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});


// Compile sass to css
gulp.task('compile-sass', () => {
  return gulp.src(paths.scss)
    .pipe(plumber((error) => {
        gutil.log(gutil.colors.red(error.message));
        gulp.task('compile-sass').emit('end');
    }))
    .pipe(sass())
    .pipe(prefixer('last 3 versions', 'ie 9'))
    .pipe(minifyCSS())
    .pipe(rename({dirname: dist + '/css'}))
    .pipe(gulp.dest('./'));
});

// Combine JavaScript into one file
gulp.task('combine-js', () => {
  return gulp.src(INCLUDE.js)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dist + '/js'));
});

// Rebuild Jekyll
gulp.task('build-jekyll', (code) => {
  return cp.spawn('jekyll', ['build', '--incremental'], { stdio: 'inherit' }) // Adding incremental reduces build time.
    .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
    .on('close', code);
})

// Setup Server
gulp.task('server', () => {
  connect.server({
    root: ['public'],
    port: 9002
  });
})

// Watch files
gulp.task('watch', () => {
  gulp.watch(paths.scss, ['compile-sass']);
  gulp.watch(paths.jekyll, ['build-jekyll']);
});

// Start Everything with the default task
gulp.task('default', [ 'compile-sass', 'combine-js', 'build-jekyll', 'server', 'watch' ]);
