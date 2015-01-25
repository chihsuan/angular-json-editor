var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
    //single entry point to browserify
    gulp.src(['lib/angular.json.editor.js'])
        .pipe(browserify({
          shim: {
            jsoneditor: {
              path: './vendors/jsoneditor.min.js',
              exports: "jsoneditor"
            }
          }
        }))
        .pipe(gulp.dest('./lib/dist/'))
});

gulp.task('watch', function () {
  gulp.watch('./lib/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
