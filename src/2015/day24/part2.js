const _ = require('lodash');

const sleigh = require('./sleigh');

module.exports = function (input) {
  let packages = sleigh.parse(input);
  packages = _.orderBy(packages, p => p, 'desc');
  const weight = sleigh.groupWeight(packages, 4);
  const shortest = sleigh.shortestMatch(packages, weight);
  const shortestPerms = sleigh.weightPerms(packages, weight, shortest);
  return sleigh.lowestQE(shortestPerms).value;
}