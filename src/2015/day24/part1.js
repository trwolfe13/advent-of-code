const _ = require('lodash');
const array = require('../../util/array');
const string = require('../../util/string');

const parse = input => string.lines(input).map(Number);

const groupWeight = packages => _.sum(packages) / 3;

const shortestMatch = (packages, weight) => {
  const inner = (p, w, c = []) => {
    if (w === 0) { return c.length; }
    const n = p.find(p => !c.includes(p) && p <= w);
    return inner(p, w - n, [...c, n]);
  };
  const sortedPackages = _.orderBy(packages, n => n, 'desc');
  return inner(sortedPackages, weight);
}

const weightPerms = (packages, weight, maxLen = 0) => {
  const inner = (packages, weight, current = [], perms = []) => {
    if (weight === 0) {
      perms.push(current);
      return perms;
    } else if (maxLen && current.length === maxLen) {
      return perms;
    }

    const available = packages.filter(p => p <= weight);
    if (!available.length) { return; }

    available.forEach((package, i) => {
      const packageList = [...current, package];
      inner(packages.slice(i + 1), weight - package, packageList, perms);
    });
    return perms;
  }
  return _.uniqWith(inner(packages, weight), _.isEqual);
}

const lowestQE = perms => array.projectReduce(perms, array.product, (p, c) => c < p);

module.exports = function (input) {
  let packages = parse(input);
  packages = _.orderBy(packages, p => p, 'desc');
  const weight = groupWeight(packages);
  const shortest = shortestMatch(packages, weight);
  const shortestPerms = weightPerms(packages, weight, shortest);
  const group1 = lowestQE(shortestPerms);
  return group1.value;
}