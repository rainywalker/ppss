/**
 * Created by jaelomin on 2016. 1. 14..
 *
 */


var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');


gulp.task('uglify', function(){
    gulp.src(['js/dist/bundle.js'])
        .pipe(plumber({errorHandler : onError}))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('js/dist'))

});

var onError = function(err) {
    console.log(err)
};