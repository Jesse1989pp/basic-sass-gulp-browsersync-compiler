var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps');

// The settings are filled with example paths. These need to be changed
var settings = {
  sassDir: './includes/scss',
  cssDir: './includes/css',
  extraPaths: [
    './bower_components/foundation-sites/scss',
    './bower_components/motion-ui'
  ],
  proxyPath: "local.website.com"
};


gulp.task('serve', ['sass'], function() {

  browserSync.init({
    proxy: settings.proxyPath
  });

  gulp.watch([settings.sassDir + '/*.scss'], ['sass']);

});

gulp.task('sass', function() {
  return gulp.src(settings.sassDir + '/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: settings.extraPaths
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(settings.cssDir))
    .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);
