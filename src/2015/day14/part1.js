const _ = require('lodash');
const string = require('../../util/string');

const parse = input => string.lines(input).map(l => {
  const [_, name, speed, time, rest] = l.match(/(.+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds\./);
  return {
    name,
    speed: Number(speed),
    time: Number(time),
    rest: Number(rest),
    status: 'f',
    remaining: Number(time),
    distance: 0
  };
});

const second = rs => {
  rs.forEach(r => {
    if (r.remaining === 0) {
      if (r.status === 'f') {
        r.status = 'r';
        r.remaining = r.rest;
      } else {
        r.status = 'f';
        r.remaining = r.time;
      }
    }
    if (r.status === 'f') { r.distance += r.speed; }
    r.remaining--;
  });
}

module.exports = function (input) {
  const data = parse(input);
  for (let x = 0; x < 2503; x++) {
    second(data);
  }
  return _.max(data.map(d => d.distance));
}