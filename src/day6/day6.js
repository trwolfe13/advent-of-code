const _ = require('lodash');

function parse(input) {
  return input.split(/ +/g).map(Number);
}

function reallocate(input) {
  const output = input.slice(0);
  const maxIndex = output.indexOf(_.max(input));

  const stack = output[maxIndex];
  output[maxIndex] = 0;
  for (let x = maxIndex + 1; x <= maxIndex + stack; x++) {
    output[x % output.length] += 1;
  }
  return output;
}

module.exports = {
  reallocate,
  part1: function (input) {
    let arr = parse(input);
    const states = [arr];
    let steps = 0;
    while (true) {
      arr = reallocate(arr);
      steps++;
      if (states.find(a => _.isEqual(a, arr))) {
        return steps;
      }
      states.push(arr);
    }
  },
  part2: function (input) {

  }
}