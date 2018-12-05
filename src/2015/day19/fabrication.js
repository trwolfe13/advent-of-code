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

const reverse = (start, destination, replacements) => {
  const visited = [start];
  const queue = [{ string: start, count: 0 }];
  const solution = [];
  const stack = [];

  while (queue.length) {
    const { string, count } = queue.shift();
    if (string === destination) {
      return count;
    }

    const candidates = _.chain(replacements)
      .filter(([_, replacement]) => string.indexOf(replacement) >= 0)
      .sortBy(([_, replacement]) => replacement.length)
      .reverse()
      .value()
      .map(([source, replacement]) => ({
        string: string.replace(replacement, source),
        count: count + 1,
      }))
      .filter((candidate) => !_.includes(visited, candidate.string));

    let next = _.first(candidates);
    stack.push(..._.tail(candidates));
    if (!next) {
      solution.pop();
      next = stack.pop();
    }
    visited.push(next.string);
    queue.push(next);
    solution.push(next);
  }
}

module.exports = {
  parse,
  perms,
  reverse
};
