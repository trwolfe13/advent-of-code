const parse = input => string.lines(input).map(l => ({ instruction: l.substring(0, 3), params: l.substring(4).split(', ') }));


const instructions = {
  hlf: (s, p) => s[p] /= 2,
  tpl: (s, p) => s[p] *= 3,
  inc: (s, p) => s[p]++,
  jpm: (s, p) => s.c += p,
  
}


module.exports = function (input) {
  return undefined;
}