const day10 = require('../day10/day10');

const list = n => [...Array(n).keys()];
const hash = i => k => day10.part2(`${i}-${k}`)
const truthCount = a => a.filter(e => e).length;
const sum = (p, c) => p + c;
const concat = (p, c) => p.concat(c);
const hex2bin = hex => hex.split('').map(h => parseInt(h, 16).toString(2).padStart(4, '0').split('').map(Number)).reduce(concat);
const binary = i => list(128).map(hash(i)).map(hex2bin);

function tree(data) {
  const output = {};
  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      if (!data[y][x]) { continue; }
      const n = [];
      if (x > 0 && data[y][x - 1]) { n.push(`${x - 1},${y}`); };
      if (y > 0 && data[y - 1][x]) { n.push(`${x},${y - 1}`); };
      if (x < data[y].length - 1 && data[y][x + 1]) { n.push(`${x + 1},${y}`); };
      if (y < data.length - 1 && data[y + 1][x]) { n.push(`${x},${y + 1}`); };
      output[`${x},${y}`] = n;
    }
  }
  return output;
}

function map(tree, node, history) {
  const stack = [node];
  while (stack.length) {
    const node = stack.pop();
    if (!history.includes(node)) {
      history.push(node);
      tree[node].forEach(child => {
        stack.push(child);
      })
    }
  }
}

function count(tree) {
  let total = 0, history = [];
  Object.keys(tree).forEach(node => {
    if (history.includes(node)) return;
    map(tree, node, history); total++;
  });
  return total;
}

module.exports = {
  tree,
  count,
  toBinary: hex2bin,
  part1: function (input) {
    return binary(input).map(truthCount).reduce(sum, 0);
  },
  part2: function (input) {
    const d = binary(input);
    const t = tree(d);
    return count(t);
  }
}