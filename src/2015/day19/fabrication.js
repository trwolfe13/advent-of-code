const _ = require('lodash');
const string = require('../../util/string');

const parse = input => {
  const result = string.lines(input);
  return {
    patterns: result.slice(0, result.length - 2).map(p => p.split(' => ')),
    molecule: result[result.length - 1]
  }
}

const allPossible = (molecule, pattern) => {
  const list = [];
  const regex = new RegExp(pattern[0], 'g');
  let match;
  while (match = regex.exec(molecule)) {
    const newPat = molecule.substring(0, match.index) + pattern[1] + molecule.substring(match.index + pattern[0].length);
    if (!list.includes(newPat)) { list.push(newPat); }
  }
  return list;
}

const allPossibles = (molecule, patterns) => {
  const list = [];
  patterns.forEach(pattern => {
    allPossible(molecule, pattern).forEach(p2 => {
      if (!list.includes(p2)) { list.push(p2); }
    });
  });
  return list;
}

const perms = data => allPossibles(data.molecule, data.patterns);

const reverse = (start, end, patterns) => {
  const visited = [start];
  const queue = [{ molecule: start, steps: 0 }];

  while (queue.length) {
    const { molecule, steps } = queue.shift();
    if (molecule === end) { return steps; }

    // console.log('Checking', molecule, steps);

    // if (steps > 7) { return; }

    const candidates = _.chain(patterns)
      .filter(([_, replacement]) => molecule.indexOf(replacement) > -1)
      .orderBy(([_, replacement]) => replacement.length, 'desc')
      .reverse()
      .value()
      .map(([x, y]) => ({ molecule: molecule.replace(x, y), steps: steps + 1 }));

    candidates.forEach(c => {
      queue.push(c);
      visited.push(c.molecule);
    });
  }
}

module.exports = {
  parse,
  perms,
  reverse
};
