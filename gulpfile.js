// Require all the things
const gulp = require('gulp'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  cp = require('child_process'),
  fs = require('fs'),
  gutil = require('gulp-util'),
  imagemin = require('gulp-imagemin'),
  minifyCSS = require('gulp-clean-css'),
  plumber = require('gulp-plumber'),
  prefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  sassLint = require('gulp-sass-lint'),
  sourcemaps = require('gulp-sourcemaps'),
  uncss = require('gulp-uncss'),
  yaml = require('js-yaml');

// Set the path variables
const base_path = './',
      src = base_path + 'assets/_dev',
      dist = base_path + 'assets',
      paths = {
          js: src + '/js/*.js',
          scss: [ src +'/scss/*.scss',
                  src +'/scss/**/*.scss',
                  src +'/scss/**/**/*.scss'],
          img:  [ src + '/imgs/*.jpg',
                  src + '/imgs/*/*.*',
                  src + '/imgs/*/*/*.*'],
          jekyll: ['index.html', '_posts/*', '_layouts/*', '_includes/*' , 'assets/*', 'assets/**/*']
      };

// Load settings from settings.yml
const { INCLUDE, UNCSS_OPTIONS } = loadConfig();
function loadConfig() {
  let ymlFile = fs.readFileSync(src + '/build_settings.yml', 'utf8');
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
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefixer('last 3 versions', 'ie 9'))
    .pipe(minifyCSS())
    .pipe(rename({dirname: dist + '/css'}))
    .pipe(gulp.dest('./'));
});

// UnCSS.
gulp.task('uncss', () => {
    return gulp.src(dist + '/css/style.css')
    .pipe(uncss(UNCSS_OPTIONS))
    .pipe(gulp.dest(dist + '/css/'));
});

// Combine JavaScript into one file
gulp.task('combine-js', () => {
  return gulp.src(INCLUDE.js)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dist + '/js'));
});

gulp.task('optimize-images', () => {
  return gulp.src(paths.img)
    .pipe(imagemin())
    .pipe(gulp.dest(dist + '/images'));
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
  gulp.watch(paths.scss, ['sass-lint']);
  gulp.watch(paths.scss, ['compile-sass']);
  gulp.watch(paths.scss, ['uncss']);
  gulp.watch(paths.js, ['combine-js']);
  gulp.watch(paths.imgs, ['optimize-images']);
  gulp.watch(paths.jekyll, ['build-jekyll']);
});

// Start Everything with the default task
gulp.task('default', [ 'sass-lint', 'compile-sass', 'uncss', 'combine-js', 'optimize-images', 'build-jekyll', 'server', 'watch' ]);
