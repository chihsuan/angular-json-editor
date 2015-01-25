var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
    //single entry point to browserify
    gulp.src(['lib/angular.json.editor.js'])
        .pipe(browserify({
          shim: {
            angular: {
                path: './bower_components/angular/angular.js',
                exports: 'angular'
            },
            'angular-route': {
                path: './bower_components/angular-route/angular-route.js',
                exports: "angular.module('ngRoute')",
                depends: {
                    angular: 'angular'
                }
            },
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
