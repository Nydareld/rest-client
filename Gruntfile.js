module.exports = function(grunt) {

    var bowerJs = [
        "bower_components/jquery/dist/jquery.js",
        "bower_components/jquery-ui/jquery-ui.js",
        "bower_components/bootstrap/dist/js/bootstrap.js",
        "bower_components/angular/angular.js",
        "bower_components/angular-sanitize/angular-sanitize.js",
        "bower_components/angular-translate/angular-translate.js",
        "bower_components/angular-ui-router/release/angular-ui-router.js",
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
        "bower_components/angular-translate/angular-translate.js",
        "bower_components/oclazyload/dist/ocLazyLoad.js",
        "bower_components/metisMenu/dist/metisMenu.js",
        "bower_components/AngularJS-Toaster/toaster.js",
        "bower_components/angular-animate/angular-animate.js",
        "bower_components/keycloak/dist/keycloak.js",
        "bower_components/nrcom-inspinia/dist/scripts/app.js",
        "bower_components/nrcom-inspinia/dist/scripts/app.templates.js",
    ];

    var bowerFonts = [
        "bower_components/font-awesome/fonts/**"
    ];

    var bowerCss = [
        "bower_components/normalize-css",
        "bower_components/bootstrap/dist/css/bootstrap.css",
        "bower_components/metisMenu/dist/metisMenu.css",
        "bower_components/animate.css/animate.css",
        "bower_components/AngularJS-Toaster/toaster.css",
        "bower_components/nrcom-inspinia/dist/style/style.css",
        "bower_components/font-awesome/css/font-awesome.css"
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            js: { //target
                separator : ",",
                src: [
                    "./src/*.js",
                    "./src/**/*.js"
                ],
                dest: "./public/scripts/app.js"
            },
            concatBowerCss: {
                separator : ";",
                src : bowerCss,
                dest: "./public/style/bower.css"
            },
            concatBowerJs: {
                separator : ",",
                src : bowerJs,
                dest: "./public/scripts/bower.js"
            }
        },
        uglify: {
            js: { //target
                src: ["./public/scripts/app.js"],
                dest: "./public/scripts/app.min.js"
            },
            tpl: { //target
                src: ["./public/scripts/app.templates.js"],
                dest: "./public/scripts/app.templates.min.js"
            },
            bowerJs: {
                src: "./public/scripts/bower.js",
                dest: "./public/scripts/bower.min.js"
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ["./statics/**"],
                        dest: "./public/"
                    },{
                        expand: true,
                        flatten: true,
                        src: bowerFonts,
                        filter: "isFile",
                        dest: "./public/fonts/"
                    },{
                        src : "./src/index.html",
                        dest : "./public/index.html"
                    }
                ]
            },
            prod: {
                files: [
                    {
                        expand: true,
                        cwd: "public/",
                        src: ["**"],
                        dest: "buildProd/",
                        filter: "isFile"
                    }
                ]
            }
        },
        ngtemplates: {
            rest-client : {
                cwd : "src",
                src: [
                    "./**/*.html",
                    "!./index.html"
                ],
                dest:     "public/scripts/app.templates.js"
            }
        },
        less: {

            dev :{
                files: {
                    "./public/style/style.css": "./src/all.less"
                }
            },
            prod :{
                options: {
                    plugins: [
                        new (require("less-plugin-autoprefix"))({browsers: ["last 3 versions"]}),
                        new (require("less-plugin-clean-css"))({advanced: true})
                    ]
                },
                files: {
                    "./public/style/style.css": "./src/all.less"
                }
            }
        },
        cssmin:{
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    "./public/style/bower.css": ["./public/style/bower.css"]
                }
            }
        },
        watch : {
            all : {
                files : [
                    "./src/**",
                    "./src/*",
                ],
                tasks: ["concat:js", "copy:main", "less:dev","ngtemplates:rest-client"],
                options: {
                    livereload: true,
                }
            },
            bower : {
                files : [
                    "../../dist/scripts/app.js",
                    ".. /../dist/scripts/app.templates.js"
                ],
                tasks: ["concat:concatBowerJs", "concat:concatBowerCss","copy:main"],
                options: {
                    livereload: true,
                }
            }
        },
        clean: {
            public: ["public/*"],
            buildProd: ["buildProd/*"]
        },
        ngAnnotate: {
            options: {
                singleQuotes : true
            },
            app: {
                files: {

                }
            }
        },
        express:{
            all:{
                options:{
                    port:3000,
                    hostname:"localhost",
                    bases:["./public"],
                    livereload:true
                }
            }
        }
    });

    //load grunt tasks
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-angular-templates");
    grunt.loadNpmTasks("grunt-express");

    //register grunt default task
    grunt.registerTask("server",["default","express","watch"]);
    grunt.registerTask("default", ["ngtemplates","concat", "copy:main", "less:dev"]);
    grunt.registerTask("prod", ["clean","ngtemplates","concat", "uglify", "copy:main", "less:prod", "cssmin", "copy:prod"]);

};
