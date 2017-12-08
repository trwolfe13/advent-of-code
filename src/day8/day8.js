    const evaluators = {
      '<': (l, r) => l < r, '<=': (l, r) => l <= r,
      '>': (l, r) => l > r, '>=': (l, r) => l >= r,
      '==': (l, r) => l === r, '!=': (l, r) => l !== r,
    };
    
    function execute(input) {
      const register = { max: 0, values: {} };
      const regex = /(\w+) (inc|dec) (-?\d+) if (\w+) ([<>!=]{1,2}) (-?\d+)/g;
      let m;
      while (m = regex.exec(input)) {
        if (!evaluators[m[5]](Number(register.values[m[4]] || '0'), Number(m[6]))) { continue; }
        register.values[m[1]] = (register.values[m[1]] || 0) + (Number(m[3]) * (m[2] === 'dec' ? -1 : 1));
        register.max = Math.max(register.values[m[1]], register.max);
      }
      return register;
    }
    
    module.exports = {
      part1: function (input) {
        const register = execute(input);
        return Math.max(...Object.keys(register.values).map(r => register.values[r]));
      },
      part2: function (input) {
        return execute(input).max;
      }
    }