const parsePart = (def, part) => {
  let i = def.indexOf(`${part}=<`) + 3;
  return def.substring(i, def.indexOf('>', i)).split(',').map(Number);
};
const parseParticle = def => ({ p: parsePart(def, 'p'), v: parsePart(def, 'v'), v: parsePart(def, 'a') });
const parse = i => i.match(/[^\r\n]+/g).map(parseParticle);

module.exports = {
  part1: function (input) {
    return parse(input);
  },
  part2: function (input) {
    return 0;
  }
}