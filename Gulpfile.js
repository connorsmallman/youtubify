var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var hbsfy = require('hbsfy');

gulp.task('bundle', function () {
    var options;

    options = {
        debug: true
    };

    hbsfy.configure({
        extensions: ['hbs']
    });

    browserify('./src/app.js', options)
        .transform(hbsfy)
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(gulp.dest('dist/public/js'));
    });

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.js', './src/**/*.hbs'], ['bundle']);
});

gulp.task('default', ['bundle', 'watch']);