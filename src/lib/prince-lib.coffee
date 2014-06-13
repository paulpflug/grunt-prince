exports.init = (grunt) ->
  "use strict"
  convert: (options) ->
    if not options or not options.args
      grunt.warn "You need to specify atleast one input file, and exactly one output file"
      return null
    done = grunt.task.current.async()
    worker = grunt.util.spawn {
      cmd: "prince"
      args: options.args
    }, (err, result, code) ->
      unless err
        options.done null
        grunt.log.writeln "prince done"
      else
        
        # Something went horribly wrong.
        grunt.verbose.or.writeln()
        grunt.log.write("Running prince...").error()
        if code is 127
          grunt.log.errorlns "In order for this task to work properly, prince must be " + "installed and in the system PATH (if you can run \"prince\" at" + " the command line, this task should work). Unfortunately, " + "prince cannot be installed automatically via npm or grunt. "
          grunt.warn "prince not found.", options.code
        else
          grunt.warn "prince exited unexpectedly with exit code " + code + ".", options.code
        options.done code
      done()

