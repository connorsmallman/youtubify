var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function () {
  gulp.src('./src/app.js')
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify', 'watch']);