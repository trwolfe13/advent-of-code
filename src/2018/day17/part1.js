const array = require('../../util/array');
const string = require('../../util/string');

const WALL = '#', EMPTY = '.', WATER = '~';

const parse = input => {
  const data = string.lines(input)
    .map(n => {
      const d = n.match(/(\w)=(\d+), (\w)=(\d+)..(\d+)/).slice(1);
      return {
        x: (d[0] === 'x' ? [d[1], d[1]] : [d[3], d[4]]).map(Number),
        y: (d[0] === 'y' ? [d[1], d[1]] : [d[3], d[4]]).map(Number)
      }
    });

  const minX = Math.min(...data.map(d => Math.min(...d.x)));
  const maxX = Math.max(...data.map(d => Math.max(...d.x)));
  const maxY = Math.max(...data.map(d => Math.max(...d.y)));
  const grid = array.grid(maxX + 2, maxY + 1, EMPTY);
  data.forEach(d => {
    for (let x = d.x[0]; x <= d.x[1]; x++) {
      for (let y = d.y[0]; y <= d.y[1]; y++) {
        grid[y][x] = WALL;
      }
    }
  });
  return {
    minX,
    maxX,
    maxY,
    grid
  };
}

const moveDown = state => {
  const g = state.grid;
  let moved = false;
  g[0][500] = WATER;
  for (let y = g.length - 1; y >= 0; y--) {
    for (let x = 0; x < g[y].length; x++) {
      if (g[y][x] !== WATER) { continue; }
      if (y < g.length - 1) {
        if (g[y + 1][x] === EMPTY) {
          g[y + 1][x] = WATER;
          g[y][x] = EMPTY;
          moved = true;
        }
      }
    }
  }
  return moved;
}

const moveSideways = state => {
  const g = state.grid;
  g[0][500] = WATER;

  let moved = false;
  for (let y = g.length - 1; y >= 0; y--) {
    for (let x = 0; x < g[y].length; x++) {
      if (g[y][x] !== WATER) { continue; }
      if (y >= g.length - 1 || g[y + 1][x] !== WALL) { continue; }
      if (x > 0 && g[y][x - 1] === EMPTY) {
        g[y][x - 1] = WATER;
        g[y][x] = EMPTY;
        moved = true;
      } else if (x < g[y].length - 1 && g[y][x + 1] === EMPTY) {
        g[y][x + 1] = WATER;
        g[y][x] = EMPTY;
        moved = true;
      }
    }
  }
  return moved;
}

const animateWater = state => {
  // const g = state.grid;
  let moved = false;

  do {
    do { moved = moveDown(state); } while (moved);
    moved = moveSideways(state);
  } while (moved)

  return false;
  // if (g[0][500] === WATER) return false;
  // g[0][500] = WATER;
  // return true;
}

const countWater = state => state.grid.reduce((p, c) => p + c.filter(x => x === WATER).length, 0);

module.exports = function (input) {
  const state = parse(input);
  let count = 0;
  while (animateWater(state) && ++count <= 1) {
    console.log('Step', count);
    array.drawGrid(state.grid, 494, 507, 0, 13);
  }
  console.log('Final State');
  array.drawGrid(state.grid, 494, 507, 0, 13);
  return countWater(state);
}