const intcode = require('./intcode');

module.exports = function (input) {
  const program = intcode.parse(input);
  program[1] = 12;
  program[2] = 2;
  intcode.execute(program);
  return program[0];
}