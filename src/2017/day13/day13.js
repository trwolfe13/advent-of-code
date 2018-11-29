const parse = i => Object.assign({}, ...i.match(/[^\r\n]+/g).map(s => s.trim().split(': ').map(Number)).map(s => ({ [s[0]]: s[1] })));

function positionAt(l, t) {
  const cm = l - 1;
  return cm - Math.abs(t % (2 * cm) - cm);
}

function severity(f) {
  let t = 0;
  for (let i of Object.keys(f)) {
    if (positionAt(f[i], Number(i)) === 0) {
      t += Number(i) * f[i];
    }
  }
  return t;
}

function willCatch(f, d) {
  for (let i of Object.keys(f)) {
    if (positionAt(f[i], d + Number(i)) === 0) { return true; }
  }
  return false;
}

module.exports = {
  positionAt,
  part1: function (input) {
    const f = parse(input);
    return severity(f);
  },
  part2: function (input) {
    let d = 0, f = parse(input);
    while (willCatch(f, d)) { d++; };
    return d;
  }
}