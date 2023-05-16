var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass')(require('sass'));

gulp.task('style', async function () {
    return gulp.src('project/main.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(prefix('last 2 versions'))
            .pipe(concat('test.css'))
            .pipe(gulp.dest('dist'));
});


gulp.task('scripts', async function () {
    return gulp.src('project/js/*.js')
            .pipe(concat('all.js'))
            .pipe(gulp.dest('dist'));
})