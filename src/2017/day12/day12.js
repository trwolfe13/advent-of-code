function map(g, l, n = 0) {
  if (l.includes(n)) { return; }
  l.push(n);
  g[n].forEach(c => map(g, l, c));
}

module.exports = {
  part1: function (input) {
    const z = [], g = input.match(/[^\r\n]+/g).map(n => n.substring(n.indexOf('>') + 2).trim().split(', ').map(Number));
    map(g, z);
    return z.length;
  },
  part2: function (input) {
    const z = [], g = input.match(/[^\r\n]+/g).map(n => n.substring(n.indexOf('>') + 2).trim().split(', ').map(Number));
    let c = 0;
    g.forEach((_, i) => {
      if (z.includes(i)) return;
      map(g, z, i); c++;
    });
    return c;
  }
}