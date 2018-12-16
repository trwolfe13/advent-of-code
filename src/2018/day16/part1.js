const operations = require('./operations');
const _ = require('lodash');

module.exports = function (input) {
  const tests = operations.parse(input);
  const behaviors = tests.map(operations.testBehavior);
  return behaviors.filter(t => t.length >= 3).length;
}