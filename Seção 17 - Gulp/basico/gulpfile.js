const gulp = require('gulp');
const { series, parallel } = require('gulp');

// const series = gulp.series;

const antes1 = callback => {
    console.log("Preparando para copiar!")

    return callback();
}

const antes2 = callback => {
    console.log("Copiando...");

    return callback();
}

function copiar(callback) {
    gulp.src(['pastaA/**/*.txt'])
        .pipe(gulp.dest('pastaB'))
    
    return callback();
}

const fim = cb => {
    console.log("Arquivo(s) copiado(s)!");

    return cb();
}

module.exports.default = series(
    antes1,
    parallel(antes2, copiar),
    fim,
);