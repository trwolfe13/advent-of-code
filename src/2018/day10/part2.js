const message = require('./message');
const _ = require('lodash');

module.exports = function (input) {
  const points = message.parse(input);
  return message.minBounds(points).seconds;
}