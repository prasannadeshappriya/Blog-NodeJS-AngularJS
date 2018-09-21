const gulp = require('gulp'),
    babel = require('gulp-babel');

const browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    babelify = require('babelify');

const imagemin = require('gulp-imagemin'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    htmlmin = require('gulp-htmlmin'),
    del = require('del'),
    runSequence = require('run-sequence'),
    autoprefixer = require('gulp-autoprefixer');

// Set the browser to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

const paths = {
    scripts: {
        services: [
            './public/src/app/services/project.change.service.js',
            './public/src/app/services/page.refresh.service.js'
        ],
        controllers: [
            './public/src/app/controller/main.controller.js',
            './public/src/app/controller/train-schedule/train.schedule.controller.js',
            './public/src/app/controller/project.controller.js'
        ],
        core: [
            './public/src/app/app.modules.js',
            './public/src/app/app.config.js',
            './public/src/app/app.run.js'
        ]
    },
    vendor_scripts: [
        './public/src/vendor/*.js',
        './public/src/assets/js/*.js'
    ],
    styles: [
        './public/src/assets/css/*.css',
    ],
    fonts: [
        './public/src/assets/fonts/*.ttf',
        './public/src/assets/fonts/*.woff',
        './public/src/assets/fonts/*.woff2',
    ],
    files :[
        './public/src/assets/files/MoodleUOM.apk',
        './public/src/assets/files/sitemap.xml',
        './public/src/assets/files/Final CV 2018-Sept.pdf'
    ],
    views: [
        './public/src/views/**/*.html'
    ],
    favicon: [
        './public/src/favicon.png'
    ],
    index: [
        './public/src/index.html'
    ],
    images: [
        './public/src/assets/images/**/*.jpg',
        './public/src/assets/images/**/*.png',
        './public/src/assets/images/**/*.gif'
    ],
};

gulp.task('script_core', async function () {
    return await browserify(paths.scripts.core)
        .transform('babelify', {
            presets: ['env']
        })
        .bundle()
        // Converts To Vinyl Stream
        .pipe(source('core.js'))
        // Converts Vinyl Stream To Vinyl Buffer
        .pipe(buffer())
        //Gulp Plugging
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/app'))
});

gulp.task('script_services', async function () {
    return await browserify(paths.scripts.services)
        .transform('babelify', {
            presets: ['env']
        })
        .bundle()
        // Converts To Vinyl Stream
        .pipe(source('services.js'))
        // Converts Vinyl Stream To Vinyl Buffer
        .pipe(buffer())
        //Gulp Plugging
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/app'))
});

gulp.task('script_controllers', async function () {
    return await browserify(paths.scripts.controllers)
        .transform('babelify', {
            presets: ['env']
        })
        .bundle()
        // Converts To Vinyl Stream
        .pipe(source('controllers.js'))
        // Converts Vinyl Stream To Vinyl Buffer
        .pipe(buffer())
        //Gulp Plugging
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/app'))
});

gulp.task('scripts', function () {
    runSequence(
        'script_core',
        'script_services',
        'script_controllers'
    );
});

gulp.task('vendor_scripts', function() {
    return gulp.src(paths.vendor_scripts)
    // Minify the file
        .pipe(uglify())
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        // Output
        .pipe(gulp.dest('./public/dist/assets/js'))
});

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src(paths.styles)
    // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./public/dist/assets/css'))
});

// Fonts
gulp.task('fonts', function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('./public/dist/assets/fonts'));
});

// Fonts
gulp.task('files', function() {
    return gulp.src(paths.files)
        .pipe(gulp.dest('./public/dist/assets/files'));
});

// Gulp task to minify HTML files
gulp.task('views', function() {
    return gulp.src(paths.views)
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./public/dist/views'));
});

//Favicon and index page
gulp.task('favicon', function() {
    return gulp.src(paths.favicon)
        .pipe(gulp.dest('./public/dist'));
});
gulp.task('index-page', function() {
    return gulp.src(paths.index)
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./public/dist'));
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('build', ['clean'], function () {
    runSequence(
        'scripts',
        'vendor_scripts',
        'styles',
        'fonts',
        'views',
        'favicon',
        'index-page'
    );
});

// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('image-min', function() {
    return gulp.src(paths.images)
        .pipe(imagemin())
        // Output
        .pipe(gulp.dest('./public/dist/assets/images'))
});