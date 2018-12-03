const string = require('../../util/string');
const array = require('../../util/array');
const overlap = require('./overlap');





module.exports = function (input) {
  const data = string.lines(input).map(overlap.parse);
  const grid = array.grid(1000, 1000, 0);
  data.forEach(r => overlap.draw(grid, r));
  for (let x = 0; x < data.length; x++) {
    if (overlap.untouched(grid, data[x])) { return data[x].id; }
  }
}