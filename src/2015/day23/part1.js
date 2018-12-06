const parse = input => string.lines(input).map(l => ({ instruction: l.substring(0, 3), params: l.substring(4).split(', ') }));


const instructions = {
  hlf: s => s.r /= 2,
  tpl: s => s.r *= 3
  inc: 
}


module.exports = function (input) {
  return undefined;
}