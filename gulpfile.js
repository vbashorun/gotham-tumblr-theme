const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileCss() {
  return src('./css/gotham.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
}

// **** The following function needs to be converted to Gulp 4 syntax
// gulp.task('sass:watch', function () {
//   gulp.watch('./css/**/*.scss', ['compileCss']);
// });

// function watchCss() {
//   watch('./css/**/*.scss', ['compileCss']);
// }


exports.build = series(compileCss);
