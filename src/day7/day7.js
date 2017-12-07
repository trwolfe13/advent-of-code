const _ = require('lodash');


function parse(input) {
  const output = {};
  let match;
  const regex = /(\w+) \((\d+)\)( -> (\w+(, \w+)*))?/g;
  while (match = regex.exec(input)) {
    output[match[1]] = { name: match[1], weight: Number(match[2]), children: match[4] ? match[4].split(', ') : [] };
  }
  convertToTreeInPlace(output);
  console.log(output);
  return findRoot(output);
}

function convertToTreeInPlace(input) {
  Object.keys(input).map(n => input[n]).forEach(node => {
    node.children = node.children.map(n => input[n]);
  });
}

function containsAsChild(input, node) {
  const nodes = Object.keys(input).map(n => input[n]);
  for (let n = 0; n < nodes.length; n++) {
    if (nodes[n].children.includes(node)) {
      return true;
    }
  }
  return false;
}

function findRoot(input) {
  return Object.keys(input).map(n => input[n]).filter(node => !containsAsChild(input, node))[0];
}

// function getUnbalanced(input) {
//   input.children.forEach
// }

function getWeight(node) {
  return node.weight + node.children.reduce((total, child) => total + getWeight(child), 0);
}

module.exports = {
  parse,
  part1: function (input) {
    const tree = parse(input);
    return tree.name;
  },
  part2: function (input) {
    const tree = parse(input);
    return 0;
  }
}