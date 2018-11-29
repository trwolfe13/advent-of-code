module.exports = function (input) {
  let curIt = input.toString();
  for (var x = 0; x < 40; x++) {
    curIt = curIt.match(/(\d)\1*/g).reduce((p, c) => p += c.length.toString() + c[0], '');
  }
  return curIt.length;
}