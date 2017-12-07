const _ = require('lodash');


function parse(input) {
  const output = {};
  let match;
  const regex = /(\w+) \((\d+)\)( -> (\w+(, \w+)*))?/g;
  while (match = regex.exec(input)) {
    output[match[1]] = { name: match[1], weight: Number(match[2]), children: match[4] ? match[4].split(', ') : undefined };
  }
  return output;
}

function containsAsChild(input, name) {
  const nodes = Object.keys(input).map(n => input[n]);
  for(let n = 0; n < nodes.length; n++) {
    const children = nodes[n].children;
    if (children && children.includes(name)) {
      return true;
    }
  }
  return false;
}

function findRoots(input) {
  return Object.keys(input).filter(name => !containsAsChild(input, name));
}

module.exports = {
  parse,
  part1: function (input) {
    const tree = parse(input);
    return findRoots(tree)[0];
  },
  part2: function (input) {
    return 0;
  }
}