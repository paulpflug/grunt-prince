module.exports = (grunt) ->
  helper = require("./lib/prince-lib").init(grunt)
  grunt.registerMultiTask "prince", "Your task description goes here.", ->
    @files.forEach (f) ->
      f.src.forEach (src) ->
        grunt.log.writeln "pdf output is: " + f.dest
        
        helper.convert
          code: 90
          args: [
            "--media=print" # Use @print media type
            src
            "--output"
            f.dest
          ]
          done: (err) ->
            grunt.log ">>>", err  if err
