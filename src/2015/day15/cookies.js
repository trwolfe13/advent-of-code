const string = require('../../util/string');
const _ = require('lodash');

const parse = input => string.lines(input).map(l => {
  const [_, name, c, d, f, t, cl] = l.match(/(.+) .+ (-?\d+), .+ (-?\d+), .+ (-?\d+), .+ (-?\d+), .+ (-?\d+)/);
  return { name, capacity: Number(c), durability: Number(d), flavor: Number(f), texture: Number(t), calories: Number(cl) };
});

module.exports = {
  parse,
};
