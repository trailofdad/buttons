var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('./scss/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  });
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('./scss/style.scss', ['sass']); 
  // Other watchers
});

