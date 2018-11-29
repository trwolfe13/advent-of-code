const parse = i => i.split(',');
const swap = (a, [x, y]) => { let t = a[y]; a[y] = a[x]; a[x] = t; return a; }

const move = {
  's': (d, i) => d.splice(d.length - Number(i)).concat(d),
  'x': (d, i) => swap(d, i.split('/').map(Number)),
  'p': (d, i) => swap(d, [d.indexOf(i[0]), d.indexOf(i[2])])
}

function dance (m, t = 1) {
  let d = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
  const s = d.join('');

  let i = t;
  for (let n = 1; n <= t; n++) {
    m.forEach(i => d = move[i[0]](d, i.slice(1)));
    if (d.join('') === s) { i = t % n; break; }
    i--;
  }

  while (i > 0) { m.forEach(i => d = move[i[0]](d, i.slice(1))); i--; }
  return d;
}

module.exports = {
  part1: i => dance(parse(i), 1).join(''),
  part2: i => dance(parse(i), 1000000000).join(''),
}