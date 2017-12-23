const _ = require('lodash');
const hashToInt = c => c === '#' ? 1 : 0;

const key = piece => {
  const chunk = _.chunk(piece, Math.sqrt(piece.length));
  return chunk.map(p => p.join('')).join('/');
}

const twoByTwoSquare = (i, x, y) => {
  const xn = 2 * x, yn = 2 * y;
  return [
    i[xn + 0][yn + 0], i[xn + 0][yn + 1],
    i[xn + 1][yn + 0], i[xn + 1][yn + 1]
  ];
};

const threeByThreeSquare = (i, x, y) => {
  const xn = 3 * x, yn = 3 * y;
  return [
    i[xn + 0][yn + 0], i[xn + 0][yn + 1], i[xn + 0][yn + 2],
    i[xn + 1][yn + 0], i[xn + 1][yn + 1], i[xn + 1][yn + 2],
    i[xn + 2][yn + 0], i[xn + 2][yn + 1], i[xn + 2][yn + 2]
  ];
};

const twoByTwo = i => [twoByTwoSquare(i, 0, 0)];
const fourByFour = i => [twoByTwoSquare(i, 0, 0), twoByTwoSquare(i, 0, 1), twoByTwoSquare(i, 1, 0), twoByTwoSquare(i, 1, 1)];

const threeByThree = i => [threeByThreeSquare(i, 0, 0)];
const sixBySix = i => [threeByThreeSquare(i, 0, 0), threeByThreeSquare(i, 0, 1), threeByThreeSquare(i, 1, 0), threeByThreeSquare(i, 1, 1)];

const sixBySixReverse = i => [
  [i[0][0], i[0][1], i[0][2], i[1][0], i[1][1], i[1][2]],
  [i[0][3], i[0][4], i[0][5], i[1][3], i[1][4], i[1][5]],
  [i[0][6], i[0][7], i[0][8], i[1][6], i[1][7], i[1][8]],
  [i[2][0], i[2][1], i[2][2], i[3][0], i[3][1], i[3][2]],
  [i[2][3], i[2][4], i[2][5], i[3][3], i[3][4], i[3][5]],
  [i[2][6], i[2][7], i[2][8], i[3][6], i[3][7], i[3][8]],
];

const start = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1]
];

const parse = i => {
  const o = i.match(/[^\r\n]+/g).map(l => {
    const p = l.split(' => ');
    return { [p[0].replace(/#/g, '1').replace(/\./g, '0')]: p[1].replace(/\//g, '').split('').map(hashToInt) };
  });
  return Object.assign({}, ...o);
}

const split = image => {
  switch (image.length) {
    case 2: return twoByTwo(image);
    case 3: return threeByThree(image);
    case 4: return fourByFour(image);
    case 6: return sixBySix(image);
    default: throw new Error(`Unhandled image size: ${image.length}.`);
  }
}

const flipV = piece => {
  switch (piece.length) {
    case 4: return [piece[1], piece[0], piece[3], piece[2]];
    case 9: return [piece[2], piece[1], piece[0], piece[5], piece[4], piece[3], piece[8], piece[7], piece[6]];
    default: throw new Error(`Unhandled piece size ${piece.length}`);
  }
}

const rotate90 = piece => {
  switch (piece.length) {
    case 4: return [piece[2], piece[0], piece[3], piece[1]];
    case 9: return [piece[6], piece[3], piece[0], piece[7], piece[4], piece[1], piece[8], piece[5], piece[2]];
    default: throw new Error(`Unhandled piece size ${piece.length}`);
  }
}

const match = (piece, patterns) => {
  let k = '';
  for (let n = 0; n < 8; n++) {
    if (patterns[k = key(piece)]) break;
    piece = n === 4 ? flipV(piece) : rotate90(piece);
  }

  if (!patterns[k]) {
    throw new Error(`Unrecognized pattern: ${k}`);
  }
  return patterns[k];
}

const join = pieces => {
  if (pieces.length === 1) { return _.chunk(pieces[0], Math.sqrt(pieces[0].length)); }
  switch (pieces[0].length) {
    case 4: return fourByFour(pieces);
    case 9: return sixBySixReverse(pieces);
    default: throw new Error(`Unhandled image size ${pieces[0].length}`);
  }
}

module.exports = {
  parse,
  split,
  match,
  join,
  rotate90,
  flipV,
  part1: function (input) {
    let image = start, patterns = parse(input);
    for (let n = 0; n <= 5; n++) {
      const pieces = split(image).map(p => match(p, patterns));
      image = join(pieces);
    }
    return 0;
  },
  part2: function (input) {
    return 0;
  }
}