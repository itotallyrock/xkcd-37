'use strict'

module.exports = function xkcd37 (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  return str.replace(/(\w+?)(?!\\)+(-ass)(\s+)(\S+?)/g, '$1$2ass-$3').replace(/\\-/g, '-');
}
