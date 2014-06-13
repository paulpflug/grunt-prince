module.exports = (grunt) ->
  
  # Load grunt tasks automatically
  require("load-grunt-tasks") grunt
  require("time-grunt") grunt
  grunt.initConfig
    watch:
      coffee:
        files: ["src/**/*.coffee"]
        tasks: ['newer:coffee']
    coffee:
      compile:
        files: [
          expand: true,
          cwd: 'src/',
          src: '**/*.coffee',
          ext: ".js",
          dest: 'tasks/'          
        ]


  grunt.registerTask "default", [
    "coffee"
    "watch"
  ]

