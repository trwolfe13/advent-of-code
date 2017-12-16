const parse = i => i.split(',');
const swap = (a, [x, y]) => { let t = a[y]; a[y] = a[x]; a[x] = t; return a; }

const move = {
  's': (d, i) => d.splice(d.length - Number(i)).concat(d),
  'x': (d, i) => swap(d, i.split('/').map(Number)),
  'p': (d, i) => swap(d, [d.indexOf(i[0]), d.indexOf(i[2])])
}

function dance (m) {
  let d = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
  m.forEach(i => d = move[i[0]](d, i.slice(1)));
  return d;
}

module.exports = {
  part1: i => dance(parse(i)).join(''),
  part2: function (input) {
    return 0;
  }
}