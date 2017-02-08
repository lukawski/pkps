var gulp = require('gulp')
var uglify = require('gulp-uglify')
var cleanCSS = require('gulp-clean-css')
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat')

gulp.task('default', ['js', 'img', 'css'], function () {
  return true
})

gulp.task('css', function () {
  return gulp.src('./src/css/**/*.css')
    .pipe(concat('bundle.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('js', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('img', function () {
  return gulp.src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
})

gulp.task('watch', ['js', 'css'], function () {
  gulp.watch('./src/js/*.js', ['js'])
  gulp.watch('./src/css/*.css', ['css'])
})
