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

const env = (args.deploy) ? 'prod' : 'dev';
console.log('using env:', env);

if (env != 'prod') {
    cssmin = gutil.noop;
}

gulp.task('scss', function () {
    gulp.src('resources/assets/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(gulp.dest('resources/static'));
});

gulp.task('img', function() {
    gulp.src('resources/assets/img/**/*')
        .pipe(gulp.dest('resources/static/img'));
});

gulp.task('watch', function() {
    gulp.watch('resources/assets/scss/**/*.scss', ['scss']);
    gulp.watch('resources/assets/img/**/*', ['img']);
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

gulp.task('default', ['scss', 'img']);
gulp.task('dev', ['default', 'watch', 'serve']);