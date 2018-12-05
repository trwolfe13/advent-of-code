
const string = require('../../util/string');

const parse = input => {
  const result = string.lines(input);
  return {
    patterns: result.slice(0, result.length - 2).map(p => p.split(' => ')),
    molecule: result[result.length - 1]
  }
}

const perms = data => {
  const list = [];
  data.patterns.forEach(pattern => {
    const regex = new RegExp(pattern[0], 'g');
    let match;
    while (match = regex.exec(data.molecule)) {
      const newPat = data.molecule.substring(0, match.index) + pattern[1] + data.molecule.substring(match.index + pattern[0].length);
      if (!list.includes(newPat)) { list.push(newPat); }
    }
  });
  return list;
}

module.exports = {
  parse,
  perms
};
