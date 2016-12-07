const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const pngcrush = require('imagemin-pngcrush')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')

gulp.task('default', ['sass', 'minify'])

gulp.task('minify', function () {
  return gulp.src('./static/assets/*.jpg')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('./static/assets/'))
})

gulp.task('sass', function () {
  return gulp.src('./static/sass/style.sass')
    .pipe(sass({style: 'compressed', sourcemap: false}))
    .pipe(prefix())
    .pipe(gulp.dest('./static/css'))
})
