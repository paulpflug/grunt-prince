(function() {
  var helper;

  module.exports = function(grunt) {};

  helper = require("./lib/prince-lib").init(grunt);

  grunt.registerMultiTask("prince", "Your task description goes here.", function() {
    return this.files.forEach(function(f) {
      return f.src.forEach(function(src) {
        grunt.log.writeln("pdf output is: " + f.dest);
        return helper.convert({
          code: 90,
          args: ["--media=print", src, "--output", f.dest],
          done: function(err) {
            if (err) {
              return grunt.log(">>>", err);
            }
          }
        });
      });
    });
  });

}).call(this);
