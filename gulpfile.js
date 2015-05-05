var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    inlineCss = require('gulp-inline-css'),
    rename = require('gulp-rename');

var src = 'app/';

// Build Jade files
gulp.task('jade', function() {
  return gulp.src(src + 'views/home.jade')
    .pipe(jade())
    .pipe(rename({ prefix: '_' }))
    .pipe(gulp.dest(''));
});

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

// Inline CSS in HTML files
gulp.task('inline-css', function() {
  return gulp.src('_*.html')
    .pipe(inlineCss())
    .pipe(rename({
      prefix: 'inline'
    }))
    .pipe(gulp.dest(''));
});

// Watch for changes in files
gulp.task('watch', function() {
  // Watch .jade files
  gulp.watch(src + 'views/*.jade', ['jade', 'inline-css']);

  // Watch .js files
  gulp.watch(src + 'js/*.js', ['build-js']);

  // Watch .less files
  gulp.watch(src + 'css/*.less', ['less']);
});

// Default task
gulp.task('default', ['jade', 'inline-css', 'build-js-dev', 'build-js-production', 'less', 'watch']);
