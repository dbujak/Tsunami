module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Combine JavaScript files
        concat: {
            options: {
                separator: ';\n',
            },
            dist: {
                src: require('./js/tsunami.json'),
                dest: 'js/tsunami.js'
            },
        },

        //Compile and minify Less files
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/tsunami.css": "css/less/tsunami.less"
                }
            }
        },

        //Minify compiled css
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: 'tsunami.css',
                dest: 'css/',
                ext: '.min.css'
            }
        },

        clean: {
             build: ["css/tsunami.css"]
           },

        cachebreaker: {
            dev: {
                options: {
                    match: ['tsunami.js', 'tsunami.min.css'],
                },
                files: {
                    src: ['index.html']
                }
            }
        },

        watch: {
            //watch js files
            js: {
                files: ['js/tsunami.json', 'js/app/*.js', 'js/lib/*.js'],
                tasks: ['concat']
            },
            //watch less files
            css: {
                files: ['css/less/*.less'],
                tasks: ['less:development', 'cssmin:minify','clean'],
            },
            html: {
                files: ['*.html', 'partials/*/*.html'],
            },
            options: {
                livereload: true,
            }
            // Livereload browser

        } //end watch task

    }); // close grunt initconfig function

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    //Load the plugin that provides the 'JS Combine' task
    grunt.loadNpmTasks('grunt-contrib-concat');

    //Load the plugin that provides the 'JS Uglify' task
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    //Load the plugin that provides the "LESS" task.
    grunt.loadNpmTasks('grunt-contrib-less');

    //Load the plugin that provides the "cssmin" task
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Load the plugin that adds timestamps to css and js includes to break cache
    grunt.loadNpmTasks('grunt-cache-breaker');

    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['concat','less', 'cssmin','clean', 'cachebreaker', 'watch']);

};