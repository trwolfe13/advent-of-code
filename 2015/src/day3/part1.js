const string = require('../../../util/string');
const func = require('../../../util/func');

const move = (l, d) => {
  switch (d) {
    case '<': l[0]--; break;
    case '>': l[0]++; break;
    case '^': l[1]++; break;
    case 'v': l[1]--; break;
  }
  return l;
}

module.exports = function (input) {
  const p = [0, 0];
  const visited = ['0,0'];
  string.chars(input).forEach(d => {
    move(p, d);
    const c = move(p, d).toString();
    if (!visited.includes(c)) { visited.push(c); }
  });
  return visited.length;
}