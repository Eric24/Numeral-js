# [Numeral.js](http://numeraljs.com/)

A javascript library for formatting and manipulating numbers.

[Website and documentation](http://numeraljs.com/)

Originally forked from [Numeral.js](https://github.com/adamwdraper/Numeral-js) [v2.0.6](https://github.com/adamwdraper/Numeral-js/commit/7de892ffb438af6e63b9c4f6aff0c9bc3932f09f)

# Original [Numeral.js](http://numeraljs.com/) Travis Build Status

Master [![Build Status](https://api.travis-ci.org/adamwdraper/Numeral-js.svg)](https://travis-ci.org/adamwdraper/Numeral-js)

Develop [![Build Status](https://travis-ci.org/adamwdraper/Numeral-js.svg?branch=develop)](https://travis-ci.org/adamwdraper/Numeral-js)

# Contributing

#### Important: Please create your branch from and submit pull requests to the `develop` branch. All pull requests must include the appropriate tests.

1. Fork the library

2. [Install grunt](http://gruntjs.com/getting-started#installing-the-cli)

3. Run `npm install` to install dependencies

4. Create a new branch from `develop`

5. Add your tests to the files in `/tests`

6. To test your tests, run `grunt`

7. When all your tests are passing, run `grunt dist` to compile and minify all files

8. Submit a pull request to the `develop` branch.

### Formats

Formats now exist in their own files and act more or less as plugins. Check out the [bytes format](https://github.com/Eric24/Numeral-js/blob/master/src/formats/bytes.js) for an example of how to create one.

### Locales

When naming locale files use the [ISO 639-1 language codes](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) supplemented by [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes when necessary.

### Locale translations will not be merged without unit tests.

See [the english unit tests](https://github.com/Eric24/Numeral-js/blob/master/tests/locales/en-gb.js) for an example.

# Changelog

### 2.0.7

Initial release after fork

# Acknowlegements

Numeral.js, while less complex, was inspired by and heavily borrowed from [Moment.js](http://momentjs.com)

# License

Numeral.js is freely distributable under the terms of the MIT license. See the [LICENSE](https://github.com/Eric24/Numeral-js/blob/master/LICENSE) file.
