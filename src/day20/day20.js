const parsePart = (def, part) => {
  let i = def.indexOf(`${part}=<`) + 3;
  return def.substring(i, def.indexOf('>', i)).split(',').map(Number);
};
const parseParticle = def => ({ p: parsePart(def, 'p'), v: parsePart(def, 'v'), a: parsePart(def, 'a') });
const parse = i => i.match(/[^\r\n]+/g).map(parseParticle);

const move = p => {
  p.v.0 += p.a.0;
  p.v.1 += p.a.1;
  p.v.2 += p.a.2;
  p.p.0 += p.v.0;
  p.p.1 += p.v.1;
  p.p.2 += p.v.2;
}

module.exports = {
  part1: function (input) {
    return parse(input);
  },
  part2: function (input) {
    return 0;
  }
}