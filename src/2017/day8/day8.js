
const evaluators = {
  '<': (l, r) => l < r, '<=': (l, r) => l <= r,
  '>': (l, r) => l > r, '>=': (l, r) => l >= r,
  '==': (l, r) => l === r, '!=': (l, r) => l !== r,
};

function execute (input, history = {}) {
  const register = { max: 0, values: {} };
  const regex = /(\w+) (inc|dec) (-?\d+) if (\w+) ([<>!=]{1,2}) (-?\d+)/g;
  let m;
  let steps = 0;
  while (m = regex.exec(input)) {
    if (evaluators[m[5]](Number(register.values[m[4]] || '0'), Number(m[6]))) {
      register.values[m[1]] = (register.values[m[1]] || 0) + (Number(m[3]) * (m[2] === 'dec' ? -1 : 1));
      register.max = Math.max(register.values[m[1]], register.max);
    }

    if (!history[m[1]]) {
      history[m[1]] = [];
      for (let n = 0; n < steps; n++) {
        history[m[1]].push(0);
      }
    }
    Object.keys(history).forEach(r => {
      if (r === m[1]) {
        history[r].push(register.values[m[1]]);
      } else {
        history[r].push(history[r][history[r].length - 1]);
      }
    });

    steps++;
  }
  console.log(steps);
  return register;
}

module.exports = {
  part1: function (input, history) {
    const register = execute(input, history);
    return Math.max(...Object.keys(register.values).map(r => register.values[r]));
  },
  part2: function (input) {
    return execute(input).max;
  }
}