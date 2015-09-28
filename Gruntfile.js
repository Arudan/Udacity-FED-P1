/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2280,
            height: 700,
            aspectRatio: false,
            suffix: '_slider_2x',
            quality: 30,
          },{
            width: 1140,
            height: 350,
            aspectRatio: false,
            suffix: '_slider_1x',
            quality: 30,
          },{
            width: 555,
            height: 300,
            aspectRatio: false,
            suffix: '_cover_1x',
            quality: 30,
          },{
            width: 1110,
            height: 600,
            aspectRatio: false,
            suffix: '_cover_2x',
            quality: 30,
          },],
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/',
        },],
      },
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images'],
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
