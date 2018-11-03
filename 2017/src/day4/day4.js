const _ = require('lodash');

function passphraseNotDuplicate(input) {
  const words = input.trim().split(/ +/g);
  return words.length === _.uniq(words).length;
}

function passphraseNotAnagrams(input) {
  const words = input.trim().split(/ +/g).map(w => w.split('').sort());
  return words.length === _.uniqWith(words, _.isEqual).length;
}

module.exports = {
  part1: function (input) {
    const phrases = input.match(/[^\r\n]+/g).map(r => r.trim());
    return phrases.filter(passphraseNotDuplicate).length;
  },
  part2: function (input) {
    const phrases = input.match(/[^\r\n]+/g).map(r => r.trim());
    return phrases
      .filter(passphraseNotDuplicate)
      .filter(passphraseNotAnagrams)
      .length;
  }
}