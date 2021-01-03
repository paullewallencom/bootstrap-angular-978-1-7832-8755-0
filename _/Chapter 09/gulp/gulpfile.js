var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pkg = require('./package.json');

var paths = {
    js: [
        'app/vendor/jquery.js',
        'app/vendor/bootstrap.js',
        'app/vendor/angular.js',
        'app/vendor/angular-animate.js',
        'app/vendor/angular-resource.js',
        'app/vendor/angular-route.js',
        'app/vendor/angular-sanitize.js',
        'app/vendor/angular-strap.js',
        'app/vendor/angular-strap.tpl.js',
        'app/module.js',
        'app/components/**/*.js',
        'app/views/**/*.js'
    ]
};

gulp.task('uglify', function(){
    gulp.src(paths.js)
    .pipe(concat(pkg.name+'.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', function(){
    gulp.watch(paths.js, ['uglify']);
});

gulp.task('default', ['uglify']);
