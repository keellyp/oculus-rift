/* eslint-disable */

// Get dependencies 
const gulp    = require('gulp'),
  browserSync = require('browser-sync').create(),
  browserify  = require('browserify'),
  babelify    = require('babelify'),
  buffer      = require('vinyl-buffer'),
  source      = require('vinyl-source-stream'),
  env         = require('babel-preset-env'),
  gifsicle    = require('imagemin-gifsicle'),
  jpegtran    = require('imagemin-jpegtran'),
  optipng     = require('imagemin-optipng'),
  svgo        = require('imagemin-svgo') 

// Get all gulp dependencies 
const plugin = require('gulp-load-plugins')()

// Variables
const config = {
  assets: 'assets/',
  dist: 'dist/',
  isProd: process.env.NODE_ENV === 'production'
}

// BrowserSync http://localhost:3000/ 
gulp.task('browserSync', () => {
  browserSync.init({
    server: config.dist
  })
})

// Clean dist 
gulp.task('clean', () => {
  return gulp.src(`${config.dist}**/*`, { read: false })
    .pipe(plugin.rm())
})

// CSS function : Handle Sass, autoprefix, minify, sourcemaps
gulp.task('style', () => {
  gulp
    .src(`${config.assets}/styles/*.scss`)
    .pipe(plugin.plumber({
      errorHandler: plugin.notify.onError('SASS Error <%= error.message %>')
    }))
    .pipe(!config.isProd ? plugin.sourcemaps.init() : plugin.util.noop())
    .pipe(plugin.sass({
      outputStyle: 'compressed'
    })
    .on('error', plugin.sass.logError))
    .pipe(plugin.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(plugin.csscomb())
    .pipe(config.isProd ? plugin.cssnano() : plugin.util.noop())
    .pipe(config.isProd ? plugin.sourcemaps.write() : plugin.util.noop())
    .pipe(plugin.rename('style.min.css'))
    .pipe(gulp.dest(`${config.dist}css`))
    .pipe(browserSync.stream())
  plugin.util.log(plugin.util.colors.green('Style is done'))
})

// JS function : Browserify, Minify, Sourcemaps
gulp.task('javascript', () => {
  let bundler = browserify({
    entries: `${config.assets}/javascript/app.js`,
    debug: true
  })
  .transform(babelify, {presets: [env]})
  
  return bundler.bundle()
    .on('error', function(err){
      plugin.util.log(plugin.util.colors.red(err.stack))
      plugin.notify('Error')
      this.emit('end')
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(plugin.sourcemaps.init({loadMaps: true}))
    .pipe(config.isProd ? plugin.streamify(plugin.uglify()) : plugin.util.noop())
    .pipe(plugin.rename('app.min.js'))
    .pipe(gulp.dest(`${config.dist}js`))
    .pipe(browserSync.stream())
  plugin.util.log(plugin.util.colors.green('JS is done'))    
})

gulp.task('aframe', () => {
  let bundler = browserify({
    entries: `${config.assets}/javascript/components/aframe.js`,
    debug: true
  })
  .transform(babelify, {presets: [env]})
  
  return bundler.bundle()
    .on('error', function(err){
      plugin.util.log(plugin.util.colors.red(err.stack))
      plugin.notify('Error')
      this.emit('end')
    })
    .pipe(source('aframe.js'))
    .pipe(buffer())
    .pipe(plugin.sourcemaps.init({loadMaps: true}))
    .pipe(config.isProd ? plugin.streamify(plugin.uglify()) : plugin.util.noop())
    .pipe(plugin.rename('aframe.min.js'))
    .pipe(gulp.dest(`${config.dist}js`))
    .pipe(browserSync.stream())
  plugin.util.log(plugin.util.colors.green('JS is done'))    
})

// Create different size for images 
gulp.task('srcset', () => {
  return gulp.src(`${config.assets}images/src/*.{jpg,jpeg,png}`)
    .pipe(plugin.responsive({
      '*': [
        { width: 350, rename: { suffix: '@350w' }},
        { width: 560, rename: { suffix: '@560w' }},
        { width: 720, rename: { suffix: '@720w' }},
        { width: 1280, rename: { suffix: '@1280w' }},
        { width: 1920, rename: { suffix: '@1920w' }},
        { rename: { suffix: '-full' }, }], 
    }, {
      passThroughUnsed: false,
      quality: 80,
      compressionLevel: 8,
      withoutEnlargement: true,
      withMetadata: false,
      errorOnEnlargement: false,
      skipOnEnlargement: true,
      max: true,
    }))
    .pipe(gulp.dest(`${config.assets}images`))
})

gulp.task('otherSrc', () => {
  return gulp.src(`${config.assets}images/src/*.svg`)
    .pipe(gulp.dest(`${config.assets}images`))
})


// Image optimisation
gulp.task('images', () => {
  gulp
    .src(`${config.assets}images/*.*`)
    .pipe(config.isProd ? plugin.imagemin([
      gifsicle({interlaced: true}),
      jpegtran({progressive: true}),
      optipng({optimizationLevel: 5}),
      svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ], {
      verbose: true
    }) : plugin.util.noop())
    .pipe(gulp.dest(`${config.dist}img`))
  plugin.util.log(plugin.util.colors.green('Images is done'))    
})

// Replace font into dist folder
gulp.task('fonts', () => {
  gulp
    .src(`${config.assets}fonts/*`)
    .pipe(gulp.dest(`${config.dist}fonts`))
    .pipe(browserSync.stream())
  plugin.util.log(plugin.util.colors.green('Fonts has been move'))
})

// Replace font into dist folder
gulp.task('favicons', () => {
  gulp
    .src(`${config.assets}favicons/*`)
    .pipe(gulp.dest(`${config.dist}favicons`))
    .pipe(browserSync.stream())
  plugin.util.log(plugin.util.colors.green('Favicons has been move'))
})

// Replace videos into dist folder
gulp.task('videos', () => {
  gulp
    .src(`${config.assets}videos/*`)
    .pipe(gulp.dest(`${config.dist}videos`))
    .pipe(browserSync.stream())
  plugin.util.log(plugin.util.colors.green('Videos has been move'))
})

// Include HTML files into dist folder under the name of index.html 
gulp.task('fileinclude', function () {
  gulp
    .src(`${config.assets}/index.html`)
    .pipe(plugin.fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(`${config.dist}`))
    .pipe(browserSync.stream())
  plugin.util.log(plugin.util.colors.green('File has been included'))    
})

// Watch all my task
gulp.task('watch', ['fileinclude', 'style', 'javascript', 'aframe', 'fonts', 'videos', 'images'], () => {
  gulp.watch(`${config.assets}**/*.html`, ['fileinclude'])
  gulp.watch(`${config.assets}styles/**/*.scss`, ['style'])
  gulp.watch(`${config.assets}javascript/**/*.js`, ['javascript'])
  gulp.watch(`${config.assets}javascript/**/*.js`, ['aframe'])
  gulp.watch(`${config.assets}images/*`, ['images'])
  gulp.watch(`${config.assets}images/src/*.{jpg,jpeg,png,tiff,webp,gif}`, ['srcset'])
  gulp.watch(`${config.assets}fonts/*`, ['fonts'])
  gulp.watch(`${config.assets}videos/*`, ['videos'])
})

// Default task 
gulp.task('default', ['browserSync', 'watch'], () => {})

// Build task
gulp.task('build', ['fileinclude', 'style', 'javascript', 'aframe', 'fonts', 'videos', 'images', 'favicons'], () => {})
