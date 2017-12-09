function countGroups (s) {
  let t = 0, d = 1, g = false, f = 0, c;
  for (let n = 0; n < s.length; n++) {
    switch (!!(c = s.charAt(n))) {
      case c === '!': n++; break;
      case c === '>': g = false; break;
      case g: { f++; break; }
      case c === '{' && !g: t += d++; break;
      case c === '}' && !g: d--; break;
      case c === '<': g = true; break;
    }
  }
  return { t, f };
}

module.exports = {
  part1: function (input) {
    return countGroups(input).t;
  },
  part2: function (input) {
    return countGroups(input).f;
  }
}