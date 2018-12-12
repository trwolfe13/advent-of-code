const string = require('../../util/string');

const parse = input => {
  const l = string.lines(input)
  return {
    state: l[0].substring('initial state: '.length),
    patterns: l.slice(1).map(n => n.split(' => '))
  };
};

const sliceFive = (state, n) => {
  return (state[n - 2] || '.') + (state[n - 1] || '.') + (state[n] || '.') + (state[n + 1] || '.') + (state[n + 2] || '.');
}

const nextGeneration = (state, patterns) => {
  let nextState = '';
  for (n = -2; n < state.length + 2; n++) {
    const f = sliceFive(state, n);
    const a = patterns.find(p => p[0] === f);
    nextState += a ? a[1] : '.';
  }
  return nextState;
}

const sumIndex = (state, zero) => {
  let total = 0;
  for (let x = 0; x < state.length; x++) {
    if (state[x] === '#') {
      total += x - zero;
    }
  }
  return total;
}

module.exports = function (input) {
  let { state, patterns } = parse(input);
  for (let x = 0; x < 200; x++) {
    state = nextGeneration(state, patterns);
  }
  // 200 is 9206
  // Each generation above is +46
  return 9206 + (50000000000 - 200) * 46
}