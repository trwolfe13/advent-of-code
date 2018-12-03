const lights = require('./lights');

module.exports = function (input) {
  let grid = lights.parse(input);
  for (let x = 0; x < 100; x++) {
    grid = lights.step(grid);
  }
  return lights.count(grid, c => c === lights.ON);
};
