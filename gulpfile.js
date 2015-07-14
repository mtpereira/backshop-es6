var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('compileJs', compileJs);
gulp.task('watch', function() {
  gulp.watch('src/*.js', compileJs);
});

gulp.task('default', ['compileJs', 'watch']);

/**************** PROTECTED ****************/

function compileJs() {
  gulp.src('src/*.js')
      .pipe(babel())
      .pipe(gulp.dest('dist'));
}
