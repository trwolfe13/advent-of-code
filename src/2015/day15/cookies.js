const string = require('../../util/string');
const _ = require('lodash');

const parse = input => string.lines(input).map(l => {
  const [_, name, c, d, f, t, cl] = l.match(/(.+) .+ (-?\d+), .+ (-?\d+), .+ (-?\d+), .+ (-?\d+), .+ (-?\d+)/);
  return { name, capacity: Number(c), durability: Number(d), flavor: Number(f), texture: Number(t), calories: Number(cl) };
});

const total = (i, a) => {
  const r = { capacity: 0, durability: 0, flavor: 0, texture: 0, calories: 0, total: 0 };
  for (let x = 0; x < i.length; x++) {
    r.capacity += (a[x] * i[x].capacity);
    r.durability += (a[x] * i[x].durability);
    r.flavor += (a[x] * i[x].flavor);
    r.texture += (a[x] * i[x].texture);
    r.calories += (a[x] * i[x].calories);
    r.total = (Math.min(r.capacity, r.durability, r.flavor, r.texture) < 0) ? 0 : r.capacity * r.durability * r.flavor * r.texture;
  }
  return r;
}

module.exports = {
  parse,
  total
};
