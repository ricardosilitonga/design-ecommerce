module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*
		* Grunt Sass
		* Compile Sass to CSS using node-sass
		* https://www.npmjs.com/package/grunt-sass
		*/
		sass: {
			options: {
				sourceMap: true, // Values: true, false
				outputStyle: 'nested' // Values: nested, expanded, compact, compressed
			},
			dist: {
				files: {
					'css/styles.css' : 'komponen/sass/styles.scss'
				}
			}
		},
		/*
		* Grunt Contrib Uglify
		* Minify JavaScript
		* https://www.npmjs.com/package/grunt-contrib-uglify
		*/
		uglify: {
			my_target: {
				files: {
					// Make sure jquery loading first
					'js/scripts.js' : ['node_modules/jquery/dist/jquery.js', 'komponen/js/scripts.js']
				}
			}
		},
		/*
		* Grunt Contrib Watch
		* Monitor files and excute tasks
		* https://www.npmjs.com/package/grunt-contrib-watch
		*/
		watch: {
			options: { livereload: true},
			sass: {
				files: ['komponen/sass/*.scss'],
				tasks: ['sass']
			},
			scripts: {
				files: ['komponen/js/*.js'],
				tasks: ['uglify']
			},
			html: {
				files: ['*.html']
			}
		}
	});

	// Load the plugin that provides task.
	require('load-grunt-tasks')(grunt);

	// Custom tasks
	grunt.registerTask('default', ['watch']);
};