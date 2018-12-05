const housePresents = number => {
  let presents = 0;
  for (let x = 1; x <= number; x++) {
    presents += Number.isInteger(number / x) ? x * 10 : 0;
  }
  return presents;
}

const firstHouse = (target, startAt, skip) => {
  let x = startAt;
  while (true) {
    if (housePresents(x) >= target) { return x; }
    x += skip;
  }
}

module.exports = function (input) {
  const target = Number(input), skip = 200;
  let x = firstHouse(target, 0, skip);
  x -= skip;
  return firstHouse(target, x, 1);
}