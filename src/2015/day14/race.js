const string = require('../../util/string');
const _ = require('lodash');

const parse = input => string.lines(input).map(l => {
  const [_, name, speed, time, rest] = l.match(/(.+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds\./);
  return {
    name,
    speed: Number(speed),
    time: Number(time),
    rest: Number(rest),
    status: 'f',
    remaining: Number(time),
    distance: 0,
    points: 0
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
  const furthest = _.max(rs.map(r => r.distance));
  rs.filter(r => r.distance === furthest).forEach(r => r.points++);
}

module.exports = {
  parse,
  second
};
