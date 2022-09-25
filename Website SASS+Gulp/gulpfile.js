const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename'); // Переименовываем
const browserSync = require('browser-sync').create(); // Браузер sync
const autoprefixer = require('gulp-autoprefixer'); // Автопрефиксер для браузеров

//Автопрефиксер
gulp.task('sassToCSS', function (){
  return gulp.src('app/scss/*.scss')
  .pipe(sass({
    errorLogToConsole: true,
  }))
  .on('error', console.error.bind(console))
  .pipe(autoprefixer({  // Ставим префикс
    overrideBrowserslist: ['last 20 version'],
    cascade: false
    }))
  .pipe(cleanCSS()) // Минифиируем CSS
  .pipe(rename({suffix: '.min'})) // Переименовываем
  .pipe(gulp.dest('public/css'));
});

// Браузер sync (Автоматическре обновление)
gulp.task('serve', function(){
  browserSync.init({
    server: 'public'
  });
  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

//отслеживание изменений в scss
gulp.task('watchFiles', function(){
  gulp.watch('app/scss/*.scss', gulp.series('sassToCSS'));
});
//что вызываем парралельно
gulp.task('default', gulp.parallel('watchFiles', 'serve'));
