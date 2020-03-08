const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

// Publishes the site to GitHub Pages
gulp.task('deploy', () => {
  console.log('Publishing to GH Pages');
  return gulp.src('./_book/**/*')
    .pipe($.ghPages({
      origin: 'origin',
      branch: 'gh-pages'
    }));
});