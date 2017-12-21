const hashToInt = c => c === '#' ? 1 : 0;
const mapHashToInt = r => r.split('').map(hashToInt);

const start = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1]
];

const parse = i => {
  const o = i.match(/[^\r\n]+/g).map(l => {
    const p = l.split(' => ');
    return { [p[0].replace(/#/g, '1').replace(/\./g, '0')]: p[1].split('/').map(mapHashToInt) };
  });
  return Object.assign({}, ...o);
}

module.exports = {
  parse,
  part1: function (input) {
    let image = parse(input);
    for (let n = 0; n <= 5; n++) {

    }
    return 0;
  },
  part2: function (input) {
    return 0;
  }
}