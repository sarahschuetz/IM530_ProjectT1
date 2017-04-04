let args = require('yargs').argv;
let autoprefixer = require('gulp-autoprefixer');
let browserSync = require('browser-sync').create();
let cssmin = require('gulp-cssmin');
let gulp = require('gulp');
let gutil = require('gulp-util');
let named = require('vinyl-named');
let nodemon = require('gulp-nodemon');
let plumber = require('gulp-plumber');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let webpack = require('webpack');
let webpackStream = require('webpack-stream');

const env = (args.deploy) ? 'prod' : 'dev';
console.log('using env:', env);
let webpackConfig = require('./webpack.config.' + env);

if (env != 'prod') {
  cssmin = gutil.noop;
}

// gulp.task('css', function() {
//     gulp.src('resources/assets/css/**/*.css')
//       .pipe(autoprefixer())
//       .pipe(cssmin())
//       .pipe(gulp.dest('resources/static'));
// });

gulp.task('scss', function () {
    gulp.src('resources/assets/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(gulp.dest('resources/static'));
});

gulp.task('js', function() {
    gulp.src('resources/assets/js/**/*.js')
        .pipe(plumber())
        .pipe(named())
        .pipe(webpackStream(webpackConfig, webpack))
        // .pipe(uglify())
        .pipe(gulp.dest('resources/static'));
});

// gulp.task('templates', function() {
//   gulp.src('src/templates/**/*.html')
//     .pipe(gulp.dest('build'));
// });

gulp.task('img', function() {
    gulp.src('resources/assets/img/**/*')
        .pipe(gulp.dest('resources/static/img'));
});

gulp.task('watch', function() {
    // gulp.watch('resources/assets/css/**/*.css', ['css']);
    gulp.watch('resources/assets/js/**/*.js', ['js']);
  // gulp.watch('src/templates/**/*.html', ['templates']);
    gulp.watch('src/scss/**/*', ['scss']);
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        files: ['./build/**/*'],
        reloadDebounce: 500,
        open: false
    });

    nodemon({
        script: './server.js',
        ignore: ['node_modules/**'],
        ext: 'js',
        stdout: false,
        env: {'NODE_ENV': 'development'},
        nodeArgs: [],
        delay: 1000
    }).on('readable', function () {
        this.stdout.on('data', function (chunk) {
            if(/^Express server listening on port/.test(chunk)){
              livereload.changed(__dirname);
            }
    });

    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

// gulp.task('default', ['css', 'js', 'templates', 'img']);
gulp.task('default', ['scss', 'js', 'img']);
gulp.task('dev', ['default', 'watch', 'serve']);