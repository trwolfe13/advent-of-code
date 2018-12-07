const codes = require('./codes');

module.exports = function (input) {
  const instructions = codes.parse(input);
  const state = { a: 1, b: 0, c: 0 };
  while (state.c >= 0 && state.c < instructions.length) {
    const instruction = instructions[state.c];
    codes.instructionMap[instruction.code](state, ...instruction.params);
  }
  return state.b;
}