const elves = require('./elves');

module.exports = function (input) {
  const target = Number(input), skip = 40;
  let x = elves.firstHouse(target, 0, skip, elves.housePresentsMax);
  x -= skip;
  return elves.firstHouse(target, x, 1, elves.housePresentsMax);
}