const fabrication = require('./fabrication');

module.exports = function (input) {
  const data = fabrication.parse(input)

  // const data = {
  //   patterns: [
  //     ['e', 'H'],
  //     ['e', 'O'],
  //     ['H', 'HO'],
  //     ['H', 'OH'],
  //     ['O', 'HH'],
  //   ],
  //   molecule: 'HOHOHOHOHOHOHOHO'
  // };

  const start = new Date().getTime();
  const result = fabrication.reverse(data.molecule, 'e', data.patterns);
  const end = new Date().getTime();
  console.log(result, 'took', end - start, 'ms');
  return result;
}
