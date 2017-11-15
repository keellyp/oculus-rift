// Variables
const config = {
  styles: "assets/styles/",
  js: "assets/javascript/",
  assets: "assets/",
  dist: "dist/"
}
const gulp              = require('gulp'),
      // Tools dependencies
      del               = require('del'),
      gulp_rename       = require('gulp-rename'),
      gulp_plumber      = require('gulp-plumber'),
      gulp_notify       = require('gulp-notify'),
      gulp_sourcemaps   = require('gulp-sourcemaps'),
      browserSync       = require('browser-sync').create(),
      gulp_fileinclude  = require('gulp-file-include'),
      // Image depedency
      gulp_imagemin     = require('gulp-imagemin'),
      // Style dependencies
      gulp_sass         = require('gulp-sass'),
      gulp_autoprefixer = require('gulp-autoprefixer'),
      gulp_cssnano      = require('gulp-cssnano'),
      // Javascript dependencies
      browserify = require('browserify'),
      babelify = require('babelify'),
      buffer = require('vinyl-buffer'),
      source = require('vinyl-source-stream'),
      es2015 = require('babel-preset-es2015'),
      gulp_uglify=require('gulp-uglify')


// BrowserSync http://localhost:3000/ : static server + watching HTML, SCSS, JS files
gulp.task('serve', ['style'], () => {
  browserSync.init({
    server: "dist/"
  })
  gulp.watch(`${config.dist}**/*.html`).on('change', browserSync.reload);
  gulp.watch(`${config.styles}*.scss`, ['style']);
  gulp.watch(`${config.js}*.js`, ['check-scripts']);
})

// Ensure that 'javascript' task is complete before reload
gulp.task('check-scripts', ['javascript'], (done) => {
  browserSync.reload()
  done()
})

// Default task
gulp.task('default', ['serve', 'watch'], () => {})

// Build task
gulp.task('build', ['clean', 'fileinclude', 'style', 'libraries', 'javascript', 'fonts', 'images'], () => {})

// Clean dist 
gulp.task('clean', () => {
  del([config.dist], {force: true, dryRun: true}).then(paths => {
    console.log('Files and folders that would be deleted:\n', paths.join('\n'));
  });
});

// CSS function
gulp.task('style', () => {
  return gulp.src(`${config.styles}main.scss`)
    .pipe(gulp_plumber({
      errorHandler: gulp_notify.onError('SASS Error <%= error.message %>')
    }))
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_sass({
      outputStyle: 'compressed'
    }).on('error', gulp_sass.logError))
    .pipe(gulp_autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp_cssnano())
    .pipe(gulp_sourcemaps.write())
    .pipe(gulp_rename('style.min.css'))
    .pipe(gulp.dest(`${config.dist}css`))
    .pipe(browserSync.stream());
});

// Minify css libraries
gulp.task('libraries', () => {
  return gulp.src(`${config.styles}libraries/*.css`)
  .pipe(gulp_plumber({errorHandler: gulp_notify.onError('Libraries error  <%= error.message %>')}))
  .pipe(gulp_sourcemaps.init())
  .pipe(gulp_cssnano())
  .pipe(gulp_sourcemaps.write())
  .pipe(gulp_autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp_rename('library.min.css'))
  .pipe(gulp.dest(`${config.dist}css`))
})

// JS function
gulp.task('javascript', () => {
  return (browserify(`${config.js}script.js`, { debug: true }).transform(babelify, {presets:[es2015]}).bundle())
    .on('error', gulp_notify.onError(function (error) {
        return "Message to the notifier: " + error.message;
    }))
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_uglify())
    .pipe(gulp_sourcemaps.write())
    .pipe(gulp_rename('script.min.js'))
    .pipe(gulp.dest(`${config.dist}js`))
    .pipe(gulp_notify('JS compiled'));
})

// Minifies images
gulp.task('images', () => {
  return gulp.src(`${config.assets}images/*`)
    .pipe(gulp_imagemin())
    .pipe(gulp.dest(`${config.dist}img`))
    .pipe(gulp_notify('minified !'))
})

// Replace font into dist folder
gulp.task('fonts', () => {
  return gulp.src(`${config.assets}fonts/*`)
    .pipe( gulp.dest(`${config.dist}fonts`))
})

// Include HTML files into dist folder under the name of index.html 
gulp.task('fileinclude', function() {
  gulp.src([`${config.assets}/index.html`])
    .pipe(gulp_fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(`${config.dist}`));
});

// Watch all my task
gulp.task('watch', ['fileinclude', 'style', 'libraries', 'javascript', 'fonts', 'images'], () => {
  gulp.watch(`${config.assets}**/*.html`, ['fileinclude'])
  gulp.watch(`${config.styles}**/*.scss`, ['style'])
  gulp.watch(`${config.styles}libraries/*.css`, ['libraries'])
  gulp.watch(`${config.js}**/*.js`, ['javascript'])
  gulp.watch(`${config.assets}images/*`, ['images'])
  gulp.watch(`${config.assets}fonts/*`, ['fonts'])
})