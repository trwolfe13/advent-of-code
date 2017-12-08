const _ = require('lodash');


function parse(input) {
  const output = {};
  let match;
  const regex = /(\w+) \((\d+)\)( -> (\w+(, \w+)*))?/g;
  while (match = regex.exec(input)) {
    output[match[1]] = { name: match[1], weight: Number(match[2]), children: match[4] ? match[4].split(', ') : [] };
  }
  convertToTreeInPlace(output);
  return findRoot(output);
}

function convertToTreeInPlace(input) {
  Object.keys(input).map(n => input[n]).forEach(node => {
    node.children = node.children.map(n => {
      input[n].parent = node;
      return input[n];
    });
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

function getUnbalanced(input) {
  const unbalanced = input.children.filter(c => input.children.filter(c2 => c.totalWeight === c2.totalWeight).length === 1);
  if (unbalanced.length === 0) {
    return input;
  } else {
    return getUnbalanced(unbalanced[0]);
  }
}

function totalWeight(tree) {
  return tree.totalWeight = tree.weight + tree.children.reduce((total, child) => total + totalWeight(child), 0);
}

module.exports = {
  parse,
  part1: function (input) {
    const tree = parse(input);
    return tree.name;
  },
  part2: function (input) {
    const tree = parse(input);
    totalWeight(tree);
    const unbalanced = getUnbalanced(tree);
    const parent = unbalanced.parent;
    const correctNodes = parent.children.filter(c => parent.children.filter(c2 => c.totalWeight === c2.totalWeight).length > 1)
    const correctWeight = correctNodes[0].totalWeight;
    return unbalanced.weight + (correctWeight - unbalanced.totalWeight);
  }
}