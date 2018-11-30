const lookAndSay = require('./look-and-say');

module.exports = function (input) {
  return lookAndSay(input, 40).length;
}