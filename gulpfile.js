const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');

const staticAppDir = 'src/main/resources/static/app/';
const staticLibDir = 'src/main/resources/static/lib/';
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
        .pipe(newer(staticLibDir + 'lib.min.js'))
        .pipe(concat('lib.min.js'))
        .pipe(gulp.dest(staticLibDir))
});

gulp.task('typescript-compile', function() {
    const tsProject = ts.createProject('tsconfig.json');

    return gulp.src([
            'typings/browser.d.ts',
            webAppDir + '**/*.ts'
        ])
        .pipe(newer({dest: staticAppDir, ext: '.js'}))
        .pipe(ts(tsProject))
        .pipe(gulp.dest(staticAppDir))
});

gulp.task('html-replace', function() {
    return gulp.src(webAppDir + '**/*.html')
        .pipe(newer(staticAppDir))
        .pipe(gulp.dest(staticAppDir))
});

gulp.task('css-replace', function() {
    return gulp.src(webAppDir + '**/*.css')
        .pipe(newer(staticAppDir))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(staticAppDir))
});

gulp.task('build', ['typescript-compile', 'library-concat', 'html-replace', 'css-replace']);
gulp.task('default', ['typescript-compile', 'html-replace', 'css-replace']);

gulp.task('watch', function() {
    gulp.watch(webAppDir + '**/*.ts', ['typescript-compile']);
    gulp.watch(webAppDir + '**/*.html', ['html-replace']);
    gulp.watch(webAppDir + '**/*.css', ['css-replace']);
});