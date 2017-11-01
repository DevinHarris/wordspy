const gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', () => {
   return gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
    console.log('working!');
    gulp.watch('./sass/**/*.scss', ['sass']);
});