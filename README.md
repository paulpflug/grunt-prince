# grunt-prince

A simple [Grunt][grunt] multitask that uses [prince][prince] to convert HTML files to PDF.
Convertion to PDF takes care of `@media print` CSS rules and preserves links to remote web pages.

Nearly everything is copied over from [grunt-wkhtmltopdf](https://github.com/dharFr/grunt-wkhtmltopdf).

## Getting Started

### Setting up prince 

Download and install prince from the [project page][prince_dl].

Make sure `prince` is accessible from your `PATH` (Try `prince ` in your Terminal). 

### Use it with grunt

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-prince`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-prince');
```

[prince]: http://www.princexml.com/
[prince_dl]: http://www.princexml.com/download/
[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
Simply add task definition in your gruntfile. See the folllowing example:

```javascript
    //...
    prince: {
      dev: {
        src: 'path/to/some/html/file/*.html',
        dest: 'pdf/output/'
      },
      prod: {
        src: 'path/to/some/html/file/*.html',
        dest: 'pdf/output/'
      }
    },
    //...
```

Run `grunt prince` to execute all the targets or `grunt prince:targetname` to execute a specific target. Every `html` file defined by the `src` parameter will be turned into a PDF and saved to `dest` folder.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History

 - *v0.0.1*: First Release

## License
Copyright (c) 2014 Paul Pflugradt
Licensed under the MIT license.
