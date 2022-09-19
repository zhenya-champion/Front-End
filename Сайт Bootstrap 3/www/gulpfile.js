const gulp = require('gulp'), // для вызова gulp 
minifyCSS = require('gulp-clean-css'), // минифицируем css
rename = require('gulp-rename'), // переименовываем
sass = require('gulp-sass')(require('sass')), // из sass в css
minifyJS = require('gulp-minify'), // минифицируем js
browserSync = require('browser-sync').create() // автообновление

gulp.task('minCSS', async function(){
    gulp.src('app/css/main.scss') // откуда берем
    .pipe(sass())  // из sass в css
    .pipe(minifyCSS()) // минифицируем
    .pipe(rename({ // переименовываем
        suffix: '.min'
    }))
    .pipe(gulp.dest('public/css')) // перемещаем
    .pipe(browserSync.stream()) // передает всё в browsersync
})

gulp.task('minJS', async function(){
    gulp.src('app/js/*.js') // откуда берем
    .pipe(minifyJS()) // минифицируем
    .pipe(gulp.dest('public/js')) // перемещаем
    .pipe(browserSync.stream()) // передает всё в browsersync
})

gulp.task("watchAll", function(){ // отслеживаеи изменение scss и js
    gulp.watch('app/css/*.scss', gulp.series("minCSS"))
    gulp.watch('app/js/*.js', gulp.series("minJS"))
})

gulp.task('browserSync', function(){
    browserSync.init({ // инициализация
        server: 'public/' // указываем какую папку отображаем на сервере
    })

    gulp.watch('public/*.html').on('change', // отслеживаеи изменение всех html
    browserSync.reload) // обновляет страницу
})

gulp.task('default', gulp.parallel('browserSync', 'watchAll')) // параллельный запуск watchall и browsersync