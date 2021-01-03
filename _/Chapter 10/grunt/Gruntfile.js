module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: [
                    'assets/js/*.js'
                ],
                tasks: ['uglify']
            },
            less: {
                files: [
                    'assets/less/*.less'
                ],
                tasks: ['less:dev']
            },
            css: {
                files: [
                    'assets/css/bootstrap.css'
                ],
                options: {
                    livereload: true
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [
                    'assets/js/vendor/jquery.js',
                    'assets/js/vendor/bootstrap.js',
                    'assets/js/vendor/angular.js',
                    'assets/js/vendor/angular-animate.js',
                    'assets/js/vendor/angular-resource.js',
                    'assets/js/vendor/angular-route.js',
                    'assets/js/vendor/angular-sanitize.js',
                    'assets/js/vendor/angular-strap.js',
                    'assets/js/vendor/angular-strap.tpl.js',
                    'assets/js/modules/contactsMgr.js',
                    'assets/js/modules/contactsMgr.directives.js',
                    'assets/js/modules/contactsMgr.filters.js',
                    'assets/js/modules/contactsMgr.services.js',
                    'assets/js/controllers/*.js'
                ],
                dest: 'assets/js/build/<%= pkg.name %>.js'
            }
        },
        less: {
            dev: {
                files: {
                    'assets/css/bootstrap.css': 'assets/less/bootstrap.less'
                }
            },
            production: {
                options: {
                    cleancss: true
                },
                files: {
                    'assets/css/bootstrap.css': 'assets/less/bootstrap.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['uglify']);

};
