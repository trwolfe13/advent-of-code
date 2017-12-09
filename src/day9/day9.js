function countGroups (s) {
  let t = 0, d = 1, g = false, c;
  for (let n = 0; n < s.length; n++) {
    switch (!!(c = s.charAt(n))) {
      case c === '!': n++; break;
      case c === '{' && !g: t += d++; break;
      case c === '}' && !g: d--; break;
      case c === '<': g = true; break;
      case c === '>': g = false; break;
    }
  }
  return t;
}

module.exports = {
  part1: countGroups,
  part2: function (input) {
    return 0;
  }
}