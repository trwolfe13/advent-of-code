const nodes = require('./nodes');

module.exports = function (input) {
  const stream = input.split(' ').map(Number);
  const root = nodes.parseNode(stream);
  return root.value;
}