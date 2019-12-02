function moduleFuel(moduleMass) {
  return Math.floor(moduleMass / 3) - 2;
}

function allFuel(moduleMass) {
  let fuel = moduleFuel(moduleMass);
  let sum = fuel;
  while (fuel > 0) {
    fuel = moduleFuel(fuel);
    sum += fuel;
  }
  return sum;
}

module.exports = {
  moduleFuel,
  allFuel
};
