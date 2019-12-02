const intcode = require('./intcode');

module.exports = function (input) {
  const program = intcode.parse(input);

  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const memory = [...program];
      memory[1] = noun;
      memory[2] = verb;
      intcode.execute(memory);

      if (memory[0] === 19690720) {
        return 100 * noun + verb;
      }
    }
  }

  return undefined;
}