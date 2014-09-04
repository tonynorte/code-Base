
'use strict';
module.exports = function (grunt) {
    

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    /**
    * Get package meta data
    */
    pkg: grunt.file.readJSON('package.json'),

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    lineComments: true
                },
                files: [{
                    expand: true,
                    cwd: 'app/sass',
                    dest: 'app/css',
                    src: ['style.scss'],
                    ext: '.css'
                }]
            },
            options: {
                cacheLocation: '.tmp/.sass-cache'
            }
            
        },
        // reload: {
        //     port: 3000,
        //     proxy: {
        //         host: 'localhost',
        //         port: 3000 // should match server.port config
        //     }
        // },
//        reload: {
//            options: {
//                port: 3011,
//                // change this to '0.0.0.0' to access the server from outside
//                hostname: 'localhost'
//            },
//            livereload: {
//                options: {
//                    middleware: function (connect) {
//                        return [
//                            lrSnippet,
//                            mountFolder(connect, '.tmp'),
//                            mountFolder(connect, 'app'),
//                            require('./server') // your server packaged as a nodejs module
//                        ];
//                    }
//                }
//            }
//        },
        express: {
            options: {
              // Override defaults here
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        watch: {    
            css: {
                files: '**/*.scss',
//                tasks: ['sass:dev', 'reload'],
                tasks: ['sass:dev'],
                options: {
                  livereload: true,
                },
            },
            express: {
                files:  [ 'server.js', '!**/node_modules/**', '!Gruntfile.js' ],
                tasks:  [ 'express:dev' ],
                options: {
                    nospawn: true // Without this option specified express won't be reloaded
                }
            }
        }
        

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    //    grunt.loadNpmTasks('grunt-reload');
        

    // // Restart
    grunt.registerTask('restart', 'Restart the server.', [
        'express:dev',
        'watch'
    ]);

    grunt.registerTask('workon', 'Restart the server.', [
        'express:dev',
        'watch'
    ]);
    

};
