const _ = require('lodash');
const race = require('./race');

module.exports = function (input) {
  const data = race.parse(input);
  for (let x = 0; x < 2503; x++) {
    race.second(data);
  }
  return _.max(data.map(d => d.points));
}