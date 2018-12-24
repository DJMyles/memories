var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('default', function(){
  return gulp.src('scss/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css/'))
});
