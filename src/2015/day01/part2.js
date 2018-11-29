module.exports = input => {
  let floor = 0;
  for (var i in input.split('')) {
    floor += input[i] === '(' ? 1 : -1;
    if (floor < 0) return Number(i) + 1;
  }
};
