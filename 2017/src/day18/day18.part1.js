const parse = i => i.match(/[^\r\n]+/g).map(n => n.split(' '));
const registers = () => ({ a: 0, b: 0, i: 0, f: 0, p: 0, snd: 0, _: 0 });
const terminated = p => (p._ < 0 || p._ >= p.length);
const execute = (p, i) => { let x = i[p._]; instructions[x[0]](instructions, p, ...x.slice(1)); }

const instructions = {
  get: (r, x) => isNaN(x) ? r[x] : Number(x),
  snd: (i, r, x) => { r.snd = i.get(r, x); r._++ },
  set: (i, r, x, y) => { r[x] = i.get(r, y); r._++ },
  add: (i, r, x, y) => { r[x] += i.get(r, y); r._++ },
  mul: (i, r, x, y) => { r[x] *= i.get(r, y); r._++ },
  mod: (i, r, x, y) => { r[x] %= i.get(r, y); r._++ },
  rcv: (i, r, x) => { if (i.get(r, x) !== 0) { r._ = -1 } else { r._++ } },
  jgz: (i, r, x, y) => { if (i.get(r, x) > 0) { r._ += i.get(r, y) } else { r._++ } }
}

module.exports = function (input) {
  const i = parse(input), r = registers();
  while (!terminated(r)) {
    execute(r, i);
  }
  return r.snd;
};
