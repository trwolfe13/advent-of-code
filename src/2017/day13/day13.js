const parse = i => Object.assign({}, ...i.match(/[^\r\n]+/g).map(s => s.trim().split(': ').map(Number)).map(s => ({ [s[0]]: { r: s[1], p: 0, d: 1 } })));
const move = l => Object.keys(l).map(i => l[i]).forEach(s => { s.p += s.d; if (s.p === 0 || s.p >= s.r - 1) s.d *= -1; });

module.exports = {
  part1: function (input) {
    let s = parse(input), t = 0;
    for (let n = 0; n <= Math.max(...Object.keys(s).map(Number)); n++) {
      if (s[n] && s[n].p === 0) { t += n * s[n].r; }
      move(s);
    }
    return t;
  },
  part2: function (input) {
    return 0;
  }
}