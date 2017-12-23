const _ = require('lodash');
const hashToInt = c => c === '#' ? 1 : 0;

const key = piece => {
  const chunk = _.chunk(piece, Math.sqrt(piece.length));
  return chunk.map(p => p.join('')).join('/');
}

const twoByTwo = (i, x, y) => {
  const xn = 2 * x, yn = 2 * y;
  return [
    i[xn + 0][yn + 0], i[xn + 0][yn + 1],
    i[xn + 1][yn + 0], i[xn + 1][yn + 1]
  ];
};

const threeByThree = (i, x, y) => {
  const xn = 3 * x, yn = 3 * y;
  return [
    i[xn + 0][yn + 0], i[xn + 0][yn + 1], i[xn + 0][yn + 2],
    i[xn + 1][yn + 0], i[xn + 1][yn + 1], i[xn + 1][yn + 2],
    i[xn + 2][yn + 0], i[xn + 2][yn + 1], i[xn + 2][yn + 2]
  ];
};

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
  let output = [], sides = 0, square = null;

  if (image.length % 2 === 0) {
    sides = image.length / 2;
    square = twoByTwo;
  } else if (image.length % 3 === 0) {
    sides = image.length / 3;
    square = threeByThree;
  } else {
    throw new Error(`Unhandled image size: ${image.length}.`);
  }
  for (let x = 0; x < sides; x++)
    for (let y = 0; y < sides; y++) {
      output.push(square(image, x, y));
    }
  return output;
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
  for (let n = 0; n < 9; n++) {
    if (patterns[k = key(piece)]) break;
    piece = n === 4 ? flipV(piece) : rotate90(piece);
  }

  if (!patterns[k]) {
    throw new Error(`Unrecognized pattern: ${k}`);
  }
  return patterns[k];
}

const join = pieces => {
  const output = [];
  const innerSquareColumns = Math.sqrt(pieces.length);
  const cellsPerRowSquare = Math.sqrt(pieces[0].length);
  const sideCount = innerSquareColumns * cellsPerRowSquare;
  for (let y = 0; y < sideCount; y++) {
    const row = [], innerSquareRow = Math.floor(y / cellsPerRowSquare);
    for (let x = 0; x < sideCount; x++) {
      const innerSquareCol = Math.floor(x / cellsPerRowSquare);
      const rowOfInnerSquare = y % cellsPerRowSquare;
      const squareId = innerSquareRow * innerSquareColumns + innerSquareCol;
      const cellId = (rowOfInnerSquare * cellsPerRowSquare) + x % cellsPerRowSquare;
      row.push(pieces[squareId][cellId]);
    }
    output.push(row);
  }
  return output;
}

function run (input, iterations) {
  let image = start, patterns = parse(input);
  for (let n = 0; n < iterations; n++) {
    const pieces = split(image).map(p => match(p, patterns));
    image = join(pieces);
  }
  const sum = (p, c) => p + c;
  return image.reduce((p, c) => p + c.reduce(sum, 0), 0);
}

module.exports = {
  start,
  parse,
  split,
  match,
  join,
  rotate90,
  flipV,
  run,
  part1: function (input) {
    return run(input, 5);
  },
  part2: function (input) {
    return run(input, 18);
  }
}