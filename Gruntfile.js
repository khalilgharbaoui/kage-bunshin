// Project configuration.
module.exports = function(grunt){
  grunt.initConfig({
    jshint: {
      all : ['Gruntfile.js', 'app/scripts/**/*js']
    },
    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true,
          open: {
            target: 'http://localhost:9000'
          }
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['jshint', 'connect']);
};
