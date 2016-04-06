const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');

const staticDir = 'src/main/resources/static/';
const webAppDir = 'src/main/webapp/';

const lib = [
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    'node_modules/angular2/bundles/angular2-polyfills.min.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.min.js',
    'node_modules/angular2/bundles/angular2.min.js',
    'node_modules/angular2/bundles/http.dev.js',
    'node_modules/angular2/bundles/router.dev.js'
];

gulp.task('library-concat', function() {
    return gulp.src(lib)
        .pipe(newer(staticDir + 'source.min.js'))
        .pipe(concat('source.min.js'))
        .pipe(gulp.dest(staticDir))
});

gulp.task('typescript-compile', function() {
    const tsProject = ts.createProject('tsconfig.json');

    return gulp.src([
            'typings/browser.d.ts',
            webAppDir + '**/*.ts'
        ])
        .pipe(newer({dest: staticDir, ext: '.js'}))
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(uglify())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(staticDir))
});

gulp.task('html-replace', function() {
    return gulp.src(webAppDir + '**/*.html')
        .pipe(newer(staticDir))
        .pipe(sourcemaps.init())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(staticDir))
});

gulp.task('css-replace', function() {
    return gulp.src(webAppDir + '**/*.scss')
        .pipe(newer({dest: staticDir, ext: '.css'}))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(staticDir))
});

gulp.task('build', ['typescript-compile', 'library-concat', 'html-replace', 'css-replace']);
gulp.task('default', ['typescript-compile', 'html-replace', 'css-replace']);

gulp.task('watch', function() {
    gulp.watch(webAppDir + '**/*.ts', ['typescript-compile']);
    gulp.watch(webAppDir + '**/*.html', ['html-replace']);
    gulp.watch(webAppDir + '**/*.scss', ['css-replace']);
});