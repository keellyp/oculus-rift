// Variables
const config = {
<<<<<<< HEAD
  styles: "assets/styles/",
  js: "assets/javascript/",
  assets: "assets/",
  dist: "dist/",
  isProd: process.env.NODE_ENV === 'production'
=======
  styles: 'assets/styles/',
  js: 'assets/javascript/',
  assets: 'assets/',
  dist: 'dist/'
>>>>>>> dev
}
const gulp          = require('gulp'),
  // Tools dependencies
  gulp_util         = require('gulp-util');
  del               = require('del'),
  gulp_rename       = require('gulp-rename'),
  gulp_plumber      = require('gulp-plumber'),
  gulp_notify       = require('gulp-notify'),
  gulp_sourcemaps   = require('gulp-sourcemaps'),
  browserSync       = require('browser-sync').create(),
  gulp_fileinclude  = require('gulp-file-include'),
  gulp_if           = require('gulp-if'),
  // Image depedency
  gulp_imagemin     = require('gulp-imagemin'),
  // Style dependencies
  gulp_sass         = require('gulp-sass'),
  gulp_autoprefixer = require('gulp-autoprefixer'),
  gulp_cssnano      = require('gulp-cssnano'),
  gulp_concatcss    = require('gulp-concat-css')
  // Javascript dependencies
browserify        = require('browserify'),
babelify          = require('babelify'),
buffer            = require('vinyl-buffer'),
source            = require('vinyl-source-stream'),
es2015            = require('babel-preset-es2015'),
gulp_uglify       = require('gulp-uglify')

<<<<<<< HEAD
=======
const isProd = process.env.NODE_ENV === 'prod'
>>>>>>> dev

// BrowserSync http://localhost:3000/ : static server + watching HTML, SCSS, JS files
gulp.task('serve', ['style'], () => {
  browserSync.init({
    server: 'dist/'
  })
  gulp.watch(`${config.dist}**/*.html`).on('change', browserSync.reload)
  gulp.watch(`${config.styles}*.scss`, ['style'])
  gulp.watch(`${config.js}*.js`, ['check-scripts'])
})

// Ensure that 'javascript' task is complete before reload
gulp.task('check-scripts', ['javascript'], (done) => {
  browserSync.reload()
  done()
})

// Default task
gulp.task('default', ['serve', 'watch'], () => {})

// Build task
gulp.task('build', ['clean', 'fileinclude', 'style', 'javascript', 'fonts', 'images'], () => {})

// Clean dist 
gulp.task('clean', () => {
  del([config.dist], {
    force: true,
    dryRun: true
  })
})

// CSS function
gulp.task('style', () => {
  return gulp.src(`${config.styles}main.scss`)
    .pipe(gulp_plumber({
      errorHandler: gulp_notify.onError('SASS Error <%= error.message %>')
    }))
    .pipe(!config.isProd ? gulp_sourcemaps.init() : gulp_util.noop())
    // .pipe(gulp_if(!config.isProd, gulp_sourcemaps.init()))
    .pipe(gulp_sass({
      outputStyle: 'compressed'
    }).on('error', gulp_sass.logError))
    .pipe(gulp_autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(config.isProd ? gulp_cssnano() : gulp_util.noop())
    // .pipe(gulp_if(config.isProd, gulp_cssnano()))
    .pipe(!config.isProd ? gulp_sourcemaps.write() : gulp_util.noop())
    // .pipe(gulp_if(!config.isProd, gulp_sourcemaps.write()))
    .pipe(gulp_rename('style.min.css'))
    .pipe(gulp.dest(`${config.dist}css`))
    .pipe(browserSync.stream())
<<<<<<< HEAD
    .pipe(gulp_notify('SCSS done'))
});
=======
    .pipe(gulp_if(!isProd, gulp_notify('SCSS done')))
})

// Minify css libraries
gulp.task('libraries', () => {
  return gulp.src(`${config.styles}libraries/*.css`)
    .pipe(gulp_if(!isProd, gulp_plumber({
      errorHandler: gulp_notify.onError('Libraries Error <%= error.message %>')
    })) )
    .pipe(gulp_if(isProd, gulp_concatcss('library.css')))
    .pipe(gulp_if(isProd, gulp_cssnano()))
    .pipe(gulp_rename('library.min.css'))
    .pipe(gulp.dest(`${config.dist}css`))
    .pipe(gulp_if(!isProd, gulp_notify('Libraries done')))
})
>>>>>>> dev

// JS function
gulp.task('javascript', () => {
  return (browserify(`${config.js}script.js`, {
    debug: true
  }).transform(babelify, {
    presets: [es2015]
  }).bundle())
    .on('error', gulp_notify.onError(function (error) {
      return 'Message to the notifier: ' + error.message
    }))
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(!config.isProd ? gulp_sourcemaps.init() : gulp_util.noop())
    // .pipe(gulp_if(!config.isProd, gulp_sourcemaps.init()))
    .pipe(config.isProd ? gulp_uglify() : gulp_util.noop())
    // .pipe(gulp_uglify())
    .pipe(!config.isProd ? gulp_sourcemaps.write() : gulp_util.noop())
    // .pipe(gulp_if(!config.isProd, gulp_sourcemaps.write()))
    .pipe(gulp_rename('script.min.js'))
    .pipe(gulp.dest(`${config.dist}js`))
<<<<<<< HEAD
    .pipe(gulp_notify('JS done'))
});
=======
    .pipe(gulp_if(!isProd, gulp_notify('JS done')))
})
>>>>>>> dev

// Minifies images
gulp.task('images', () => {
  return gulp.src(`${config.assets}images/*`)
    .pipe(config.isProd ? gulp_imagemin() : gulp_util.noop())
    // .pipe(gulp_if(config.isProd, gulp_imagemin()))
    .pipe(gulp.dest(`${config.dist}img`))
<<<<<<< HEAD
    .pipe(gulp_notify('Images done'))
});
=======
    .pipe(gulp_if(!isProd, gulp_notify('Images done')))
})
>>>>>>> dev

// Replace font into dist folder
gulp.task('fonts', () => {
  return gulp.src(`${config.assets}fonts/*`)
    .pipe(gulp.dest(`${config.dist}fonts`))
})

// Include HTML files into dist folder under the name of index.html 
gulp.task('fileinclude', function () {
  gulp.src([`${config.assets}/index.html`])
    .pipe(gulp_fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(`${config.dist}`))
})

// Watch all my task
gulp.task('watch', ['fileinclude', 'style', 'libraries', 'javascript', 'fonts', 'images'], () => {
  gulp.watch(`${config.assets}**/*.html`, ['fileinclude'])
  gulp.watch(`${config.styles}**/*.scss`, ['style'])
  gulp.watch(`${config.js}**/*.js`, ['javascript'])
  gulp.watch(`${config.assets}images/*`, ['images'])
  gulp.watch(`${config.assets}fonts/*`, ['fonts'])
})