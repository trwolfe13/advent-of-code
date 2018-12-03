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


const defaultMatch = (s, m) => s === m;

const isMatch = (o, m, c) => Object.keys(o.attrs).every(k => ((c || {})[k] || defaultMatch)(o.attrs[k], m[k]));

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

module.exports = {
  parse,
  isMatch,
  model
};
