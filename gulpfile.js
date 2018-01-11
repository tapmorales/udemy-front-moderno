var gulp        = require('gulp')
,   sass        = require('gulp-sass')
,   browserSync = require('browser-sync')
,   include     = require('gulp-file-include');

gulp.task('sass', function(){
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));    
});

gulp.task('bosta', function(){
    gulp.src('./src/index.html')
        .pipe(include())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })

    gulp.watch('./src/**/*').on('change', browserSync.reload);

    gulp.watch('./src/sass/**/*.scss', ['sass']);


});