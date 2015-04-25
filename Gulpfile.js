var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var hbsfy = require('hbsfy');

gulp.task('start', function () {
  nodemon({
    script: 'server.js', 
    tasks: ['watch'],
    ext: 'js html hbs'
  });
});

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

gulp.task('default', ['bundle', 'start']);