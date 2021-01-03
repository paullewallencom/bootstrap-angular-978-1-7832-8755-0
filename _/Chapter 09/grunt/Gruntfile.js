module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: [
                'app/**/*.js'
            ],
            tasks: ['uglify']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [
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
                ],
                dest: 'assets/js/<%= pkg.name %>.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify']);

};
