const index = (row, column) => 0.5 * Math.pow(column, 2) + (row - 0.5) * column + 0.5 * Math.pow(row, 2) - 1.5 * row + 1;
const code = index => {
  let i = 1, c = 20151125;
  while (i < index) { c *= 252533; c %= 33554393; i++; }
  return c;
}

module.exports = function (input) {
  const row = 2978, column = 3083;
  const idx = index(row, column);
  return code(idx);
}