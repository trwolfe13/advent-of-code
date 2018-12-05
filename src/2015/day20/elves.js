const housePresents = (number) => {
  let presents = 0;
  for (let x = 1; x <= number; x++) {
    const maxHouse = 
    presents += Number.isInteger(number / x) ? x * 10 : 0;
  }
  return presents;
}

const housePresentsMax = (number) => {
  let presents = 0;
  for (let x = 1; x <= number; x++) {
    const maxHouse = 
    presents += Number.isInteger(number / x) && x * 50 >= number ? x * 11 : 0;
  }
  return presents;
}

const firstHouse = (target, startAt, skip, method = housePresents) => {
  let x = startAt;
  while (true) {
    if (method(x) < target) {
      x += skip;
    } else {
      return x;
    }
  }
}

module.exports = {
  housePresents,
  housePresentsMax,
  firstHouse
};
