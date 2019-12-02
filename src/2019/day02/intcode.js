const parse = p => p.split(',').map(Number);

const execute = (program) => {
  let position = 0;
  while (program[position] === 1 || program[position] === 2) {
    executeOp(program, position);
    position += 4;
  }
}

const executeOp = (program, position) => {
  const opCode = program[position];
  switch (opCode) {
    case 1:
    case 2:
      const a1 = program[position + 1];
      const a2 = program[position + 2];
      const a3 = program[position + 3];

      const v1 = program[a1];
      const v2 = program[a2];

      program[a3] = (opCode === 1) ? v1 + v2 : v1 * v2;
      break;
    default: return;
  }
};

module.exports = {
  parse,
  execute,
  executeOp
};
