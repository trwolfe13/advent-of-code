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

function p2 () {
  let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0;

  b = 65;
  c = b;

  if (a) {
    b *= 100;
    b -= -100000;
    c = b;
    c -= -17000;
  }

  do {
    f = 1;
    d = 2;

    do {
      e = 2;

      do {
        g = d;
        g *= e;
        g -= b;

        if (!g) {
          f = 0;
        }
        e -= -1;
        g = e;
        g -= b;

      } while (g);

      d += 1;
      g = d;
      g -= b;

    } while (g);

    if (!f) {
      h -= -1;
    }

    g = b;
    g -= c;

    if (!g) {
      return { a, b, c, d, e, f, g, h };
    }
    b -= -17;
  } while (true)
}


module.exports = {
  part1: function (input) {
    const i = parse(input), r = registers();
    while (!terminated(r, i)) {
      execute(r, i);
    }
    console.log(r);
    return r.mul;
  },
  part2: function (input) {
    console.log(p2());
  }
}