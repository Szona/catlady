var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var minify = require('gulp-minify');

gulp.task('sass', function() {
  return gulp.src('scss/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
      outputStyle: 'expanded', //nested compact compressed expanded
      errLogToConsole: true}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'));
});

gulp.task('watch', ['sass'], function(){
  gulp.watch('scss/**/*.scss', ['sass']);
});
