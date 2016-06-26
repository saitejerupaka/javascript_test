
module.exports = function(grunt) {

grunt.initConfig({
  watch: {
  livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '*.html'
        ]
      }
  },
  connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729,
        open: 'http://localhost:9000/security.html', // target url to open
      },
      livereload: {
        options: {
          open: true
        }
      },
  }

   
});
grunt.loadNpmTasks('grunt-open');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', [ 'connect:livereload', 'watch']);
};