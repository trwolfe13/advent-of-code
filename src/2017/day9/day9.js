function countGroups (s) {
  let t = 0, d = 1, g = false, f = 0, c;
  for (let n = 0, c = s[0]; n < s.length; n++ , c = s[n]) {
    if (c === '!') n++;
    else if (c === '>') g = false;
    else if (g) f++;
    else if (c === '{' && !g) t += d++;
    else if (c === '}' && !g) d--;
    else if (c === '<') g = true;
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