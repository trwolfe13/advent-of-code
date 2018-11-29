module.exports = function (input) {
  return input.split('').reduce((p, c) => p + (c === '(' ? 1 : -1), 0);
}