module.exports = function(grunt) {

  const sass = require('node-sass');

  grunt.initConfig({
    clean: {
      build: ['dist/']
    },
    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: '*.html',
            dest: 'dist/'
          }
        ]
      },
      img: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: 'img/**',
            dest: 'dist/'
          }
        ]
      },
      font: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: 'font/**',
            dest: 'dist/'
          }
        ]
      },
      server: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: 'server.js',
            dest: 'dist/'
          }
        ]
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      compressed: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/css/style.min.css': 'src/sass/main.scss'
        }
      },
      expanded: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'src/css/style.css': 'src/sass/main.scss'
        }
      }
    },
    browserify: {
      options: {
        transform: [['babelify', {presets: ['@babel/env']}]]
      },
      build: {
        files: {
          'src/app.bundle.js': 'src/app.js'
        }
      }
    },
    uglify: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: 'app.bundle.js',
            dest: 'dist/',
            ext: '.bundle.min.js'
          }
        ]
      }
    },
    concat: {
      build: {
        files: {
          'dist/app.bundle.min.js': [
            'src/js/vendor/jquery-3.2.1.min.js',
            'src/js/vendor/imgLiquid-min.js',
            'src/js/vendor/xm_accordion.min.js',
            'src/js/vendor/xm_arc.min.js',
            'src/js/vendor/xm_countdown.min.js',
            'src/js/vendor/xm_calendar.min.js',
            'src/js/vendor/xm_dropdown.min.js',
            'src/js/vendor/xm_lineslide.min.js',
            'src/js/vendor/xm_popup.min.js',
            'src/js/vendor/xm_progressBar.min.js',
            'src/js/vendor/xm_slider.min.js',
            'src/js/vendor/xm_tab.min.js',
            'src/js/vendor/xm_tooltip.min.js',
            'dist/app.bundle.min.js'
          ]
        }
      }
    },
    connect: {
      build: {
        options: {
          base: 'dist/',
          hostname: 'localhost',
          port: 8099,
          open: true,
          livereload: 9096
        }
      }
    },
    watch: {
      options: {
        livereload: 9096
      },
      html: {
        files: ['src/*.html'],
        tasks: ['copy:html']
      },
      img: {
        files: ['src/img/**'],
        tasks: ['copy:img']
      },
      font: {
        files: ['src/font/**'],
        tasks: ['copy:font']
      },
      sass: {
        files: ['src/sass/**'],
        tasks: ['styles']
      },
      js: {
        files: ['src/app.js', 'src/js/**'],
        tasks: ['scripts']
      },
      server: {
        files: ['src/server.js'],
        tasks: ['copy:server']
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register global tasks
  grunt.registerTask('default', ['files', 'styles', 'scripts', 'launch']);

  // Register custom tasks
  grunt.registerTask('files', ['clean:build', 'copy:html', 'copy:img', 'copy:font', 'copy:server']);
  grunt.registerTask('styles', ['sass:compressed', 'sass:expanded']);
  grunt.registerTask('scripts', ['browserify:build', 'uglify:build', 'concat:build']);
  grunt.registerTask('launch', ['connect:build', 'watch']);
};