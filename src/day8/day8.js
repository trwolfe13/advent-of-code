const _ = require('lodash');

function evaluate(left, condition, right) {
  switch (condition) {
    case '<': return left < right;
    case '<=': return left <= right;
    case '>': return left > right;
    case '>=': return left >= right;
    case '==': return left === right;
    case '!=': return left !== right;
  }
  throw new Error('Unrecognized condition: ' + condition);
}

function parse(input) {
  const output = [];
  let match;
  const regex = /(\w+) (inc|dec) (-?\d+) if (\w+) ([<>!=]{1,2}) (-?\d+)/g;
  while (match = regex.exec(input)) {
    let m = match;
    output.push(register => {
      if (evaluate(Number(register[m[4]] || '0'), m[5], Number(m[6]))) {
        let val = register[m[1]] || 0;
        if (m[2] === 'inc') {
          val += Number(m[3]);
        } else {
          val -= Number(m[3]);
        }
        register[m[1]] = val;
      }
    });
  }
  return output
}

module.exports = {
  parse,
  part1: function (input) {
    const register = {};
    const instructions = parse(input);
    instructions.forEach(i => i(register));
    return _.max(Object.keys(register).map(r => register[r]));
  },
  part2: function (input) {
    const tree = parse(input);
    return 0;
  }
}