var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var pngcrush    = require('imagemin-pngcrush');
var runSequence = require('run-sequence');
var sass        = require('gulp-ruby-sass')
var prefix = require('gulp-autoprefixer');

gulp.task('default', function() {
  return runSequence('sass',
    'minify');
});

gulp.task('minify', function () {
  return gulp.src('./static/assets/*.jpg')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('./static/assets/'));
});

gulp.task('sass', function () {
  return gulp.src('./static/sass/style.sass')
    .pipe(sass({style: 'compressed', sourcemap: false}))
    .pipe(prefix())
    .pipe(gulp.dest('./static/css'));
});
