module.exports = {
  part1: function (input) {
    return input.split('').reduce((p, c) => p + ((c === '(') ? 1 : -1), 0);
  },
  part2: function (sequence) {

  }
}