const _ = require('lodash');

function parseNumbers (sequence) {
  const rows = sequence.match(/[^\r\n]+/g).map(r => r.trim());

  return rows
    .map(row => row.split(/ +/g).map(n => Number(n)))
    .filter(array => array.length > 1);
}

module.exports = {
  part1: function (sequence) {
    const rows = parseNumbers(sequence);
    let total = 0;
    rows.forEach(row => {
      const max = _.max(row);
      const min = _.min(row);
      total += max - min;
    });
    return total;
  },
  part2: function (sequence) {
    const rows = parseNumbers(sequence);
    let total = 0;
    rows.forEach(row => {
      row.forEach((n1, i1) => {
        row.forEach((n2, i2) => {
          if (i1 !== i2) {
            const res = n1 / n2;
            if (res % 1 === 0) {
              total += res;
            }
          }
        });
      });
    });
    return total;
  }
}