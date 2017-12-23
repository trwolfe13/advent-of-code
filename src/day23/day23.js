const parse = i => i.match(/[^\r\n]+/g).map(n => n.split(' '));
const registers = () => ({ a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, _: 0, mul: 0 });
const terminated = (p, i) => (p._ < 0 || p._ >= i.length);
const execute = (p, i) => { let x = i[p._]; instructions[x[0]](instructions, p, ...x.slice(1)); }

const instructions = {
  get: (r, x) => isNaN(x) ? r[x] : Number(x),
  set: (i, r, x, y) => { r[x] = i.get(r, y); r._++ },
  sub: (i, r, x, y) => { r[x] -= i.get(r, y); r._++ },
  mul: (i, r, x, y) => { r[x] *= i.get(r, y); r._++; r.mul++; },
  jnz: (i, r, x, y) => { if (i.get(r, x) !== 0) { r._ += i.get(r, y) } else { r._++ } }
}

module.exports = {
  part1: function (input) {
    const i = parse(input), r = registers();
    while (!terminated(r, i)) {
      execute(r, i);
    }
    return r.mul;
  },
  part2: function (input) {
    return 0;
  }
}