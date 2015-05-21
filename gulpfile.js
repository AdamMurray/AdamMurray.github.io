var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    rename = require('gulp-rename');

var src = 'app/';

// Build Jade files
gulp.task('jade', function() {
  return gulp.src([src + 'views/home.jade', src +  'views/showcase.jade'])
    .pipe(jade())
    .pipe(gulp.dest(''));
});

// Concatenate and minify JS
gulp.task('build-js-production', function() {
  return gulp.src([src + 'js/lib/**/*.js', src + 'js/home.js', src + 'js/showcase.js'])
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(''));
});

gulp.task('build-js-dev', function() {
  return gulp.src([src + 'js/lib/**/*.js', src + 'js/home.js', src + 'js/showcase.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(''));
});

// Build LESS files
gulp.task('less', function() {
  return gulp.src([src + 'css/styles.less', src + 'css/responsiveStyles.less'])
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(''));
});

// Watch for changes in files
gulp.task('watch', function() {
  // Watch .jade files
  gulp.watch(src + 'views/*.jade', ['jade']);

  // Watch .js files
  gulp.watch(src + 'js/*.js', ['build-js-dev', 'build-js-production']);

  // Watch .less files
  gulp.watch(src + 'css/*.less', ['less']);
});

// Default task
gulp.task('default', ['jade', 'build-js-dev', 'build-js-production', 'less', 'watch']);
