const md5 = require('md5');

const hash = (key, n) => md5(key + n.toString());

module.exports = function (input) {
  for(let n = 0; true; n++) {
    if (hash(input, n).startsWith('00000')) {
      return n;
    }
  }
}