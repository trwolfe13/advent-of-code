const lights = require('./lights');

const turnOnCorners = grid => {
  grid[0][0] = lights.ON;
  grid[0][99] = lights.ON;
  grid[99][0] = lights.ON;
  grid[99][99] = lights.ON;
}

module.exports = function (input) {
  let grid = lights.parse(input);
  turnOnCorners(grid);

  for (let x = 0; x < 100; x++) {
    grid = lights.step(grid);
    turnOnCorners(grid);
  }
  return lights.count(grid, c => c === lights.ON);
};
