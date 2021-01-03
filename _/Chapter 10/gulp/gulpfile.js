var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pkg = require('./package.json');
var less = require('gulp-less');
var livereload = require('gulp-livereload');

var paths = {
    js: [
        'assets/js/vendor/jquery.js',
        'assets/js/vendor/bootstrap.js',
        'assets/js/vendor/angular.js',
        'assets/js/vendor/angular-animate.js',
        'assets/js/vendor/angular-resource.js',
        'assets/js/vendor/angular-route.js',
        'assets/js/vendor/angular-sanitize.js',
        'assets/js/vendor/angular-strap.js',
        'assets/js/vendor/angular-strap.tpl.js',
        'assets/js/modules/*.js',
        'assets/js/controllers/*.js'
    ],
    less: 'assets/less/*.less'
};

gulp.task('uglify', function(){
    gulp.src(paths.js)
    .pipe(concat(pkg.name+'.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/build'));
});

gulp.task('watch', function(){

    var server = livereload();

    gulp.watch(paths.js, ['uglify']);
    gulp.watch(paths.less, ['less']);
    gulp.watch('assets/css/bootstrap.css').on('change', function(file){
        server.changed(file.path);
    });

});

gulp.task('less', function(){
    gulp.src('assets/less/bootstrap.less')
    .pipe(less({
        filename: 'bootstrap.css'
    }))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['uglify', 'less']);
