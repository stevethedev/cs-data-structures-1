var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename'),
    concat  = require('gulp-concat');

gulp.task('default', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('cs-data-structures-1.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
