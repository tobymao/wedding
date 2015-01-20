var gulp = require('gulp');
var gutil = require('gulp-util');
var argv = require('yargs')
  .usage('Usage: gulp [--production]')
  .argv;

var jshint = require('gulp-jshint');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var SRC_HTML = './src/html/**/*.html';
var SRC_CSS = './src/css/**/*.css';
var SRC_LESS = './src/less/**/*.less';
var SRC_JS = './src/js/**/*.js';
var SRC_IMG = './src/img/**/*.*';

var bundleStreamBuilder = function(watch) {
  var opts = { 
    // Required watchify args
    cache: {}, 
    packageCache: {}, 
    fullPaths: true,
    // Browserify Options
    debug: !argv.production 
  };

  var bundler = browserify('./src/js/main.js', opts);
  bundler.transform(reactify);
  

  function bundle() {
    return bundler.bundle()
    .on('error', function(err) {
      gutil.log(gutil.colors.bgRed('Error'), err.message);
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js/'));
  };

  if (watch) {
    bundler = watchify(bundler)
    bundler.on('update', bundle);
    bundler.on('time', function(time) {
      gutil.log(gutil.colors.green('[Browserify]'), 
        'packaged in', 
        gutil.colors.magenta(time),
        gutil.colors.magenta('ms'));
    });
  }

  return bundle();
};


gulp.task('watch', function() {
  gulp.watch(SRC_IMG, ['img']);
  gulp.watch(SRC_HTML, ['html']);
  gulp.watch(SRC_LESS, ['less']);
  gulp.watch(SRC_JS, ['lint']);
  return bundleStreamBuilder(true);
});

gulp.task('js', function(cb) {
  return bundleStreamBuilder();
});

gulp.task('img', function() {
  return gulp.src(SRC_IMG)
    .pipe(gulp.dest('./build/img'));
});

gulp.task('html', function() {
  return gulp.src(SRC_HTML)
    .pipe(gulp.dest('./build/'));
});

gulp.task('less', function() {
  gulp.src(SRC_CSS)
    .pipe(gulp.dest('./build/css'));

  if (argv.production) {
    return gulp.src(SRC_LESS)
      .pipe(less())
      .pipe(gulp.dest('./build/css/'));
  } else {
    return gulp.src(SRC_LESS)
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./build/css/'));
  }
});

// Lint Task
gulp.task('lint', function() {
  // Don't lint the libs
  return gulp.src([SRC_JS, '!./src/js/libs/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('default', ['lint','img', 'html', 'less', 'js']);
gulp.task('dev', ['lint','img', 'html', 'less', 'watch']);
