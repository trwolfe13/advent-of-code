const string = require('../../util/string');

module.exports = function (input) {
  const keypad = [
    [' ', ' ', '1', ' ', ' '],
    [' ', '2', '3', '4', ' '],
    ['5', '6', '7', '8', '9'],
    [' ', 'A', 'B', 'C', ' '],
    [' ', ' ', 'D', ' ', ' '],
  ];
  const pos = [2, 1];
  let code = '';

  string.lines(input).forEach(l => {
    string.chars(l).forEach(c => {
      switch (c) {
        case 'U': pos[0] = Math.max(Math.abs(pos[1] - 2), pos[0] - 1); break;
        case 'D': pos[0] = Math.min(4 - Math.abs(pos[1] - 2), pos[0] + 1); break;
        case 'L': pos[1] = Math.max(Math.abs(pos[0] - 2), pos[1] - 1); break;
        case 'R': pos[1] = Math.min(4 - Math.abs(pos[0] - 2), pos[1] + 1); break;
      }
    });
    code += keypad[pos[0]][pos[1]];
  });
  return code;
}