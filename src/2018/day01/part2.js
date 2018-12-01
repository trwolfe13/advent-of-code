const string = require('../../util/string');

module.exports = function (input) {
  const prev = [0];
  let acc = 0;
  const lines = string.lines(input);
  while(true) {
    for (let x = 0; x < lines.length; x++) {
      acc += Number(lines[x]);
      if (prev.includes(acc)) { return acc; }
      prev.push(acc);
    }
  }
}