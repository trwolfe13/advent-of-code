const parsePart = (def, part) => {
  let i = def.indexOf(`${part}=<`) + 3;
  return def.substring(i, def.indexOf('>', i)).split(',').map(Number);
};
const parseParticle = def => ({ p: parsePart(def, 'p'), v: parsePart(def, 'v'), a: parsePart(def, 'a') });
const parse = i => i.match(/[^\r\n]+/g).map(parseParticle);

const move = p => {
  p.v[0] += p.a[0];
  p.v[1] += p.a[1];
  p.v[2] += p.a[2];
  p.p[0] += p.v[0];
  p.p[1] += p.v[1];
  p.p[2] += p.v[2];
}

const distance = p => p.p.reduce((p, c) => p + Math.abs(c), 0);
const safe = particles => p => particles.filter(p2 => p2 !== p && p2.p[0] === p.p[0] && p2.p[1] === p.p[1] && p2.p[2] === p.p[2]).length === 0;

module.exports = {
  part1: function (input) {
    const particles = parse(input);
    for (let n = 0; n < 1000; n++) {
      particles.forEach(move);
    }
    let sIdx = 0, sDst = distance(particles[0]);
    for (let n = 0; n < particles.length; n++) {
      const d = distance(particles[n]);
      if (d < sDst) { sIdx = n; sDst = d; }
    }
    return sIdx;
  },
  part2: function (input) {
    let particles = parse(input), s = safe(particles);
    for (let n = 0; n < 100; n++) {
      particles.forEach(move);
      particles = particles.filter(s);
    }
    return particles.length;
  }
}