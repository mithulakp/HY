var gulp = require('gulp');
var sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('sass', function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass())
        /* .pipe(gulp.dest('./src/css'))
        .pipe(gulp.dest('../../dist/css/'))*/
        .pipe(gulp.dest('./dist/css/'))

});