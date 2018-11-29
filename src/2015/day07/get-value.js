const string = require('../../util/string');

const funcs = {
  AND: (l, r) => l & r,
  OR: (l, r) => l | r,
  LSHIFT: (l, r) => l << r,
  RSHIFT: (l, r) => l >>> r
};

const getValue = (is, w, ws = {}) => {
  if (!isNaN(w)) { return Number(w); }
  if (ws[w]) { return ws[w]; }

  const o = is.find(i => i[1] === w);

  if (!isNaN(o[0])) {
    ws[w] = Number(o[0]);
  } else {
    const p = string.words(o[0]);
    if (p.length === 1) { ws[w] = getValue(is, p[0], ws); }
    else if (p.length === 2) { ws[w] = ~getValue(is, p[1], ws); }
    else { ws[w] = funcs[p[1]](getValue(is, p[0], ws), getValue(is, p[2], ws)); }
  }
  return ws[w];
};

module.exports = getValue;