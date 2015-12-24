module.exports = function( grunt ){

	/*grunt.registerTask('speak', function(){
		console.log("I'm speaking!");
	});

	grunt.registerTask('yell', function(){
		console.log("I'm yelling!");
	});

	//grunt.registerTask('both', ['speak','yell']);
	grunt.registerTask('default', ['speak','yell']);
	*/

	grunt.initConfig({
	  concat: {
	    js: {
	      src: ['js/scriptA.js', 'js/scriptB.js'],
	      dest: 'build/js/scripts.js',
	    },
	    css: {
	      src: ['css/styleA.css', 'css/styleB.css'],
	      dest: 'build/css/styles.css',
	    }
	  },
	  watch: {
		  js: {
		    files: ['js/**/*.js'],
		    tasks: ['concat']
		  },
		  css: {
		    files: ['css/**/*.css'],
		    tasks: ['concat']
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

};