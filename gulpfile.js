var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less');

var src = 'app/';

// Concatenate and minify JS
gulp.task('build-js-production', function() {
  return gulp.src([src + 'js/lib/**/*.js', src + 'js/home.js'])
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(''));
});

gulp.task('build-js-dev', function() {
  return gulp.src([src + 'js/lib/**/*.js', src + 'js/home.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(''));
});

// Build LESS files
gulp.task('less', function() {
  return gulp.src([src + 'css/home.less', src + 'css/responsiveStyles.less'])
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(''));
});

// Watch for changes in files
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch(src + 'js/*.js', ['build-js']);
});

// Default task
gulp.task('default', ['build-js-dev', 'watch']);
