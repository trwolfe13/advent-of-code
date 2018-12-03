const string = require('../../util/string');
const array = require('../../util/array');

const parse = input => {
  const [_, id, x, y, w, h] = input.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);
  return { id, left: Number(x), top: Number(y), right: Number(x) + Number(w), bottom: Number(y) + Number(h) };
}

const draw = (grid, r) => {
  for (let x = r.left; x < r.right; x++) {
    for (let y = r.top; y < r.bottom; y++) {
      grid[x][y]++;
    }
  }
};

const overlap = (grid) => {
  let count = 0;
  grid.forEach(x => {
    count += x.filter(y => y > 1).length;
  })
  return count;
};

module.exports = function (input) {
  const data = string.lines(input).map(parse);
  const grid = array.grid(1000, 1000, 0);
  data.forEach(r => draw(grid, r));
  return overlap(grid);
}