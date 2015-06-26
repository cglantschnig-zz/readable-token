'use strict';

var fs    = require('fs');
var path  = require('path');

/**
 * returns a random integer between min and max
 * @returns int
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * returns a random string from a given array of strings
 * @returns string
 */
function getRandomWord(list) {
  if (!list.length) throw new Error('A list of strings is required!');
  var random_number = getRandomInt(0, list.length - 1);
  return list[random_number];
}

/**
 * returns the names of subdirectories of the given directories
 * @param srcpath
 * @returns Array
 */
function getDirectories(srcpath) {
  srcpath = path.join(__dirname, srcpath);
  return fs.readdirSync(srcpath)
    .filter(function(file) {
      return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

/**
 * returns the files without extension in a given directory
 * @param srcpath
 * @returns {Array}
 */
function getFilesWithoutExtension(srcpath) {
  srcpath = path.join(__dirname, srcpath);
  return fs.readdirSync(srcpath)
    .filter(function(file) {
      return fs.statSync(path.join(srcpath, file)).isFile();
    })
    .map(function(filename) {
      return filename.substr(0, filename.lastIndexOf('.'));
    });
}

module.exports = {
  getRandomInt: getRandomInt,
  getRandomWord: getRandomWord,
  getDirectories: getDirectories,
  getFilesWithoutExtension: getFilesWithoutExtension
};
