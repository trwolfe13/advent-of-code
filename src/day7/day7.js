function parse(input) {
  const output = {};
  let match;
  const regex = /(\w+) \((\d+)\)( -> (\w+(, \w+)*))?/g;
  while (match = regex.exec(input)) {
    output[match[1]] = { name: match[1], weight: Number(match[2]), children: match[4] ? match[4].split(', ') : [] };
  }
  
  // Convert child name references to actual instances and assign a parent.
  const instances = Object.keys(output).map(n => output[n])
  instances.forEach(node => {
    node.children = node.children.map(n => {
      output[n].parent = node;
      return output[n];
    });
  });
  const rootNode = instances.filter(node => !existsAsChild(output, node))[0];
  calculateWeights(rootNode);
  return rootNode;
}

function existsAsChild(input, node) {
  const nodes = Object.keys(input).map(n => input[n]);
  for (let n = 0; n < nodes.length; n++) {
    if (nodes[n].children.includes(node)) {
      return true;
    }
  }
  return false;
}

function calculateWeights(tree) {
  return tree.totalWeight = tree.weight + tree.children.reduce((total, child) => total + calculateWeights(child), 0);
}

function getUnbalanced(input) {
  const unbalanced = input.children.filter(c => input.children.filter(c2 => c.totalWeight === c2.totalWeight).length === 1);
  if (unbalanced.length === 0) { return input; }
  return getUnbalanced(unbalanced[0]);
}

module.exports = {
  parse,
  part1: function (input) {
    const tree = parse(input);
    return tree.name;
  },
  part2: function (input) {
    const tree = parse(input);
    const unbalanced = getUnbalanced(tree);
    const parent = unbalanced.parent;
    const correctNodes = parent.children.filter(c => parent.children.filter(c2 => c.totalWeight === c2.totalWeight).length > 1)
    const correctWeight = correctNodes[0].totalWeight;
    return unbalanced.weight + (correctWeight - unbalanced.totalWeight);
  }
}