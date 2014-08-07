// Export the gruntfile for us in
// terminal

module.exports = function(grunt) {
	grunt.initConfig({
		// setup the uglify tasks
		uglify: {
			dev: {
				// Specify files using files-object format
				files: {
					// 'destination file': ['source file']
					"javascript/main.min.js": [
					'javascript/main.js',
					'javascript/utils.js'
					]
				},
				options: {
					sourcemap: true,
					}
			},
			// the "build" subtask
				build: {
					files: {
						"javascript/main.min.js": [
						'javascript/main.js',
						'javascript/utils.js'
						]
						}
					},		
					options: {
						sourcemap: true,
						banner: '// Production Build'
					}	
		}, 	
		cssmin: {
			dev: {
				// expanded syntax
				files: [
				{
					expand: true,
					// the "current working directory" to find file matches in
					cwd: 'styles/',
					// file matching pattern
					src: ['*.css'],
					// where will the files end up?
					dest: 'styles/min/',
					// what will the extension of each compiled file be? Minified version
					ext: '.min.css'
				}
				]
			},

			watch: {
				scripts: {
					// When these files are changed . . . 
					files: ['javascript/main.js', 'javascript/utils.js']
					// run these tasks
					tasks: ['uglify:dev']
				}
			}

		}

	});

	// Our custom tasks
	grunt.registerTask(
		'dev', ['uglify: dev', 'cssmin', 'watch']
	);

	grunt.registerTask(
		'dev', ['uglify: build', 'cssmin']
	);

	// Load in the uglify plugin
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.loadNpmTasks(
		'grunt-contrib-cssmin'
	);
}
