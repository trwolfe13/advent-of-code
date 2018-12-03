const _ = require('lodash');
const array = require('../../util/array');
const string = require('../../util/string');

const parse = input => string.lines(input).map(l => {
  const [_, id, a] = l.match(/Sue (\d+): (.+)/);
  const result = { id, attrs: {} };
  a.split(',').forEach(p => {
    const [n, c] = p.split(':').map(n => n.trim());
    result.attrs[n] = Number(c);
  });
  return result;
});

const isMatch = (o, m) => Object.keys(o.attrs).every(k => o.attrs[k] === m[k]);

const model = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

module.exports = function (input) {
  const aunts = parse(input);
  return aunts.find(o => isMatch(o, model)).id;
}