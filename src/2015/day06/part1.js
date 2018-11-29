const string = require('../../util/string');
const array = require('../../util/array');

const actions = {
  'turn off': l => 0,
  'toggle': l => l ? 0 : 1,
  'turn on': l => 1
};
const parse = c => {
  const r = c.match(/(turn off|turn on|toggle) (\d+),(\d+) through (\d+),(\d+)/).splice(1);
  for (var x = 1; x <= 4; x++) { r[x] = Number(r[x]); }
  return r;
}
const command = (l, c) => {
  const a = actions[c[0]];
  for (var x = c[1]; x <= c[3]; x++) {
    for (var y = c[2]; y <= c[4]; y++) {
      l[x][y] = a(l[x][y]);
    }
  }
}

const sum = l => l.reduce((p, c) => p + c.reduce((p2, c2) => p2 + c2, 0), 0);

module.exports = function (input) {
  const lights = array.grid(1000, 1000);
  string.lines(input).map(parse).forEach(c => {
    command(lights, c);
  });
  return sum(lights);
}