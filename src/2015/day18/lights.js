const _ = require('lodash');

const array = require('../../util/array');
const string = require('../../util/string');

const ON = '#';
const OFF = '.';

const parse = input => string.lines(input).map(string.chars);

const step = grid => {
  const newGrid = [];
  grid.forEach((r, y) => {
    const row = [];
    newGrid.push(row);
    r.forEach((c, x) => {
      const on = array.neighbours(grid, x, y).filter(n => n === ON);
      if (grid[y][x] === ON) {
        if (on.length !== 2 && on.length !== 3) {
          row.push(OFF);
        } else {
          row.push(grid[y][x]);
        }
      } else {
        if (on.length === 3) {
          row.push(ON);
        } else {
          row.push(grid[y][x]);
        }
      }
    });
  });

  return newGrid;
};

const count = (grid, condition) => grid.reduce((p, c) => p + c.filter(condition).length, 0);

module.exports = {
  parse,
  count,
  step,
  ON,
  OFF
};
