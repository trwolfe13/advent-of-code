const _ = require('lodash');
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
  const inner = (weight, current = [], perms = []) => {
    if (weight === 0) {
      perms.push(_.sortBy(current, c => c));
      // perms.push(current);
      return perms;
    } else if (maxLen && current.length === maxLen) {
      return perms;
    }

    const available = packages.filter(p => !current.includes(p) && p <= weight);
    if (!available.length) { return; }

    available.forEach(package => {
      const packageList = [...current, package];
      inner(weight - package, packageList, perms);
    });
    return perms;
  }
  return _.uniqWith(inner(weight), _.isEqual);
}

// const weightPerms = (packages, weight, current = [], perms = []) => {
//   if (weight === 0) {
//     perms.push(current);
//     return perms;
//   }

//   const available = packages.filter(p => !current.includes(p) && p <= weight);
//   if (!available.length) { return; }

//   available.forEach(package => {
//     const packageList = [...current, package];
//     weightPerms(packages, weight - package, packageList, perms);
//   });
//   return perms;
// }

module.exports = function (input) {
  let packages = parse(input);
  // packages = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
  packages = _.orderBy(packages, p => p, 'desc');

  const weight = groupWeight(packages);
  console.log('Group weight:', weight);

  const shortest = shortestMatch(packages, weight);
  console.log('Shortest match:', shortest);

  console.log(weightPerms(packages, weight, shortest))
  return undefined;
}