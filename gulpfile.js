const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const srcmap       = require('gulp-sourcemaps');
const uglify       = require('gulp-uglify');
const imgmin       = require('gulp-imagemin');
const watch        = require('gulp-watch');
const concat       = require('gulp-concat');
const fs           = require('fs');
const path         = require('path');

// Styles
gulp.task('sass', () => {
  gulp.src('./src/sass/**/*.scss')
    .pipe(srcmap.init())
    .pipe(sass({
      "outputStyle": "compressed"
    }))
    .pipe(autoprefixer({
      "browsers": ['last 2 versions'],
      "cascade": false
    }))
    .pipe(srcmap.write('.'))
    .pipe(gulp.dest('./dist/css/'));
});

// Javascript
gulp.task('js', () => {
  gulp.src(['./src/js/vendor/*.js', './src/js/modules/*.js', './src/js/main.js'])
    .pipe(uglify({
      "output": {
        "comments": "some"
      }
    }))
    .pipe(concat('main.js', { 'newLine': '\r\n\r\n' }))
    .pipe(gulp.dest('./dist/js/'));
});

// Images
gulp.task('img', () => {
  gulp.src('./src/img/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(imgmin({
      'optimizationLevel': 5,
      'interlaced': true
    }))
    .pipe(gulp.dest('./dist/img/'));
});

// Html
gulp.task('html', () => {
  let indexSrcPath = path.join(__dirname, 'src/index.html');
  let indexDistPath = path.join(__dirname, 'dist/index.html');
  fs.readFile(indexSrcPath, (err, data) => {
    if (err) throw err;

    fs.writeFile(indexDistPath, data, (err) => {
      if (err) throw err;
    });
  });
});

// Video
gulp.task('video', () => {
  let files = {
    "src/video/teaser.m4v": "dist/video/teaser.m4v",
    "src/video/teaser.webm": "dist/video/teaser.webm"
  };

  Object.entries(files).forEach(([src, dist]) => {
    let srcPath = path.join(__dirname, src);
    let distPath = path.join(__dirname, dist);
    
    fs.readFile(srcPath, (err, data) => {
      if (err) throw err;

      fs.writeFile(distPath, data, (err) => {
        if (err) throw err;
      });
    });
  });
});

// Watch
gulp.task('watch', () => {
  // watch style files
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  // Watch script files
  gulp.watch('./src/js/**/*.js', ['js']);
  // Watch image files
  gulp.watch('./src/img/*.{jpg,jpeg,png,gif,svg}', ['img']);
  // Watch html file (index)
  gulp.watch('./src/index.html', ['html']);
});

// Build
gulp.task('build', ['sass', 'js', 'img', 'html']);

// Default (Alias for build)
gulp.task('default', ['build']);
