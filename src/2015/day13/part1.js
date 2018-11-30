const _ = require('lodash');
const array = require('../../util/array');
const string = require('../../util/string');

const parse = input => string.lines(input).map(l => {
  const [_, name, m, value, neighbor] = l.match(/(.+) would (gain|lose) (\d+) happiness units by sitting next to (.+)\./);
  return { name, neighbor, value: Number(value) * (m === 'gain' ? 1 : -1) };
});

const perms = g => array.permute(_.uniq(g.map(n => n.name)));
const ruleValid = (c, p) => {
  const i = p.indexOf(c);
  const n = [p[(i - 1 + p.length) % p.length], p[(i + 1) % p.length]];
  return r => r.name === c && n.includes(r.neighbor);
}
const personDelta = (c, p, g) => _.sum(g.filter(ruleValid(c, p)).map(n => n.value));

const permDelta = (p, g) => p.reduce((pr, c) => pr + personDelta(c, p, g), 0);

module.exports = function (input) {
  const g = parse(input);
  const p = perms(g);
  return array.projectReduce(p, n => permDelta(n, g), (p, c) => c > p).value;
}