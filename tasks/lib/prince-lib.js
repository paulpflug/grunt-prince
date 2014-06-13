(function() {
  exports.init = function(grunt) {
    "use strict";
    return {
      convert: function(options) {
        var done, worker;
        if (!options || !options.args) {
          grunt.warn("You need to specify atleast one input file, and exactly one output file");
          return null;
        }
        done = grunt.task.current.async();
        return worker = grunt.util.spawn({
          cmd: "prince",
          args: options.args
        }, function(err, result, code) {
          if (!err) {
            options.done(null);
            grunt.log.writeln("prince done");
          } else {
            grunt.verbose.or.writeln();
            grunt.log.write("Running prince...").error();
            if (code === 127) {
              grunt.log.errorlns("In order for this task to work properly, prince must be " + "installed and in the system PATH (if you can run \"prince\" at" + " the command line, this task should work). Unfortunately, " + "prince cannot be installed automatically via npm or grunt. ");
              grunt.warn("prince not found.", options.code);
            } else {
              grunt.warn("prince exited unexpectedly with exit code " + code + ".", options.code);
            }
            options.done(code);
          }
          return done();
        });
      }
    };
  };

}).call(this);
