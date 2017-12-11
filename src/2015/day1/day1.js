module.exports = {
  part1: function (input) {
    return input.split('').reduce((p, c) => p + ((c === '(') ? 1 : -1), 0);
  },
  part2: function (input) {
    let floor = 0;
    for (let i = 0, c = input[0]; i < input.length; i++ , c = input[i]) {
      floor += (c === '(') ? 1 : -1;
      if (floor < 0) { return i + 1; }
    }
  }
}