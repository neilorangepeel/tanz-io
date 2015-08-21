module.exports = function(grunt) {

	grunt.initConfig({
	  svgstore: {
	    options: {
			prefix : 'icon-',
		},
	    default : {
	      files: {
	        'includes/defs.svg': ['icons/*.svg'],
	      },
	    },
	  },
	});
	grunt.loadNpmTasks('grunt-svgstore');

};
