'use strict';
var fs = require('fs');
var utils = require('./utils');

/**
 * returns a random word from the choosen list
 */
var generateToken = function(options) {
  options = options || {};

  var language = utils.getDirectories('./src/words').indexOf(options.language) > -1 ? options.language : 'en';
  var addition = utils.getFilesWithoutExtension('./src/words/' + language).indexOf(options.addition) > -1 ? options.addition : 'weekdays';

  var adjectives = require('./words/en/adjectives2.json');

  var words = [];
  try {
    words = require('./words/' + language + '/' + addition + '.json');
  }
  catch(e) {
    throw new Error('Could not find a word list with the given parameters!');
  }

  return utils.getRandomWord(adjectives) + '-' + utils.getRandomWord(words) + '-' + utils.getRandomInt(1, 100);

};


module.exports = generateToken;
