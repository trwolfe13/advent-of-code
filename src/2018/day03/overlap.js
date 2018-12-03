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

const untouched = (grid, r) => {
  for (let x = r.left; x < r.right; x++) {
    for (let y = r.top; y < r.bottom; y++) {
      if (grid[x][y] !== 1) { return false; }
    }
  }
  return true;
};

module.exports = {
  parse,
  draw,
  overlap,
  untouched
};