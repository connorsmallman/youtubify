var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');
var hbsfy = require('hbsfy');

gulp.task('start', function () {
  nodemon({
    script: 'server.js', 
    tasks: ['watch'],
    ext: 'js html hbs'
  });
});

gulp.task("less", function () {
    gulp.src("./src/assets/less/main.less")
        .pipe(less({
            paths: [
                "./bower_components/font-awesome/less/",
                "./bower_components/bootstrap-less/less/"
            ]
        }))
        .pipe(gulp.dest("./dist/public/stylesheets"));
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
  gulp.watch(['./src/assets/**/*.less'], ['less']);
});

gulp.task('default', ['bundle', 'less', 'start']);