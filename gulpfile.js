var postcss = require('gulp-postcss');
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');

gulp.task('default', function(){
  return gulp.src('scss/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('css/'))
});
