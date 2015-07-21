
// gulpfile.js

// Base setup
// =============================================================================
var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    less    = require('gulp-less'),
    jade    = require('gulp-jade'),
    rename  = require('gulp-rename');

// Folders
var src = 'app/';

// Build tasks
// =============================================================================

// Build Jade files
gulp.task('jade', function() {
  return gulp.src([
      src + 'views/home.jade'
    ])
    .pipe(jade())
    .pipe(gulp.dest(''));
});

// Concatenate and minify JS
gulp.task('build-js-production', function() {
  return gulp.src([
      src + 'js/lib/**/*.js',
      src + 'js/home.js'
    ])
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('build-js-dev', function() {
  return gulp.src([
      src + 'js/lib/**/*.js',
      src + 'js/home.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js/'));
});

// Build .less files
gulp.task('less', function() {
  return gulp.src([
      src + 'css/@ClientStyles.less'
    ])
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('css/'));
});

// Set up watchers
// =============================================================================
gulp.task('watch', function() {
  // Watch .jade files
  gulp.watch(src + 'views/*.jade', ['jade']);

  // Watch .js files
  gulp.watch(src + 'js/*.js', ['build-js-dev', 'build-js-production']);

  // Watch .less files
  gulp.watch(src + 'css/*.less', ['less']);
});

// Default task
// =============================================================================
gulp.task('default', ['jade', 'build-js-dev', 'build-js-production', 'less', 'watch']);
