const string = require('../../util/string');

const parse = input => string.lines(input).map(l => ({ code: l.substring(0, 3), params: l.substring(4).split(', ') }));

const instructionMap = {
  hlf: (s, r) => { s[r] /= 2; s.c++; },
  tpl: (s, r) => { s[r] *= 3; s.c++; },
  inc: (s, r) => { s[r]++; s.c++; },
  jmp: (s, o) => { s.c += Number(o) },
  jie: (s, r, o) => { s.c += s[r] % 2 === 0 ? Number(o) : 1 },
  jio: (s, r, o) => { s.c += s[r] === 1 ? Number(o) : 1 },
};

module.exports = {
  parse,
  instructionMap
};