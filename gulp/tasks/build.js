var gulp          = require('gulp');
const { series } = require('gulp');

gulp.task('build', function(done) {
    series('clean', 'jekyll-build');
    done();
});
