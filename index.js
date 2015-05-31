/**
 * returns a random integer between min and max
 * @returns int
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * returns a random word from the choosen list
 */
var Generator = function(language, list) {
  if (!language) language = 'en';
  if (!list) list = 'nouns';

  var words = [];
  try {
    words = require('./words/' + language + '/' + list + '.json').words;
  }
  catch(e) {
    throw new Error('Could not find a word list with the given parameters!');
  }

  var random = getRandomInt(0, words.length - 1);

  return words[random] + getRandomInt(1, 100);

};


module.exports = Generator;
