const evaluators = {
  '<': (l, r) => l < r,
  '<=': (l, r) => l <= r,
  '>': (l, r) => l > r,
  '>=': (l, r) => l >= r,
  '==': (l, r) => l === r,
  '!=': (l, r) => l !== r,
};

function parse(input) {
  const output = [], regex = /(\w+) (inc|dec) (-?\d+) if (\w+) ([<>!=]{1,2}) (-?\d+)/g;
  let match;
  while (match = regex.exec(input)) {
    let m = match;
    output.push(register => {
      if (evaluators[m[5]](Number(register.values[m[4]] || '0'), Number(m[6]))) {
        const val = (register.values[m[1]] || 0) + (Number(m[3]) * (m[2] === 'dec' ? -1 : 1));
        register.values[m[1]] = val;
        register.max = Math.max(val, register.max);
      }
    });
  }
  return output;
}

module.exports = {
  parse,
  part1: function (input) {
    const register = { max: 0, values: {} };
    const instructions = parse(input);
    instructions.forEach(i => i(register));
    return Math.max(...Object.keys(register.values).filter(k => k !== '_max').map(r => register.values[r]));
  },
  part2: function (input) {
    const register = { max: 0, values: {} };
    const instructions = parse(input);
    instructions.forEach(i => i(register));
    return register.max;
  }
}