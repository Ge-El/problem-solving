var gulp = require("gulp");
var ts = require("gulp-typescript");
var browserSync = require('browser-sync');
var tsFilesPath = "src/**/*.ts";


// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:8000
// Not working, curretly in progress........
gulp.task('serve', ['build'], function (done) {
    browserSync({
        online: false,
        open: false,
        port: 8000,
        server: {
            baseDir: ['.'],
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }
    }, done);
});

// task watches filechanges in src folder and reruns build task on any change.
gulp.task('watch', function () {
    gulp.watch(tsFilesPath, ['build',]).on('change', logChange)
});

function logChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// task copies files from src folder transpiles it and puts it in the dist folder. 
gulp.task('build', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            module: 'system',
            target: 'es5',
            declaration: false,
            removeComments: true,
            noLib: false,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            allowSyntheticDefaultImports: true
        }))
        .pipe(gulp.dest('dist'));
});