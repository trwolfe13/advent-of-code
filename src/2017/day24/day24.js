const parse = i => i.match(/[^\r\n]+/g).map(n => n.trim().split('/').map(Number));

function buildTree (node, connectors, parent = undefined, using = 0, weight = 0) {
  const current = {
    connector: node,
    children: [],
    parent,
    using,
    weight: node[0] + node[1] + (parent ? parent.weight : 0),
    length: 1 + (parent ? parent.length : 0),
  };

  const availablePort = node.filter(p => p !== using)[0] || node[0];
  connectors.forEach(connector => {
    if (connector[0] === availablePort || connector[1] === availablePort) {
      const remainingConnectors = connectors.filter(c => c !== connector);
      current.children.push(buildTree(connector, remainingConnectors, current, availablePort));
    }
  });

  return current;
}

const trees = connectors => {
  const rootConnectors = connectors.filter(c => c[0] === 0 || c[1] === 0);
  const nonRoots = connectors.filter(c => c[0] !== 0 && c[1] !== 0);
  return rootConnectors.map(rc => buildTree(rc, nonRoots));
}

function strongestPath (node) {
  if (node.children.length === 0) { return node.weight; }
  return Math.max(...node.children.map(strongestPath));
}

function andrexPath (node) {
  let andrexNode = node;
  node.children.forEach(child => {
    const aNode = andrexPath(child);
    if (!andrexNode || aNode.length > andrexNode.length || aNode.length === andrexNode.length && aNode.weight > andrexNode.weight) {
      andrexNode = aNode;
    }
  })
  return andrexNode;
}

module.exports = {
  parse,
  buildTree,
  strongestPath,
  part1: function (input) {
    const connectors = parse(input);
    const roots = connectors.filter(c => c[0] === 0 || c[1] === 0);
    const nonRoots = connectors.filter(c => !roots.includes(c));
    const trees = roots.map(root => buildTree(root, nonRoots));
    return Math.max(...trees.map(strongestPath));
  },
  part2: function (input) {
    const connectors = parse(input);
    const roots = connectors.filter(c => c[0] === 0 || c[1] === 0);
    const nonRoots = connectors.filter(c => !roots.includes(c));
    const trees = roots.map(root => buildTree(root, nonRoots));
    return Math.max(...trees.map(andrexPath).map(n => n.weight));
  }
}
