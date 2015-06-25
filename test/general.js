'use strict';
var expect = require('chai').expect;
var readableToken = require('../src/readableToken');

describe('readable-token', function () {
  it('should be a function', function (done) {
    expect(readableToken).to.be.function;
    done();
  });
  it('should return a string', function (done) {
    var token = readableToken();
    expect(token).to.be.a('string');
    done();
  });
  it('should return a valid string with invalid parameters', function (done) {
    var token = readableToken({
      language: 'xx'
    });
    expect(token).to.be.a('string');
    token = readableToken({
      addition: 'xxxxx'
    });

    expect(token).to.be.a('string');
    done();
  });
});