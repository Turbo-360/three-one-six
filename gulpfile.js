// including plugins
var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
// var less = require('gulp-less')
// var to5 = require('gulp-6to5')
var path = require('path')

gulp.task('css', function(){
    return gulp.src(
            [
                './public/files/css/style.css',
                './public/files/css/lightcase.css',
                './public/files/css/isotope.css',
                './public/files/css/font-awesome.min.css',
                './public/files/css/ionicons.css',
                './public/files/revolution/css/settings.css',
                './public/files/revolution/css/layers.css',
                './public/files/revolution/css/navigation.css',
                './public/files/css/lightcase.css',
                './public/files/css/owl.carousel.css',
                './public/files/css/mqueries.css'
            ]
        )
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('style.min.css'))
        .pipe(gulp.dest('./public/dist/css/'))
})

gulp.task('copy-fonts', function(){
    return gulp.src(
            ['./public/files/fonts/**']
        )
        .pipe(gulp.dest('./public/dist/fonts/'))
})

// gulp.task('copy-summernote', function(){
//     return gulp.src(
//             ['./public/css/font/**']
//         )
//         .pipe(gulp.dest('./public/dist/css/font/'))
// })

gulp.task('style', ['css', 'copy-fonts'], function(){})


gulp.task('js', function(){
    return gulp.src(
            [
                './public/js/jquery.3.2.1.min.js',
                './public/js/bootstrap.min.js',
                './public/js/chartist.min.js',
                './public/js/bootstrap-notify.js',
                './public/js/light-bootstrap-dashboard.js',
                './public/js/summernote.min.js',
                './public/js/summernote-example.js'
            ]
        )
        .pipe(gp_concat('vendor.min.js'))
        .pipe(gulp.dest('./public/dist/js/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./public/dist/js/'))
});

// gulp.task('es6-es5', ['js'], function(){
//     return gulp.src([
//                 './src/*/**.js',
//                 './src/*/*/**.js'
//             ]
//         )
//         .pipe(to5())
//         .pipe(gulp.dest('./public/dist/es5/'))
// });

gulp.task('watch', function() {
    gulp.watch(['./src/*/**.js', './src/*/*/**.js', './public/js/**.js'], ['js'])
})

gulp.task('prod', ['style'], function(){})

gulp.task('default', ['watch'], function(){})
