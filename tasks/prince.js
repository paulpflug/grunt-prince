(function() {
  module.exports = function(grunt) {
    var helper;
    helper = require("./lib/prince-lib").init(grunt);
    return grunt.registerMultiTask("prince", "Your task description goes here.", function() {
      return this.files.forEach(function(f) {
        return f.src.forEach(function(src) {
          grunt.log.writeln("pdf output is: " + f.dest);
          return helper.convert({
            code: 90,
            args: ["--media=print", "--javascript", src, "--output", f.dest],
            done: function(err) {
              if (err) {
                return grunt.log(">>>", err);
              }
            }
          });
        });
      });
    });
  };

}).call(this);
