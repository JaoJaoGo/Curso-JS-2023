const gulp = require('gulp');
const webserver = require('gulp-webserver');
const { watch, parallel } = require('gulp');

function monitorarArquivos(cb) {
    const filesToWatch = ['src/**/*.html', 'src/**/*.scss', 'src/**/*.js', 'src/assets/imgs/**/*.*'];

    watch(filesToWatch, function () {
        return parallel('appHTML', 'appCSS', 'appJS', 'appIMG')();
    })
     
    return cb();
}

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }));
}

module.exports = {
    monitorarArquivos,
    servidor,
};