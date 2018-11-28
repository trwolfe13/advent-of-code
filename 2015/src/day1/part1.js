const process = (input, start = 0) => input.split('').reduce((p, c) => p + (c === '(' ? 1 : -1), start);

module.exports = {
  process
};
