
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var Generator = function() {

  var words = require('./words/en/nouns.json').words;

  var random = getRandomInt(0, words.length - 1);

  return words[random] + getRandomInt(1, 100);

};


module.exports = Generator;
